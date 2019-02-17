const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

const seed =
  'IBHTERHANKCLAPWLJEBJOAIDPKEWOQPKDNBNASIWKOKLPAQIWEORUANDHAOKQOKAKCNAJMDKASMNJNWOQ'

iota
  .getNewAddress(seed, { index: 0, total: 1 })
  .then(address => {
    console.log('Your address is: ' + address)
    console.log('Paste this address into https://faucet.devnet.iota.org')
  })
  .catch(err => {
    console.log(err)
  })
