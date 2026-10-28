// Payload formatter de pbe-team1-arduino (TTS: End devices > pbe-team1-arduino > Payload formatters)
// Copia exacta de lo guardado en TTS el 28/10/2026.
// Uplink  (FPort 2): resumen ECG de 5 bytes -> msgtype, avrgPulse, maxPulse, minPulse, stdPulse
// Downlink (FPort 1): 4 bytes <-> samplingRate, healthReport, msgType, updateRate
// Historial: v1 (21/10, Bruno). v2 (28/10): decodeDownlink corregido (antes devolvia input.data, vacio).

// ===================== Pestaña Uplink =====================
function decodeUplink(input) {
  var result = "";
  return {
    data: {
      msgtype:   input.bytes[0],
      avrgPulse: input.bytes[1],
      maxPulse:  input.bytes[2],
      minPulse:  input.bytes[3],
      stdPulse:  input.bytes[4]
    },
    warnings: [],
    errors: []
  };
}

// ===================== Pestaña Downlink =====================
var HEALTH_STATES = ["VISIT DOCTOR", "STABLE", "GOOD"];
var SAMPLING_RATE = [10, 100, 1000];

function encodeDownlink(input) {
  var bytes = [];
  bytes[0] = SAMPLING_RATE.indexOf(input.data.samplingRate);
  bytes[1] = HEALTH_STATES.indexOf(input.data.healthReport);
  bytes[2] = input.data.msgType;
  bytes[3] = input.data.updateRate;
  return { bytes: bytes, fPort: 1, warnings: [], errors: [] };
}

function decodeDownlink(input) {
  return {
    data: {
      samplingRate: SAMPLING_RATE[input.bytes[0]],
      healthReport: HEALTH_STATES[input.bytes[1]],
      msgType:      input.bytes[2],
      updateRate:   input.bytes[3]
    },
    warnings: [],
    errors: []
  };
}
