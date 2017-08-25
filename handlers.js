var exec = require("child_process").exec;

function impares(req, res) {

  res.writeHead(200, {"Content-Type": "text/html"});
  for (var i = 1; i < 100; i++) {
    if (i%2 != 0) {
      res.write("<li>"+i);
    }
  }
  res.end();
}

exports.impares = impares;
