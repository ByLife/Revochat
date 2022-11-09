import React from 'react';
import SideBar from '../public/components/SideBar'
import ChatPage from '../public/components/ChatPage'
import NavBar from '../public/components/NavBar';
import FriendsList from '../public/components/FriendsList';


const AppPage = () => {
    return (
        <div className='w-full'>
           <div >
                <SideBar/>
            </div>
           <div className='bg-black ml-16 absolute left-2 h-full w-56'>
           </div> 
           <div className='bg-slate-500 absolute ml-72 left-2 h-full overflow-hidden' style={{width: '82.6%'}}>
                <FriendsList />
            </div> 
           {/* <ChatPage/> */}
        </div>
    );
}

export default AppPage;
