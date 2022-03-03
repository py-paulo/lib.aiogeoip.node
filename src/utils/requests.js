const http = require('http');
const urllib = require('url');

const urlParse = url => {
  return typeof(url) === 'string' ? urllib.parse(url) : url
}

const _httpGet = (urlparse, headers, iscallback, _callback, _resolve, _reject) => {
  http.get({
    agent: false,
    host: urlparse.host,
    port: urlparse.port ? Number(urlparse.port) : urlparse.protocol.includes('http:') ? 80 : 443,
    path: urlparse.path
  }, (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];
    
    if (statusCode !== 200) {
      if (iscallback) {
        _callback(new Error(`HTTP response with status code ${statusCode}`));
        return;
      } else {
        _reject(`HTTP response with status code ${statusCode}`);
        return;
      }
    }

    res.setEncoding('utf8');

    let rawData = '';

    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);

        if (iscallback)
          _callback(null, parsedData);
        else
          _resolve(parsedData);
      } catch (err) {
        if (iscallback)
          _callback(new Error(`http response is not in the correct format in JSON. ${err}`));
        else
          _reject(`http response is not in the correct format in JSON. ${err}`);
      }
    });  
  });
}

const httpGetAsync = (url, headers) => {
  return new Promise((resolve, reject) => {
    _httpGet(urlParse(url), {}, false, null, resolve, reject);
  });
}

const httpGet = (url, headers, callback) => {
  _httpGet(urlParse(url), headers, true, callback);
}

module.exports = {
  httpGet, httpGetAsync
}
