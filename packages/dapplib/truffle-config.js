require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture strong rice still million hockey another army gift'; 
let testAccounts = [
"0x06758df315f29cdfb5a5515cc84e26b5221b7cca2f47cd00180e6afe810edbde",
"0x27fd2d990dc84735c0fb0c5038b7f3f695e7ffeec688e3b9816e4d3049ee220d",
"0xb73c356eb13b4c880628921e587c9f8c40689b303569d02f470f8ed689997cbf",
"0x90d381de5f66db5b7106942fb607772cbb0dcf97ab71fee3f9bd932864e87752",
"0xbbbe4e43fc8fd7ce7e29ebfc1c94bb88c8a9ed37cd5949580a7da87b751f7939",
"0x019f17105963e640b1c61f30c100bd95572d9fbf01689de594dd927479e0a558",
"0xc9d09a9d05a12f429774c786c054bf27a9eea1d206780f4ce3daf13e120631df",
"0xcf0d0d46a67637d58a448da2b36492132f5d80218f386df51b3e797f810545ba",
"0xa21473a3a5800b84d4aa70e09b8cf25638139f806b33df85fbb8729ede291e78",
"0x7e8117a5a5662e1d1a88d7694c33fefec79b9f5682deac1b4c891b6a15992a43"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

