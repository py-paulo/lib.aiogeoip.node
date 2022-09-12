const dns = require('dns');

const AioGeoIP = require('../../src/core');

describe('Unit - AioGeoIp', () => {
  const hostname = 'www.google.com.br';

  test('geo geolocation using callback function and not define backend', () => {
    dns.lookup(hostname, (err, addr) => {
      if (err) throw err; 
      aio = new AioGeoIP();
      aio.geoip(addr, (err, data) => {
        if (err) throw err;
        expect(data).toEqual(expect.objectContaining({ status: 'success' }));
      });
    });
  });

  test('geo geolocation using callback function using ipApiBackend', () => {
    dns.lookup(hostname, (err, addr) => {
      if (err) throw err; 
      aio = new AioGeoIp('ip-api');
      aio.geoip(addr, (err, data) => {
        if (err) throw err;
        expect(data).toEqual(expect.objectContaining({ status: 'success' }));
      });
    });
  });
});