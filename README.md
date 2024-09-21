# WiGuard

Wireless sensing based health monitoring system.

## Workflow

```mermaid
graph LR

Collector-->Broker
Model<-->Broker
Broker-->Nuxt.js
```

## How to run

First, create a `.env` file in the root directory with the following content:

```properties
DATABASE_RUL=
```

Then, build and run the project:

```bash
npm run build
npm start
```

## API

| Path   | Method | Request                | Response | Description |
| ------ | ------ | ---------------------- | -------- | ----------- |
| /login | POST   | `{username, password}` | Token    |             |
