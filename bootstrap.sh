#!/usr/bin/env bash

git submodule update --remote
npm install
cd truffle
npm run bootstrap
cd packages/truffle
npm run build