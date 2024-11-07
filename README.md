# WiGuard

Wireless sensing based health monitoring system.

## How to run

First, create a `.env` file in the root directory with the following content:

```properties
NUXT_PUBLIC_MQTT_BROKER_URI=
```

Then, start the development server:

```bash
pnpm run dev
```

## Workflow

```mermaid
graph LR

ESP32-->NanoMQ
Intel5300-->NanoMQ
NanoMQ-->Cloud
Model[⭐Model]-->Cloud
Cloud-->Web
Cloud-->Client
```

## API

| Path   | Method | Request                | Response | Description |
| ------ | ------ | ---------------------- | -------- | ----------- |
| /login | POST   | `{username, password}` | Token    |             |
