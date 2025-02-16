import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Contacts from "./pages/Contacts";
import Persons from "./pages/Persons";
import ContactTypes from "./pages/ContactTypes";
import { Route, Routes } from 'react-router-dom';


// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
    
//     fetch(`${process.env.REACT_APP_API_URL}/persons`)
//       .then(res => res.json())
//       .then(data => setData(data))
//       .catch(error => console.log('Error fetching data: ', error));
//   }, []);
  
//   return (
//     <div>
//       <h1>Contacts</h1>
//       <ul>
//         {data.map(person => (
//           <li key={person.id}>{person.personname}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

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
