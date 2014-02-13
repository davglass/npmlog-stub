var test = require('tap').test,
    npmlog = require('../npmlog-stub')

var methods = [
    'pause',
    'resume',
    'log',
    'write',
    'addLevel',
    'silly',
    'verbose',
    'info',
    'http',
    'warn',
    'error',
    'silent'
];

test('should export', function (t) {
    t.ok(npmlog, 'exported');
    methods.forEach(function (key) {
        t.ok(npmlog[key]);
    });
    t.end();
});
