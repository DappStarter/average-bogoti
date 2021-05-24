require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note meadow undo hunt person equal gasp'; 
let testAccounts = [
"0xf1e6c8887de1a3e353f89259cd3257aace604833587977f2b5a84ab4e2670f54",
"0x60dfe72f358023514486602b8fd553e06dda119dc594d62eda7af894fc05a9d9",
"0x97bf6f567dd56b0e3ba1ca235df1f00214dcf31c6002b591c0a19daf22b33f9d",
"0xb29493c166f2aed4bed83951d304ee898bf02bac7616dc38f39e81c8e00e1574",
"0x5a48aad4496330f401a76f16dc35909d58b0cf65e47095d3bf881bb54994ae3d",
"0xabfdaff8864c63679b3164412647270056dcf24e5b93d94a2df06d9a4e245e9d",
"0x56519aa7028372ac420f85e115e778054e9ded8099468a9e34f6772e40dd104d",
"0x05a22af03d24ac7bd63352b80dc011e3432bab4fe6a4a7efd72adf5b2a2764e1",
"0xc960eeb390c061835d0e94e38c9e7e7068f015dd7fb79c2a1f75bbc25a4317fc",
"0xbf57807d3c17ea8d84f105c9d3a376fdb349e6dace461be649666952b5759288"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
