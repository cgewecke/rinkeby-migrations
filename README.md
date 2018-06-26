# rinkeby-migrations
Example repo to test new migrations on Rinkeby

### Install

```shell
$ git clone https://github.com/cgewecke/rinkeby-migrations.git --recursive
$ cd rinkeby-migrations
$ npm run bootstrap
```

### Secrets

Create a `secrets.js` as below:
```javascript
module.exports = {
  mnemonic: <12-word-mnemonic-string>,
  infura: <infura-api-key-string>
}
```

+ [Rinkeby faucet](https://faucet.rinkeby.io/)
+ [Ropsten faucet](http://faucet.ropsten.be:3001/)


### Run
```shell

$ npm run migrate:dev # You must launch ganache in separate terminal tab
$ npm run migrate:ropsten
$ npm run migrate:rinkeby

