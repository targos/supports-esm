'use strict';

const assert = require('assert');
const semver = require('semver');
const supportsESM = require('.');

const hasExperimentalModulesFlag = process.execArgv.includes(
  '--experimental-modules',
);
const options = { includePrerelease: true };

if (
  semver.satisfies(process.version, '>=14.x', options) ||
  semver.satisfies(process.version, '^13.7', options) ||
  semver.satisfies(process.version, '^12.17', options) ||
  (semver.satisfies(process.version, '^12.16', options) &&
    hasExperimentalModulesFlag)
) {
  assert.ok(
    supportsESM,
    'ESM should be supported by Node.js ' + process.version,
  );
} else {
  assert.ok(
    !supportsESM,
    'ESM should not be supported by Node.js ' + process.version,
  );
}
