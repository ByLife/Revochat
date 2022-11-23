import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import {USERS} from '../data/Users'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Diversity1Icon from '@mui/icons-material/Diversity1';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));



export default function FriendsList() {

    const [search, setSearch] = useState('');
    const [nav, setNav] = useState('All');
    const [users, setUsers] = useState(USERS)


    useEffect(() => {
        
    }, [nav]);

  return (
    <div className='mt-4 bottom-0 h-full ml-2'>
        <header className='flex justify-self-start text-xl font-semibold cursor-pointer'>
            <span className='mx-4'> <Diversity1Icon/> Friends</span>
            <span onClick={()=> setNav('All')} className='mx-4'> All </span>
            <span onClick={()=> setNav('Online')} className='mx-4'> Online </span>
            <span onClick={()=> setNav('Offline')} className='mx-4'> Offline </span>
            <span onClick={()=> setNav('Pending')} className='mx-4'> Pending </span>
            <span onClick={()=> setNav('Blocked')} className='mx-4'> Blocked </span>
            <span onClick={()=> setNav('AddFriend')} className='mx-4'> Add Friend </span>
        </header>
        
        <div className='mt-4 mx-4'>


        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          {search}
        </div>

        <div className='mt-4 ml-4'>
            {nav} -
            {nav == 'Online'? 
            <>
            {users.filter(x => x.status == 'online').length}
            </>

            :
            <>
            </>
            }
            <Divider className='mt-2' />
            <div>
            {users.map((user, index)=> (
                <>
                {nav == 'All'?
                <>
                <div className='w-full my-2 flex'>
                   <span 
                   style={{
                    width: '10px', 
                    height: '10px', 
                    backgroundColor: user.status == 'online'? 'green' : 'red', 
                    position: 'absolute',
                    borderRadius: '50%',
                    marginLeft: '4px'
                    }} >
                    </span> 
                    <img style={{width: '50px', height: '50px', borderRadius: '50%', border: 'black 1px'}} src={user.image} alt="" />
                    <div className='ml-2'>
                        <span className='font-semibold text-xl'>{user.name} </span> <br/>
                        <span className='italic'>{user.status} </span>
                    </div>
                    <div className='right-0 mt-3 mx-20 absolute align-middle items-center '>
                        <span className='mx-2'> <ChatBubbleIcon fontSize='large' /></span>
                        <span className='mx-2'> <MoreVertIcon fontSize='large' /> </span>
                    </div>
                </div>
                <Divider/>
                </>
                
                 : <>
                 </>       }
                </>
            ))}
            </div>
        </div>
        
    </div>
  )
}
