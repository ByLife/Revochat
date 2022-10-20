import React, { useContext } from 'react'
import Link from 'next/link';
import { Context } from '../../pages/Context';

export default function home() {
  
  const [Auth, setAuth] = useContext(Context);

  const WalletLogin = () => {
    console.log('log to wallet')
    setAuth(true)
    
  }
  return (
    <div className='mainPage'>
    <article>
        <h1> <span className='titleApp'>Revochat</span> - A revolusionary Chat App </h1>
        <p> Based on WEB3 | first chat app using decentralized data </p>
       <button type="button" onClick={WalletLogin}> Connect to Wallet </button>
       

    </article>
    <main>
        <img src="../assets/img/logo.png" alt="logo" />
    </main>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>

  )
}
