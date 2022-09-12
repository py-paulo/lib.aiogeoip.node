![AioGeoIP logo](https://i.pinimg.com/originals/01/a7/7b/01a77baccfefd2b5c0da749a1181bf83.png)

---
<p align="center">
        <b>Real asynchronous</b> geolocation by IP address with <b>Asyncio support</b>.
</p>
<p align="center">
    Get the geolocation of IPs <b>asynchronously</b> or <b>synchronously</b> using the <a href="https://ip-api.com/" target="_blank"><b>IP-API</b></a> service with <b>cached</b> requests for greater optimization of your software.
</p>

---

## Lib AioGeoIP

A biblioteca implementa as requisições a *API* de geolocalização, lidando de forma eficiênte com grande número de requisições,  possíveis erros de *timeout* e paralelismo.

## Usage

**Usando `callback`**

```javascript
const AioGeoIp = require('./src/core');

const aio = new AioGeoIp();
aio.geoip('187.19.215.30', (err, data) => { console.log(data); });
```

**Usando *async* *await***

```javascript
const AioGeoIp = require('./src/core');

async function main() {
    const aio = new AioGeoIp();
    const data = await aio.geoipAsync('187.19.214.102');
    console.log(data);
}

main()
```

### Features

* [x] Requisição a API de geolocalização retornando um objeto com as informações.
* [ ] Cache em memória para possíveis evitar requisições repetidas a um mesmo endereço IP.
* [ ] Fila de requisições para lidar com erros de *timeout*.
* [ ] Dar suporte a mais de uma API de geolocalização.

### Requisitos não funcionais

* [x] Assincronismo.
* [ ] Utilização do padrão **singleton**.