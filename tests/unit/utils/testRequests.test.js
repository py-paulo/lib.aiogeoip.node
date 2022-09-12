const dns = require('dns');

const httpGet = require('../../../src/utils/requests').httpGet;
const httpGetAsync = require('../../../src/utils/requests').httpGetAsync;

describe('Unit - Requests base function', () => {
  const hostnameTest = 'www.google.com';

  beforeAll(() => {
  });

  test('get geolocation using callback function', () => {
    dns.lookup(hostnameTest, (err, addr) => {
      if (err) throw err;
      httpGet(`http://ip-api.com/json/${addr}`, {}, (err, data) => {
        if (err) throw err;
        expect(data).toEqual(expect.objectContaining({ status: 'success' }));
      });
    });
  });

  test('get geolocation using promise', () => {
    dns.lookup(hostnameTest, (err, addr) => {
      if (err) throw err;
      httpGetAsync(`http://ip-api.com/json/${addr}`, {})
        .then((data) => {
          expect(data).toEqual(expect.objectContaining({ status: 'success' }));
        })
        .catch(err => {
          throw err;
        });
    });
  });

});