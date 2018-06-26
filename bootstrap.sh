#!/usr/bin/env bash

git submodule update --remote
npm install
truffle install
cd truffle
npm run bootstrap
cd packages/truffle
npm run build
chmod +x build/cli.bundled.js