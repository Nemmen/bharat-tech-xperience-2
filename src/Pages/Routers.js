import React from 'react';

import { Route , Routes } from 'react-router-dom';                          
// import About from './About/About';
// import Register from './Register/Register';
// import Home from './Home/Home';
import Layout from './Layout';
import User from './checkin/User';
import Tome from './Tome';
import Vedio from './Vedio';




const Routers = () => {
  return (
    <>
   
    <Routes>
      <Route path='/' element={<Layout/>}/>
      <Route path='/home' element={<Layout/>}/>
      {/* <Route path='/register' element={<Register/>}/> */}
      <Route path='/checkin' element={<User/>}/>
      <Route path="/start-up" element={<Tome />} />
      <Route path="/vedio" element={<Vedio />} />
    
  

    </Routes>
  
    </>
  )
}

export default Routers
