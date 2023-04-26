import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Login from '../auth/Login';
import SignUp from "../auth/SignUp"
import CreatePost from '../createPost/CreatePost';
// import './AppRoutes.css';

function AppRoutes() {
  return (
    <Routes>
      {/* <Navbar /> */}
    
        <Route  path="/" Component={CreatePost} />
        {/* <Route path="/profile/:username" component={Profile} /> */}
        <Route path="/signup" Component={SignUp} />
        {/* <Route path="/signin" component={SignIn} /> */}
     
    </Routes>
  );
}

export default AppRoutes;
