import React from 'react';
import SideBar from '../public/components/SideBar'
import ChatPage from '../public/components/ChatPage'
import NavBar from '../public/components/NavBar';


const AppPage = () => {
    return (
        <>
        {/* <NavBar/> */}
            <SideBar/>
           <ChatPage/>
        </>
    );
}

export default AppPage;
