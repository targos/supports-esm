'use strict';

const {satisfies} = require('semver');

function supportsESM(baseVersion=process.version, flags=process.execArgv) {
  const hasExperimentalModulesFlag = flags.includes('--experimental-modules');
  // unflagged in 14.x
  return satisfies(baseVersion, '>=14.x') ||
    // modern implementation without a flag in 13.7 and higher
    satisfies(baseVersion, '^13.7') ||
    // modern implementation with a flag in 12.16 and higher
    satisfies(baseVersion, '^12.16') && hasExperimentalModulesFlag;
}

module.exports = supportsESM;
