const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'fat movie add library walnut vault net evil govern pencil east fetch',
    'https://rinkeby.infura.io/v3/aee0851561984b7dba06f43814684df8'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('attmepting to deplo');

    // const result = await new web3.eth.Contract(JSON.parse(interface))
    // .deploy({ data:bytecode,argument: ['hi there']})
    // .send({gas: '1000000' , from: accounts[0]});
    const result = await new web3.eth.Contract(JSON.parse(interface))
     .deploy({data: '0x' + bytecode }) // add 0x bytecode
     .send({gas: '1000000',from: accounts[0]});

    console.log(' deployed to ', result.options.address);
};

deploy();
