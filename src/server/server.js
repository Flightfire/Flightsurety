import FlightSuretyApp from '../../build/contracts/FlightSuretyApp.json';
import Config from './config.json';
import Web3 from 'web3';
// "web3": "^1.2.4",
import express from 'express';
//const Web3 = require('web3');

let config = Config['localhost'];
//let provider = new Web3.providers.WebsocketProvider(config.url.replace('http', 'ws'))
let provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
let web3 = new Web3(provider);
web3.eth.defaultAccount = web3.eth.accounts[0];
let defaultAccount = web3.eth.accounts[0];
let flightSuretyApp = new web3.eth.Contract(FlightSuretyApp.abi, config.appAddress);
let oracleAddresses = [];


//Initiate 20 Oracles and store in memory. 
function spinUpOracles() {
  console.log('starting server');
  console.log('appAddress: ' + config.appAddress);
  console.log('url:' + config.url);
  console.log('dataAddress: ' + config.dataAddress);
  console.log('Provider: ' + provider.connected);
  console.log("Connected: " + web3.isConnected);
  console.log('Default: ' + defaultAccount);
  
  let oracles = [];
}

spinUpOracles()//.then(oracles =>{
  //console.log("All oracles registered");
//});

const app = express();

app.get('/api', (req, res) => {
    res.send({
      message: 'An API for use with your Dapp!'
    })
})

// flightSuretyApp.events.OracleRequest({
//     fromBlock: 0
//   }, function (error, event) {
//     if (error) console.log(error)
//     console.log(event)
// });
//   return new Promise((resolve, reject) => {
//     //Get accounts from Blockchain
//     web3.eth.getAccounts().then(accs => {
//       console.log("Accounts" - accs)
//       //Get the Oracle registration fee from dapp
//       // flightSuretyApp.methods.REGISTRATION_FEE().call().then(fee => {
//       //   console.log("Fee" - fee)
//       //   //Register the last 20 accounts as oracles.
//       //   accs.slice(-20).forEach(account => {
//       //     flightSuretyApp.methods.registerOracle.send({ 
//       //       from: account,
//       //       value: fee
//       //     }).then(() => {
//       //       //Get the oracle index results from dapp
//       //       flightSuretyApp.methods.getMyIndexes().call({
//       //         from: account
//       //       }).then(index => {
//       //         oracles.push(index);
//       //         oracleAddresses.push(account);
//       //         console.log(`Oracle Registered: ${index[0]}, ${index[1]}, ${index[2]} at ${account}`);
//       //       }).catch(err => { //getMyIndexes
//       //         reject(err);
//       //       });
//       //     }).catch(err => { //registerOracle
//       //       reject(err);
//       //     });
//       //   })
//       //   resolve(oracles)
//       // }).catch(err => { //REGISTRATION_FEE
//       //   reject(err);
//       // });
//     }).catch(err => { //getAccounts
//       reject(err);
//     });
//   });
// }



//Things to do - Doesn't do anything to handle requests yet.
//1. Spin up the oracles.
//2. Persist their state in memory.
//3. Come up with answer about whether flight is late or not.
//4. Respond to dapp
//Note: Can have flights hard-coded.

export default app;


