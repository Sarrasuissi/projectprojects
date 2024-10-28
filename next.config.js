/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('next').NextConfig} */

const {PHASE_DEVELOPMENT_SERVER} = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {unoptimized: true},
    };
  }
  return {
    output: "export",
    images: {unoptimized: true},
  };
};
