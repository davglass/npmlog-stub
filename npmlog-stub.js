var npmlog

var noop = function () {}

var log = {
    pause: noop,
    resume: noop,
    log: noop,
    write: noop,
    addLevel: noop,
    silly: noop,
    verbose: noop,
    info: noop,
    http: noop,
    warn: noop,
    error: noop,
    silent: noop
}

try {
    npmlog = require('npmlog')
} catch (e) {
    npmlog = log
}

module.exports = npmlog

