const ipApiBackend = require('./services/ipApiBackend');

const backendMap = {
  'ip-api': ipApiBackend,
  'default': ipApiBackend
}

class AioGeoIP {
  
  constructor(backend) {
    try {
      this.backend = new backendMap[backend]()
    } catch (e) {
      this.backend = new backendMap['default']()
    }
  }

  _ipIsValid() {}

  geoip(ip, callback) {
    this.backend.geoip(ip, callback);
  }

  geoipAsync(ip) {
    return this.backend.geoipAsync(ip);
  }
}

module.exports = AioGeoIP;