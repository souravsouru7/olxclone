import React from 'react';
import { useState } from 'react';
import guitar from '../assests/guitar.png';
import google from "../assests/google.png"
import phone from "../assests/phone.png";
import { signInWithPopup } from 'firebase/auth';
import { auth,googleProvider } from '../firebase/setup';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 



const Login = ({ setLoginPop }) => {
    const navigate = useNavigate();
    const googleSignin = async()=>{

        try {
            await signInWithPopup(auth,googleProvider);
            navigate('/')
        }catch(err){
            console.error(err);
        }
       
    };
    const handleClose = () => {
      console.log("Closing modal...");
      setLoginPop(false);
      navigate('/');// Close the modal when X is clicked
  };
  const handleSignup = () => {
    navigate('/signup'); // Navigate to the signup page
};

    
  return (
    <>
     
     <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
 
 <div className="fixed inset-0 bg-zinc-950 bg-opacity-75 transition-opacity"></div>

 <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
   <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
    
     <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all  sm:w-96 sm:max-w-lg">
       <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
         <h1  onClick={handleClose} className="cursor-pointer font-semibold text-3xl">X</h1>
         <div className="sm:flex sm:items-start">
           <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
             <div className="mt-2">
               <img src={guitar} className="w-20 h-20 ml-32"  alt="guitar" />
               <p className="text-base font-medium mt-5 text-center">Help us to become one of the safest places<br/> to buy and sell</p>
               <div onClick={handleSignup} className="flex border-2 border-black p-2 rounded-md mt-12 cursor-pointer">
                   <img src={phone} className="w-6 h-6"  alt="phone" />
                   <h1 className="font-semibold ml-3">Signup</h1>
               </div>
               <div onClick={googleSignin} className="flex border border-gray-300 p-2 rounded-md mt-4 cursor-pointer">
                   <img src={google} className="w-6 h-6"  alt="google" />
                   <h1 className="font-semibold ml-12">Continue with Google</h1>
               </div>
               <h1 className="text-center mt-4 cursor-pointer">OR</h1>
               <Link to="/signin" className="text-center mt-4 underline cursor-pointer">Login</Link>
               <h1 className="text-center mt-28 text-xs">All your personal details are safe with us.</h1>
               <h1 className="text-center mt-4 text-xs">If you continue, you are accepting <span className="text-blue-600">OLX Terms and <br/>Conditions and Privacy Policy</span></h1>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</div>
    
    </>
  )
}

export default Login