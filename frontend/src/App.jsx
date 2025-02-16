import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Contacts from "./pages/Contacts";
import Persons from "./pages/Persons";
import ContactTypes from "./pages/ContactTypes";
import { Route, Routes } from 'react-router-dom';


function App() {


  return (<>
    <Navbar />
    <Routes>
      <Route path="/" element={<Contacts />}></Route>
      <Route path="/persons" element={<Persons />}></Route>
      <Route path="/contacttypes" element={<ContactTypes />}></Route>
    </Routes>
  </>  )
    
  
}

export default App;
