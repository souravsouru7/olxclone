import React,{useContext, useState ,useRef,useEffect} from 'react'
import Navbar from './Navbar';
import {AuthContext, FirebaseContext } from "../store/Authcontext";
import {storage } from "../firebase/setup";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Create = () => {
  const {firebase} = useContext(FirebaseContext);
  const inputRef=useRef();
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const date = new Date()
  useEffect(()=>{
    inputRef.current.focus();
  },[])
  const handleSubmit= () =>{
             storage().ref(`/image/${image.name}`).put(image).then(({ref}) => {
              ref.getDownloadURL().then((url)=>{
                console.log(url);
                firebase.firestore().collection('products').add({
                  name,
                  category,
                  price,
                  url,
                  userId:user.uid,
                  createdAt:date.toDateString()
                })
                navigate('/')
              })
             })
             .then(() => {
              console.log("Product added successfully.");
              navigate('/');
            })
            .catch((error) => {
              console.error("Error adding product:", error);
            });
            };
  return (
    <div>
         <div className='border bg-stone-50 border-black w-max h-max mt-3 p-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  overflow-auto rounded-2xl'>
         <h2 className="text-2xl font-semibold mb-4">Create</h2>
    <form className="max-h-full">
        <label htmlFor="fname">Name</label>
        <br />
        <input className='input p-2 my-2 bg-white-500 border border-gray-500 rounded' 
          placeholder='Name' type="text" ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} id="fname" name="Name" 
        defaultValue="John"/>
        <br />
        <label htmlFor='fname'>Category</label>
        <br />
        <input  
          className='input p-2 my-2 bg-white-500  border border-gray-500 rounded' 
          type="text" id="fname"  value={category}
          onChange={(e) => setCategory(e.target.value)} name="category" />
          <br />
          <label htmlFor='fname'>Price</label>
          <br />
          <input className="input p-2 my-2 border border-gray-500" 
            
            type="number"
            id="fname"  value={price}
            onChange={(e) => setPrice(e.target.value)}
            name="Price"
             />
          <br />
    </form>
    <br />
    <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ""}
          ></img>
    <form>
        <br />
        <input type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }} />
        <br />
        <button className='bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 mt-2 px-4 rounded'
        onClick={handleSubmit} >Upload and Submit</button>

        
    </form>
    </div>
    </div>
  );
};

export default Create
