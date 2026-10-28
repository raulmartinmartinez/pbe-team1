# Pruebas del payload formatter

Pruebas hechas el 28/10/2026 con el apartado "Test" de TTS (Payload formatters) y por radio con el Arduino.

| # | Función | Entrada | Resultado obtenido | Dónde |
|---|---|---|---|---|
| 1 | decodeUplink | `01 48 5A 3C 05` (FPort 2) | msgtype 1, avrgPulse 72, maxPulse 90, minPulse 60, stdPulse 5 | Test decoder (Uplink) |
| 2 | encodeDownlink | `{"samplingRate":100,"healthReport":"GOOD","msgType":1,"updateRate":120}` | `01 02 01 78` | Test encoder (Downlink) |
| 3 | decodeDownlink | `01 02 01 78` en cola (FPort 1) | healthReport GOOD, msgType 1, samplingRate 100, updateRate 120 | Live data, "Receive downlink data message" 09:36 |
| 4 | Radio | Downlink `01 02 01 78` tras uplink T06 | Arduino: `Received: 01 02 01 78` | Monitor Serie 09:38 |
