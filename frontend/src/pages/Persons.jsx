import { useEffect, useState } from 'react';
import './Persons.css';

export default function Persons() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/persons`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.log('Error fetching data: ', error));
  }, []);
  
  return (
    <div className="persons-container">
      <div className="header">
        <h1>Persons</h1>
        <button className="add-person-btn">Add Person</button>
      </div>
      <div className="cards-container">
        {data.map(person => (
          <div className="card" key={person.id}>
            <h2 className="card-title">{person.personname}</h2>
            <p>Some more details about {person.personname}.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
