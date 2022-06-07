{
  const fs = require("fs");

  /**
   * 之前的读取文件的方式是 回调函数的读取方法，容易造成回调地狱的问题
   * 因此我们可以写一个 文件读取 适配器，可以兼容 async-await 的问题
   */

  // fs.readFile("./text.txt", "utf8", (err, data) => {
  //   console.log("fs.readFile data:", data);
  // });

  // const readFileAdaptor = (...args) => {
  //   return new Promise((resolve, reject) => {
  //     fs.readFile(...args, (err, data) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve(data);
  //       }
  //     });
  //   });
  // };

  // (async function () {
  //   const content = await readFileAdaptor("./text.txt", "utf8");
  //   console.log("await result: ", content);
  // })();

  // 这个方法就是 promisify
  const promiseAdaptor = (callback) => {
    return (...args) => {
      return new Promise((resolve, reject) => {
        callback(...args, (err, data) => {
          err ? reject(err) : resolve(data);
        });
      });
    };
  };

  const readFile = promiseAdaptor(fs.readFile);
  (async function () {
    const text = await readFile("./text.txt", "utf8");
    console.log("text: ", text);
  })();
}
