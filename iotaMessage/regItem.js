const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

const address =
  'SGAHJINSHOWMKABIDKALAIBANSYGFJHKJFSHFCYTEUIJWJMJAUCKWEIUOQOUIYWEEOPLMANISHSTYQRWZ'
const seed =
  'IBHTERHANKCLAPWLJEBJOAIDPKEWOQPKDNBNASIWKOKLPAQIWEORUANDHAOKQOKAKCNAJMDKASMNJNWOQ'
const tag =
  'CYCLE'
const transfers = [
  {
    value: 0,
    address: address,
    tag : tag,
    message: 'AVAILABESIXTEENHOURSLOCATIONONEHUNDREDTHIRTYSIXRATINGTHREETYPEPREMIUMSIZEONESUBCATSWIMMING'
  }
]

iota
  .prepareTransfers(seed, transfers)
  .then(trytes => iota.sendTrytes(trytes, (depth = 3), (mwm = 9)))
  .then(bundle => {
    console.log(bundle)
  })
  .catch(err => {
    console.error(err)
  })
