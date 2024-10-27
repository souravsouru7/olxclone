import React,{ useState }from 'react';
import { Link,useNavigate } from 'react-router-dom'; 
import { UserAuth } from '../store/Context';

const Signin = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error,setError] = useState('');
    const {user,logIn} = UserAuth();
    const handleSubmit =async (e) =>{
        e.preventDefault();
        setError('')
        try{
            await logIn(email,password);
            navigate('/')

        }catch(error){
            console.log(error);
            setError(error.message)
        }
    }
  return (
    <>
    <div className='w-full h-screen'>
        <div className='bg-slate-300 fixed top-0 left-0 w-full h-screen'>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-blue-300'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-2xl font-bold'>LOGIN</h1>
                        {error ? <p className='p-3 bg-red-400'>{error}</p> :null}
                        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                        <input onChange={(e) => setEmail(e.target.value)}
                 
                 className='p-3 my-2 bg-red-50 rounded' type="email" placeholder='Email' autoComplete='email'/>
                
                <input onChange={(e) => setPassword(e.target.value)}
               
                 className='p-3 my-2 bg-red-50 rounded' type="password" placeholder='Password' autoComplete='current-password' />
                <button className='bg-green-800 py-3 my-6 rounded font-bold'> Sign In</button>
                <div className='flex-justify-between items-center text-sm text-gray-600'>
                    <p><input type="checkbox"/>Remember me</p>
                    <p>Need Help?</p>
                    </div>
                    <p className='py-3'><span>New to OLX?
                        </span >{''}
                        <Link to ='/signup'>  Signup</Link></p>
                </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signin