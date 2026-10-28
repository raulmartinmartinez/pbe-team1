# LoRaWAN_outcomes — PBE Team 1 (B1)

Comunicación LoRaWAN entre un Arduino MKR WAN 1310 y The Things Stack (TTS Sandbox, clúster EU1), con nuestro gateway TTIG (`gateway-team1`).

- Aplicación TTS: `pbe-team1-2026`
- Dispositivo: `pbe-team1-arduino` (OTAA, LoRaWAN 1.0.2, plan EU 863-870 MHz)
- Responsables: Raúl (Arduino), Bruno (TTS)

## Contenido

| Carpeta / archivo | Qué es |
|---|---|
| `arduino/LoraSendAndReceive_PBE/` | Sketch del MKR WAN 1310: envía por LoRaWAN lo que se escribe en el Monitor Serie y muestra los downlinks |
| `arduino/arduino_secrets.example.h` | Plantilla de credenciales OTAA (sin claves reales) |
| `tts/payload_formatter.js` | Formatter de TTS: decodeUplink, encodeDownlink, decodeDownlink |
| `tts/formatter_tests.md` | Pruebas del formatter con entradas conocidas |
| `logs/` | Logs del Monitor Serie y JSON de TTS, una carpeta por prueba |
| `LogsOutline.txt` | Índice de los logs con fechas, horas y resultados |

## Cómo usar el sketch

1. Arduino IDE con la placa "Arduino MKR WAN 1310" y la librería **MKRWAN** (versión: completar desde Library Manager).
2. Firmware del módulo LoRa: ARD-078 1.2.3.
3. Copiar `arduino_secrets.example.h` como `arduino_secrets.h` dentro de la carpeta del sketch y poner AppEUI y AppKey de TTS. **Este archivo no se sube** (está en `.gitignore`).
4. Cargar el sketch y abrir el Monitor Serie con fin de línea "New Line".
5. Escribir un mensaje y pulsar Enter: se envía como uplink confirmado (FPort 2).

Base: ejemplo `LoraSendAndReceive` de la librería MKRWAN, con banda EU868. Nota: el log del 21/10 empieza con los mensajes del ejemplo `FirstConfiguration`, así que ese día la placa ejecutaba ese ejemplo (su bucle de envío es el mismo). A partir del 28/10 se usa este sketch, con un cambio: tras enviar, espera hasta 10 s a que llegue el downlink (antes miraba una sola vez a 1 s y no lo veía) y no se sale del buffer de recepción de 64 bytes.

## Formato de los mensajes

- **Uplink (FPort 2), 5 bytes:** msgtype, avrgPulse, maxPulse, minPulse, stdPulse (1 byte cada uno, 0-255). Propuesta de resumen ECG, pendiente de acuerdo del grupo.
- **Downlink (FPort 1), 4 bytes:** samplingRate (índice en 10/100/1000), healthReport (índice en VISIT DOCTOR/STABLE/GOOD), msgType, updateRate.

## Estado (28/10/2026)

- Uplink Arduino → TTIG → TTS: funcionando.
- Downlink: verificado el 28/10 (TTS → gateway → Arduino), con bytes y payload decodificado.

## Uso de IA

Se ha usado Claude (Anthropic) como apoyo para interpretar los logs de TTS, revisar el payload formatter (corrección de decodeDownlink), diagnosticar el fallo de recepción del downlink en el sketch y preparar esta documentación. Los cambios se han revisado y probado por el equipo (ver `tts/formatter_tests.md`).
