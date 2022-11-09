import React, { useContext } from 'react'
import Link from 'next/link';
import { Context } from '../../pages/Context';
import Button from '@mui/material/Button';
import logo from '../assets/img/logo.png'


export default function home() {
  
  const [Auth, setAuth] = useContext(Context);

  const WalletLogin = () => {
    console.log('log to wallet')
    setAuth(true)
    
  }
  return (
    <div className={'mainPage m-auto mt-40'}>
    <article>
        <h1> <span className='titleApp '>Revochat</span> - A revolusionary Chat App </h1>
        <p> Based on WEB3 | first chat app using decentralized data </p>
        <Button variant="text" onClick={WalletLogin}>Connect to Wallet</Button>
       {/* <button type="button" onClick={WalletLogin}> Connect to Wallet </button> */}
       

    </article>
    <div className='mt-10'>
        <img src={logo.src} alt="logo" />
    </div>
    
    </div>

  )
}
