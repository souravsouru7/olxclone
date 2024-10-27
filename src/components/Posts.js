import React ,{useContext, useState ,useEffect}from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import {AuthContext, FirebaseContext } from "../store/Authcontext";
import { PostContext } from "../store/PostContext";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  
  return (
    <div className="postParentDiv">
    <div className="moreView bg-slate-100 rounded-lg p-4 mb-8">
      <div className="heading flex justify-between items-center">
        <span className="text-xl text-black text-center">Quick Menu</span>
        <span className="text-sm text-black">View more</span>
      </div>
      <div className="cards whitespace-nowrap overflow-x-auto overflow-y-hidden" >
      
        <div  className="card inline-block mr-4 px-3 py-2 max-w-xs w-56 h-72 cursor-pointer">
          <div className="favorite flex justify-end items-center bg-white">
            <FaHeart />
          </div>
          <div className="image flex justify-center items-center">
            <img src="../../../Images/R15V3.jpg" alt="" className="h-32 max-w-full max-h-full min-h-full" />
          </div>
          <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
        </div>
        
      </div>
    </div>
    
  </div>
  )
}

export default Posts