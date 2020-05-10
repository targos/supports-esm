'use strict';
const tap = require('tap');
const semver = require('semver');
const supportsESM = require('../');

tap.test('no argument', t => {
  if (semver.gt(process.version, '14.0.0')) {
    t.ok(supportsESM())
  } else {
    t.notOk(supportsESM());
  }
  t.end();
});

tap.test('manual version overide', t => {
  t.ok(supportsESM('14.0.0'));
  t.notOk(supportsESM('8.0.0'));
  t.notOk(supportsESM('9.0.0'));
  t.notOk(supportsESM('10.0.0'));
  t.notOk(supportsESM('12.0.0'));
  t.notOk(supportsESM('13.0.0'));
  t.end();
});

tap.test('manual version overide and flag overide', t => {
  t.ok(supportsESM('14.0.0', '--experimental-modules'));
  t.ok(supportsESM('12.16.0', '--experimental-modules'));
  t.ok(supportsESM('13.7.0', '--experimental-modules'));
  t.notOk(supportsESM('8.0.0', '--experimental-modules'));
  t.notOk(supportsESM('9.0.0', '--experimental-modules'));
  t.notOk(supportsESM('10.0.0', '--experimental-modules'));
  t.notOk(supportsESM('12.0.0', '--experimental-modules'));
  t.notOk(supportsESM('13.0.0', '--experimental-modules'));
  t.end();
});
