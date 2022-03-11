const httpGet = require('./src/utils/requests').httpGet;
const httpGetAsync = require('./src/utils/requests').httpGetAsync;
const ipApiBackend = require('./src/services/ipApiBackend');
const AioGeoIp = require('./src/core');

// httpGet('http://ip-api.com/json/187.19.214.102', {}, (err, data) => { console.log(data); });
// httpGetAsync('http://ip-api.com/json/187.19.214.102', {}).then((data) => { console.log(data); }).catch(err => { console.error(err)});
// let ipapi = new ipApiBackend();
// ipapi.geoipAsync('187.19.215.30').then((data) => { console.log(data) });
// const aio = new AioGeoIp();
// aio.geoip('187.19.215.30', (err, data) => { console.log(data); });
// aio.geoipAsync('187.19.214.102').then(data => { console.log(data); });