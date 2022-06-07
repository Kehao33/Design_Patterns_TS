function xhr(config: any) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.open(config.method, config.url, true);
    request.onreadystatechange = () => {
      if (
        request.status >= 200 &&
        request.status <= 304 &&
        request.readyState === 4
      ) {
        resolve(request.response || request.responseText);
      } else {
        reject(new Error("请求失败"));
      }
    };

    request.send();
  });
}

function http(config: any) {
  const http = require("http");
  const url = require("url");

  const urlObject = url.parse(config.url);
  const { hostname, port, path } = urlObject;

  return new Promise((resolve, reject) => {
    const options = {
      hostname,
      port,
      path,
      method: config.method,
    };

    const req = http.request(options, (response: any) => {
      const chunks: any = [];

      response.on("data", (chunk: any) => {
        chunks.push(chunk);
      });

      response.on("end", () => {
        const result = Buffer.concat(chunks).toString();
        resolve(result);
      });
    });

    req.on("error", (err: any) => {
      reject(err);
    });

    req.end();
  });
}

function getDefaultAdaptor() {
  let adaptor;
  if (typeof XMLHttpRequest !== "undefined") {
    // 浏览器端使用了 XMLHttpRequest
    adaptor = xhr;
  } else if (typeof process !== "undefined") {
    // node 端使用 了http
    adaptor = http;
  }

  return adaptor;
}

function axios(config: any): any {
  const adaptor = getDefaultAdaptor();
  // 不管是浏览器端还是 node 端，都是传入一个 config 对象，返回一个 promise
  return adaptor(config);
}

axios({
  url: "http://localhost:8080/api/user?id=1",
  method: "GET",
}).then(
  (res: any) => console.log(res),
  (err: any) => {
    console.error(err);
  }
);
