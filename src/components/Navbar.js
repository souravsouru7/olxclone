import React, { useState } from 'react';
import olx from "../assests/olx.png";
import lens from "../assests/lens.png";
import arrow from '../assests/arrow.png';
import search from "../assests/search.png";
import { Link, useNavigate } from 'react-router-dom'; 
import Login from './Login';
import { UserAuth } from '../store/Context';


const Navbar = (props) => {
    const [loginPop,setLoginPop] = useState(false);
    const navigate = useNavigate();
    const {user,logOut} = UserAuth();
    const handleLogout = async ()=>{
      try{
        await logOut();
        navigate('/')
      }catch(error){
        console.log(error)
      }
    };
    
    
  return (
    <>
    <div className='flex p-4 bg-slate-100 shadow-sm'>
       <img src={olx} className='w-11 h-9'/>
       <div className='flex border border-spacing-1 w-64 p-2 border-black ml-5 bg-white'>
        <img  src={lens} className='w-7 h-5 mt-1' />
        <input placeholder="Location" className='ml-3 outline-none'/>
        <img src={arrow} className='w-8 h-7'/>
       </div>
       <div className='flex h-12 ml-4 border boreder-black bg-white'>
        <input onChange={(e) => props.setSearch(e.target.value)}  placeholder="Find Cars,Mobile phones and more" className='ml-3 w-96 outline-none'/>
        <img src={search}/>
       </div>
       <div className='flex h-12 p-3 ml-10 cursor-pointer'>
        <h1 className='font-semibold'>ENGLISH</h1>
        <img src={arrow} className='w-8 h-7'/>
       </div>
       {user?.email ?(
        <div className='flex'>
        <Link to='/account'>
        <button className='py-2'>Account</button>
      </Link>
     
        <button onClick={handleLogout} className='bg-green-600 px-4 mx-2 py-2 rounded cursor-pointer'>Logout</button>
        
        </div>
    ):(

      <div>
       <Link to="/login"  onClick={() => setLoginPop(!loginPop)} className='flex h-12 p-3 ml-10 cursor-pointer underline hover:no-underline'>
        <h1 className='font-bold text-lg'>Login</h1>
       </Link>
       </div>
    )}
       <Link to="/create" className='w-28 flex h-12 p-3 ml-10 cursor-pointer rounded-full border border-yellow-500 role="button"'>
        <h1 className='font-bold text-lg ml-3'>
          + SELL</h1>
          </Link>
        </div>
        {loginPop && <Login setLoginPop={setLoginPop} />}
        </>
  );
};

export default Navbar;