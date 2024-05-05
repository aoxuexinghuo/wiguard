# 微智护WiGuard

![](https://img.shields.io/badge/Vue-green)
![](https://img.shields.io/badge/Vant-4c1)
![](https://img.shields.io/badge/ECharts-darkred)
![](https://img.shields.io/badge/Express-grey)
![](https://img.shields.io/badge/PostgreSQL-blue)

Wireless sensing based health monitoring system, collector project: [WiFall](https://github.com/saurlax/wifall).

## How to run

First, you need to configure your environment variables. You can modify it in `example.env` and rename it to `.env` to take effect.

Then, build and run it.

```bash
$ npm run build
$ npm start
```

## API

| Path   | Method | Request                | Response | Description |
| ------ | ------ | ---------------------- | -------- | ----------- |
| /login | POST   | `{username, password}` | Token    |             |
