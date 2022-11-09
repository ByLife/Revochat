import React from 'react';
import SideBar from '../public/components/SideBar'
import ChatPage from '../public/components/ChatPage'
import NavBar from '../public/components/NavBar';
import Contact from '../public/components/Contact';


const AppPage = () => {
    return (
        <>
        {/* <NavBar/> */}
            <SideBar/>
			<Contact/>
            <ChatPage/>
		   
        </>
    );
}

export default AppPage;
