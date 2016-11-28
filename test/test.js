const test = require("tape");
const server = require('../server.js');

test("'/' returns 200 statusCode", function (t) {
    server.inject({method: 'GET', url: '/'}, function (res) {
        t.equal(res.statusCode, 200, 'page loaded successfully');
        server.stop();
        t.end();
    });
});
