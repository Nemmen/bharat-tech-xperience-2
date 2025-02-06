import React from 'react';

import { Route , Routes } from 'react-router-dom';                          
// import About from './About/About';
// import Register from './Register/Register';
// import Home from './Home/Home';
import Layout from './Layout';
import User from './checkin/User';




const Routers = () => {
  return (
    <>
   
    <Routes>
      <Route path='/' element={<Layout/>}/>
      <Route path='/home' element={<Layout/>}/>
      {/* <Route path='/register' element={<Register/>}/> */}
      <Route path='/checkin' element={<User/>}/>
    
  

    </Routes>
  
    </>
  )
}

export default Routers
