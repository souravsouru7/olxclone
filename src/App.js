import logo from './logo.svg';
import './App.css';
import React, { useContext, useEffect } from "react";
import Navbar from './components/Navbar';
import Login from './components/Login';
import { Route, Routes } from "react-router-dom";
import Main from './components/Main';
import Details from './components/Details';
import Create from './components/Create';
import { AuthContextProvider } from './store/Context';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import View from './components/View';




function App() {

  return (
    
    <>
    <AuthContextProvider>
    <Routes>
    <Route>
      <Route path='/' element={<Main />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signin' element={<Signin />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/account' element={<Account />}/>
      <Route path='/details' element={<Details/>}/>
      <Route path='/view' element={<View/>}/>
      <Route path='/create' element={<Create/>}/>

    </Route>
    </Routes>
    </AuthContextProvider>
    </>
   
  );
}

export default App;
