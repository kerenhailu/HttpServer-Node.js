const fs = require("fs");
const httpServer = require("http").Server;
const util=require('util');
const readFilePromise=util.promisify(fs.readFile);

class ArrayServer extends httpServer {
  constructor() {
    super();
    this.listen(9090);
    this.on("request", this.callBackReq);
  }
  callBackReq(req, res) {
    readFilePromise("./ArrayNames.json")
    .then((data)=>{res.end(data)})
    .catch((error)=>{res.end("errorrrr")})
  }
//   callBackReq(req,res){
// const infoStream=fs.createReadStream('./ArrayNames.json')
// infoStream.pipe(res)
//   }
}
module.exports = new ArrayServer();


