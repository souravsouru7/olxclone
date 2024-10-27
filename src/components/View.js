import React,{useEffect, useState, useContext} from 'react';
import { PostContext } from '../store/PostContext';
import { FirebaseContext } from '../store/Authcontext';

function View() {
  const [userDetails, setUserDetails] = useState(null);
  const { postDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const { userId } = postDetails; 
    firebase.firestore().collection('users').where('id', '==', '2OYeuRgaeDWhYzRqlt2zi5FcO693').get().then((res) => {
      res.forEach((doc) => {
        setUserDetails(doc.data());
      });
    });
  },[]);

  return (
    <div className="flex pt-16">
      <div className="p-16 w-70vw ml-12 mt-12">
        <img src={postDetails.url} alt="product image" className="w-45vw h-65vh" />
      </div>
      <div className="p-16 mt-16 w-30vw">
        <div className="border-2 border-black rounded p-6 mb-8">
          <p className="font-bold text-lg mb-4">{`₹${postDetails.price}`}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.date}</span>
        </div>
        {userDetails && 
          <div className="border-2 border-black rounded p-6">
            <p className="font-bold text-lg mb-4">Seller details</p>
            <p>{userDetails.email}</p>
          </div>
        }
      </div>
    </div>
  );
}

export default View;
