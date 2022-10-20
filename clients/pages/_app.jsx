import '../styles/globals.scss'
import '../styles/footer.scss'
import '../styles/navbar.scss'
import '../styles/home.scss'
import React from 'react';

export const Context = React.createContext();


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
