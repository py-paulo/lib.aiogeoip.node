const httpGet = require('./src/utils/requests').httpGet;
const httpGetAsync = require('./src/utils/requests').httpGetAsync;

httpGet('http://ip-api.com/json/187.19.214.102', {}, (err, data) => { console.log(data); });
httpGetAsync('http://ip-api.com/json/187.19.214.102', {}).then((data) => { console.log(data); }).catch(err => { console.error(err)});