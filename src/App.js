import React from "react";
import {useState } from "react";
import { ethers } from "ethers";
import {terrabioFaucetAddress,terrabioFaucetAbi} from "./contracts/TerrabioFaucet"

// import {
//   TerraBioTokenAddress,
//   TerraBioTokenAbi,
// } from "./contracts/TerraBioToken";
// import Dapp from "./Dapp";


function App() {
    //connect to metamask
    const [errorMessage,setErrorMessage] = useState(null)
    const [defaultAccount,setDefaultAccount] = useState(null)
    const [connectButtonText, setConnectButtonText] = useState('connect Wallet')

    const [userBalance, setUserbalance] = useState(null)
    
    //const [currentContractVal,setCurrentContractVal] = useState(null)
    //const [provider, setProvider] = useState(null)
    //const [signer, setSigner] = useState(null)
    const [contract, setContract] = useState(null)
 
    const connectWalletHandler = () => {
        if(window.ethereum) {
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result => {
              accountChangedHandler(result[0])
              setConnectButtonText('Wallet connected')
            }) 
        }else{
            setErrorMessage('install Metamask')
        }
    }
    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount)
        updateEthers()
        getUserBalance(newAccount)
    }
    const getUserBalance = (address) => {
window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})
.then(balance => {
    setUserbalance(ethers.utils.formatEther(balance))
})
    }
const updateEthers = () => {
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum)

    let tempSigner = tempProvider.getSigner()

    let faucetContract = new ethers.Contract(terrabioFaucetAddress, terrabioFaucetAbi, tempSigner)
    setContract(faucetContract)
}

const handleClickBuyTokens = async () => {
    try{
        await contract.buyTokens()
    }catch(e){
        console.log(e.message)
    }
}

// useEffect(()=>{
//     const
// })

  return (
    <>
      <h1>test</h1>
        <div className="walletCard">
            <h4>{'Connection to Metamask using window.ethereum method'}</h4>
            <button onClick={connectWalletHandler}>{connectButtonText}</button>
            <div className="'accountDisplay">
                <h3>Account: {defaultAccount}</h3>
            </div>
            <div className="'balanceDisplay">
                <h3>Balance : {userBalance}</h3>
                {errorMessage}
            </div>
        </div>
        <div className="Claim">
           <button onClick={handleClickBuyTokens}>Claim 60 TBIO</button>      
        </div>
    </>
  );
}

export default App;