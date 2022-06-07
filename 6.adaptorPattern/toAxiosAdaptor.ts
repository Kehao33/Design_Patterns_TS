/**
 * 如果一个项目中之前全部使用 jquery 来请求数据 $.ajax
 * 则我们可以使用适配器来解决这个问题
 */

{
  const $ = require("jquery");
  const axios = require("axios");

  const toAxiosAdaptor = (options) => {
    return axios({
      url: options.url,
      method: options.type,
    }).then(options.success, options.error);
  };

  // 重写这个方法里边的请求逻辑
  $.ajax = function (options) {
    return toAxiosAdaptor(options);
  };

  $.ajax({
    url: "http://localhost:8080/api/user",
    type: "GET",
    success(data) {
      console.log(data);
    },
    error(err) {
      console.log(err);
    },
  });
}
