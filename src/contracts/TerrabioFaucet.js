export const terrabioFaucetAddress = "0xFC23613013B01357465a65F990820AD487693C50"

export const terrabioFaucetAbi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tbioAddress_",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Recieved",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "buyTokens",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ]