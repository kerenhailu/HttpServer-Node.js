const fs = require("fs");
const ServerHttp = require("http").Server;
const util=require('util');
const readFilePromise=util.promisify(fs.readFile);
// קלאס אסינכרוני
// class BeyonceServer extends ServerHttp {
//   constructor() {
//     super();
//     this.listen(8000);
//     this.on("request", this.CallBackResponce);
//   }
//   CallBackResponce(req, res) {
//     fs.readFile("./Beyonce.txt", (err, result) => {
//       if (err) throw err;
//       if (err)res.end('errorrrr');
//       res.end(result.toString());
//     });
//   }
// }
// module.exports = new BeyonceServer();


///////////////////////////////////////////////////
// קלאס אסינכרוני שמחזירה פרמיס
class BeyonceServer extends ServerHttp {
  constructor() {
    super();
    this.listen(8000);
    this.on("request", this.CallBackResponce);
  }
  CallBackResponce(req, res) {
    readFilePromise("./Beyonce.txt")
    .then((data)=>{res.end(data)})
    .catch((error)=>{res.end("errorrrr")})
  }
}
module.exports = new BeyonceServer();

