const http = require("http");
const httpProxy = require("http-proxy");
const proxy = httpProxy.createProxyServer({});

const server = http.createServer(function (req, res) {
  proxy.web(req, res, { target: "http://0.0.0.0:5678" });
});

const port = process.env.PORT || "5000";
server.listen(port);
console.log(`listening on ${port}`);