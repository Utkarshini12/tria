import { useState, useEffect } from "react";
import Web3 from 'web3';

import Button from "../components/Button";
import X from '../assets/x.svg';
import Gmail from '../assets/gmail.svg';
import Phone from '../assets/phone.svg';
import Metamask from '../assets/Metamask.svg';
import WalletConnect from '../assets/WalletConnect.svg';


const LoginBox = ({setLogin}) => {
  const [account, setAccount] = useState('');


  
 
   const connectMetamask = async () => {
    if (window.ethereum) { 
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' }); 
        const web3 = new Web3(window.ethereum); 
        const accounts = await web3.eth.getAccounts(); 
        setAccount(account[0]);
        setLogin("name");
      
      } catch (error) {
        alert('Error accessing the account. Did you refuse the connection?');
      }
    } else {
      alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  };

  
  return (
    
      <div className="login-box ">
        <div>
         <Button text="Continue with Google" image={Gmail} width={380} backgroundColor='#302c2c' position='text-start' />
         <br />
         <Button text="Continue with X" image={X} width={380} backgroundColor='#302c2c' position='text-start' />
         <br />
         <Button text="Continue with Phone" image={Phone} width={380} backgroundColor='#302c2c' position='text-start' />

        
        </div>
        <div className="or-divider">
      <div className="line"></div>
      <span className="or-text">OR</span>
      <div className="line"></div>
    </div>
    <div className="d-flex">
      <div onClick={connectMetamask}>
       <Button text="Metamask" image={Metamask} width={180} backgroundColor='#1a1b1b' />
       </div>
       <div onClick={()=> setLogin("name")}>
       <Button text="Walletconnect" image={WalletConnect} width={180} backgroundColor='#1a1b1b' />
       </div>
       </div>

      </div>
     
  );
};

export default LoginBox;
