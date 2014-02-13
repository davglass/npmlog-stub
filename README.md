npmlog-stub
===========

Sometimes you want to create a lib and have it work on it's own, 
but you also want to use it with `npmlog`. This will help :)

usage
-----

`npm i npmlog-stub`

Now you can use the npm log functions in a stand alone lib:

```js

var log = require('npmlog-stub');

log.info('This is a test');

```

It will write nothing, if `npmlog` is not also installed. If it's installed
it will be used.

build status
------------

[![Build Status](https://travis-ci.org/davglass/npmlog-stub.png?branch=master)](https://travis-ci.org/davglass/npmlog-stub)
