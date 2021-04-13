const Iota = require('@iota/core');
// const Converter = require('@iota/converter');
// const Extract = require('@iota/extract-json');

const iota = Iota.composeAPI({
  provider: 'https://nodes.devnet.iota.org:443',
});



// Get Node Info
//
// iota.getNodeInfo()
//   .then(info => console.log(info))
//   .catch(error => {
//       console.log(`Request error: ${error.message}`)
//   });



// Generate a new address
//
// const seed = 'PZAHFYZNQYBVNMHJGOXZYTEJKKBGWQCDXY9VMTBA9MEOGLRJRRGNAEMTRVVOLKGWLVOLINNRKSQIXCAHI';

// iota.getNewAddress(seed, { index: 0, security: 2, total: 1 })
//   .then(address => {
//     console.log(`Your address is: ${address}`);
//   })
//   .catch(err => {
//     console.log(err);
//   });



// Get an account data
//
// const seed = 'PZAHFYZNQYBVNMHJGOXZYTEJKKBGWQCDXY9VMTBA9MEOGLRJRRGNAEMTRVVOLKGWLVOLINNRKSQIXCAHI';

// iota.getAccountData(seed, {
//   start: 0,
//   security: 2,
// })
//   .then(accountData => {
//     console.log(accountData);
//   })
//   .catch(err => {
//     console.log(err);
//   });



// Check a balance
//
iota.getBalances(['OD99BYCBOPJFIIUIWEQJRDRJQKFXZWPTPDCDORTSRWU9EDYC9IVMDNXUTOHYUUZMAJDEFWEOEQNKKULQZ'])
  .then(({ balances }) => {
  console.log(`OD: ${balances}`)
  })
  .catch(err => {
  console.error(err)
  });

// iota.getBalances(['FQENVERJBLIULUQPDLPSVFAQXKACFHDELTIOTKQAWCPNWHSTXTDLMTXIKIEOTOXJZS9ODHAPEHCIDKSYD'])
//   .then(({ balances }) => {
//   console.log(`FQ: ${balances}`)
//   })
//   .catch(err => {
//   console.error(err)
//   });



// Send a token
//
// (async () => {
//   const seed = 'DBCUJGNZTKBGGHSWCDMHQWSZQVMBL9ERAWSEYL9SVXMHFPQBTJXBCXCSCALXUVSOVCWZMFUKEVIIIPAUX';
//   const receivingAddress = 'OD99BYCBOPJFIIUIWEQJRDRJQKFXZWPTPDCDORTSRWU9EDYC9IVMDNXUTOHYUUZMAJDEFWEOEQNKKULQZ';
//   const transfers = [
//     {
//       value: 100,
//       address: receivingAddress,
//     },
//   ];

//   console.log(seed);
//   console.log(receivingAddress);
//   const trytes = await iota.prepareTransfers(seed, transfers);
//   const response = await iota.sendTrytes(trytes, 3, 9);

//   console.log('Bundle sent');
//   response.map(tx => console.log(tx));
// })();



// Send a transaction
//
// const depth = 3;
// const minimumWeightMagnitude = 9;
// const address = 'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D';
// const seed = 'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX';
// const message = JSON.stringify({
//   id: 'gtgalone',
//   name: 'GTGalone',
//   message: 'Glory to God alone!',
// });
// const messageInTrytes = Converter.asciiToTrytes(message);
// const transfers = [
//   {
//     value: 0,
//     address: address,
//     message: messageInTrytes,
//   },
// ];

// iota.prepareTransfers(seed, transfers)
//   .then(trytes => {
//     return iota.sendTrytes(trytes, depth, minimumWeightMagnitude);
//   })
//   .then(bundle => {
//     console.log(bundle[0].hash);
//   })
//   .catch(err => {
//     console.error(err);
//   });



// Read a transaction from Tangle
//
// const transationHash = 'ZXNBCRTCUXWWHYTSKAYSQCAQNKAWBEXGSGWNOEOIFDCGGYZOBNUSIAZSYNLTNCNPXPEKMONOJDEIBS999';

// iota.getBundle(transationHash)
//   .then(bundle => {
//     console.log(JSON.parse(Extract.extractJson(bundle)));
//   })
//   .catch(err => {
//     console.error(err);
//   });
