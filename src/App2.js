import React from "react";
import {useState } from "react";
import {ethers} from 'ethers'

// import {
//   TerraBioTokenAddress,
//   TerraBioTokenAbi,
// } from "./contracts/TerraBioToken";
// import Dapp from "./Dapp";

function App() {
    //connect to metamask
    const [errorMessage,setErrorMessage] = useState(null)
    const [defaultAccount,setDefaultAccount] = useState(null)
    const [userBalance, setUserbalance] = useState(null)
    const [connectButtonText, setConnectButtonText] = useState(null)

    const connectWalletHandler = () => {
        if(window.ethereum) {
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result => {
              accountChangedHandler(result[0])
            }) 
        }else{
            setErrorMessage('install Metamask')
        }
    }
    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount)
        getUserBalance(newAccount)
    }
    const getUserBalance = (address) => {
window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})
.then(balance => {
    setUserbalance(ethers.utils.formatEther(balance))
})
    }

// useEffect(()=>{
//     const
// })

  return (
    <>
      <h1>test</h1>
        <div className="walletCard">
            <h4>{'Connection to Metamask using window.ethereum method'}</h4>
            <button onClick={connectWalletHandler}>connect to metamask</button>
            <div className="'accountDisplay">
                <h3>Account: {defaultAccount}</h3>
            </div>
            <div className="'balanceDisplay">
                <h3>Balance : {userBalance}</h3>
                {errorMessage}
            </div>
        </div>
    </>
  );
}

export default App;