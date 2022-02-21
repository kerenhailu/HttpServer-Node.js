const httpS = require("http").Server;
const fs = require("fs");
class CityServer extends httpS {
  constructor() {
    super();
    this.listen(8080);
    this.on("request", this.callBackREQ);
  }
  callBackREQ(req, res) {
    fs.readFile("./CityV", (err, result) => {
      if (err) res.end("error in city server");
      res.end(result.toString());
    });
  }
}
module.exports = new CityServer();
