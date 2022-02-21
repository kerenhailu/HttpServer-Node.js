const httpServer = require('http').Server;
class ServerClass extends httpServer {
  constructor() {
    super();
    this.listen(3033);
    this.on("request", this.callBackRequest);
  }
  callBackRequest(request, response) {
    response.end("hi kerennnn");
  }
}
module.exports = new ServerClass();
