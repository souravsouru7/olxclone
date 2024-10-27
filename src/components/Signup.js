import React ,{ useState }from 'react';
import { Link } from 'react-router-dom'; 
import { UserAuth } from '../store/Context';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {user,signUp} = UserAuth();
    const handleSubmit =async (e) =>{
        e.preventDefault()
        try{
            await signUp(email,password);
            navigate('/')

        }catch(error){
            console.log(error)
        }
    }

  return (
    <>
    <div className='w-full h-screen'>
        <div className='bg-teal-50 fixed top-0 left-0 w-full h-screen'>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-blue-300'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-2xl font-bold'>Signup</h1>
                        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                        <input onChange={(e)=>setEmail(e.target.value)}
                 
                 className='p-3 my-2 bg-red-50 rounded' type="email" placeholder='Email' autoComplete='email'/>
                
                <input onChange={(e) => setPassword(e.target.value)}
               
                 className='p-3 my-2 bg-red-50 rounded' type="password" placeholder='Password' autoComplete='current-password' />
                <button className='bg-green-600 py-3 my-6 rounded font-bold'> Sign Up</button>
                <div className='flex-justify-between items-center text-sm text-gray-600'>
                    <p><input type="checkbox"/>Remember me</p>
                    <p>Need Help?</p>
                    </div>
                    <p className='py-3'><span>Already subscribed to OLX?
                        </span >{''}
                        <Link to ='/signin'>  Sign In</Link></p>
                </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup