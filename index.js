const http = require("http");
const httpProxy = require("http-proxy");
const waitPort = require("wait-port");
const proxy = httpProxy.createProxyServer({});

const server = http.createServer(function (req, res) {
  proxy.web(req, res, { target: "http://0.0.0.0:5678" });
});

const port = process.env.PORT || "5000";

waitPort({
  host: "0.0.0.0",
  port: 5678
}).then(function (open) {
  if (open) {
    server.listen(port);
    console.log(`listening on ${port}`);
  }
}).catch(function (err) {
  console.log(err);
});
