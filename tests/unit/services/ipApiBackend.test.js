const { timeStamp } = require('console');
const dns = require('dns');
const { TestWatcher } = require('jest');

const ipApiBackend = require('../../../src/services/ipApiBackend');

describe('Unit - Using backend Ip-Api', () => {
  const hostname = 'www.google.com.br';

  test('geo geolocation using callback function with backend ip-api', () => {
    dns.lookup(hostname, (err, addr) => {
      if (err) throw err; 
      ipapi = new ipApiBackend();
      ipapi.geoip(addr, (err, data) => {
        if (err) throw err;
        expect(data).toEqual(expect.objectContaining({ status: 'success' }));
      });
    });
  });

});