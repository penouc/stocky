const urllib = require("urllib");
const iconv = require("iconv-lite");

let req = code => {
  let type = "" || "hk";
  console.log("loading");
  let loadingFlag = ".";
  let startFlag = setInterval(function() {
    console.console.assert({});
    // console.log(loadingFlag + ".");
  }, 50);
  let stockCode = type + ("" + code).padStart(5, "0");
  return urllib
    .request("http://hq.sinajs.cn/rn=1519547782175&list=" + stockCode)
    .then(res => {
      if (res.status === 200) {
        let str = iconv.decode(res.data, "GBK");
        console.log("res", str);
        clearInterval(startFlag);
      }
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

let reqByCode = code => {
  return Promise.resolve(code);
};

exports.req = req;
exports.reqByCode = reqByCode;
