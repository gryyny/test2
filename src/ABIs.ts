const contractABI = [
    {
      name: 'isUserRegistered',
      inputs: [{ name: '_account', type: 'address' }],
      outputs: [{ name: "flag", type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },{
      name: 'getContractBalance',
      inputs: [],
      outputs: [{ name: '_balance', type: 'uint256' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },{
      name: 'getLvlPrices',
      inputs: [],
      outputs: [{ name: '_arr', type: 'uint256[11]' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },{
      name: 'getPlaceInQueue',
      inputs: [{ name: '_account', type: 'address' },{ name: '_lvl', type: 'uint8' }],
      outputs: [{ name: '_placeinq', type: 'uint256' },{ name: '_longq', type: 'uint256' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },{
      name: 'getReferrerId',
      inputs: [{ name: '_account', type: 'address' }],
      outputs: [{ name: '_id', type: 'uint256' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },{
      name: 'getUser',
      inputs: [{ name: '_addr', type: 'address' }],
      outputs: [
        { name: '_id', type: 'uint256' },
        { name: '_time', type: 'uint256' },
        { name: '_referals', type: 'uint256' },
        { name: '_refsumpayment', type: 'uint256' },
        { name: '_lvlsumpayment', type: 'uint256' },
        { name: '_lostrefpayment', type: 'uint256' },
        { name: '_addr', type: 'address' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },{
      name: 'getUsersLvls',
      inputs: [{ name: '_addr', type: 'address' }],
      outputs: [
        { name: '_lvl_flags', type: 'bool[]' },
        { name: '_block_hash', type: 'uint16[]' },
        { name: '_max_block_hash', type: 'uint16[]' },
        { name: '_activation', type: 'uint16[]' },
        { name: '_sumpaymentbylvl', type: 'uint256[]' },
        { name: '_sumrefpaymentbylvl', type: 'uint256[]' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },{
      name: 'register',
      inputs: [],
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },{
      name: 'registerWithRef',
      inputs: [{ name: '_addr', type: 'address' }],
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },{
      name: 'regPrice',
      inputs: [],
      outputs: [{ name: '_regPrice', type: 'uint256' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },{
      name: 'buyLvl',
      inputs: [{ name: '_lvl', type: 'uint8' }],
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },{
      name:"BuyLvl",
      inputs: [{ name:"userId",type:"uint256"},{name:"lvl",type:"uint8"}],
      type:"event",
    },
  ]
  export default contractABI