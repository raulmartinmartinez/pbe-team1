<div align="center">

# 📡 PBE · Team 1

**Projecte Bàsic d'Enginyeria** — Grau en Enginyeria de Tecnologies i Serveis de Telecomunicació (UPC)

![Estado](https://img.shields.io/badge/estado-en%20desarrollo-orange)
![Último report](https://img.shields.io/badge/último%20report-20%2F10%2F2026-blue)
![Universidad](https://img.shields.io/badge/UPC-ETSETB-0b5394)

</div>

---

## 📑 Índice

- [Descripción](#-descripción)
- [Arquitectura](#️-arquitectura)
- [Estructura del repositorio](#-estructura-del-repositorio)
- [Documentación](#-documentación)
- [Progress Reports](#-progress-reports)

## 📝 Descripción

Repositorio del equipo 1 de PBE. Aquí se recoge la documentación técnica del proyecto y los informes de progreso que se van presentando a lo largo del cuatrimestre.

## 🏗️ Arquitectura

**Task 1 — Red LoRaWAN**

![Arquitectura de red LoRaWAN](docs/img/arquitectura-lorawan.png)

```mermaid
flowchart LR
    ED["📟 Arduino MKR WAN 1310"] -- "LoRaWAN · EU868" --> GW["📶 The Things Indoor Gateway"]
    GW -- "Wi-Fi / Internet" --> TTS["☁️ The Things Stack"]
    TTS -- "MQTT / HTTP" --> APP["📈 Plataforma externa"]
    TTS -. "Downlink" .-> ED
```

Detalle de cada bloque en [`docs/arquitectura.md`](docs/arquitectura.md).

## 📂 Estructura del repositorio

```
pbe-team1/
├── Progress Reports/     # Presentaciones de seguimiento (.pptx)
├── docs/                 # Documentación técnica
│   ├── img/              # Diagramas e imágenes
│   └── arquitectura.md
└── README.md
```

## 📚 Documentación

| Documento | Contenido |
|-----------|-----------|
| [Arquitectura](docs/arquitectura.md) | Arquitectura de red LoRaWAN (Task 1) |

## 📊 Progress Reports

| Fecha | Presentación |
|-------|--------------|
| 20/10/2026 | [ProgressReport_PBE_20_10_26.pptx](Progress%20Reports/ProgressReport_PBE_20_10_26.pptx) |
| 28/10/2026 | [ProgressReport_PBE_28_10_26.pptx](Progress%20Reports/ProgressReport_PBE_28_10_26.pptx) |

Todos los informes están en la carpeta [`Progress Reports`](Progress%20Reports).
