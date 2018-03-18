const urllib = require("urllib");
const iconv = require("iconv-lite");

let req = () => {
  console.log("loading...");
  return urllib
    .request("http://hq.sinajs.cn/rn=1519547782175&list=hk00700")
    .then(res => {
      if (res.status === 200) {
        let str = iconv.decode(res.data, "GBK");
        console.log("res", str);
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
