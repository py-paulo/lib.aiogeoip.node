const { httpGet, httpGetAsync } = require('../utils/requests');

const urlBaseIpApi = 'http://ip-api.com/json/';

class ipApiBackend {
  constructor() {}

  geoip(ip, callback) {
    httpGet(urlBaseIpApi+ip, {}, callback);
  }

  geoipAsync(ip) {
    return httpGetAsync(urlBaseIpApi+ip, {});
  }

  requireArgs(args) {
    return []
  }
}

module.exports = ipApiBackend;
