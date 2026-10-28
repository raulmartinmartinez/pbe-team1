// Plantilla de credenciales OTAA para el sketch LoRaWAN.
// 1. Copia este archivo como "arduino_secrets.h" en la carpeta del sketch.
// 2. Sustituye los valores por los de TTS (End device > pbe-team1-arduino).
// 3. arduino_secrets.h está en .gitignore: NO se sube al repositorio.

#define SECRET_APP_EUI "0000000000000001"                 // AppEUI / JoinEUI
#define SECRET_APP_KEY "00000000000000000000000000000000" // AppKey (32 hex) - poner la real solo en local
