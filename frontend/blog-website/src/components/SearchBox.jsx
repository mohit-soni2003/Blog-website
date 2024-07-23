import React, { useEffect, useState } from 'react';
import "./SearchBox.css"
export default function SearchBox() {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/allblogs');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const results = await response.json();
        setData(results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = () => {
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filteredData);


 
  };
  const dropdown= document.getElementsByClassName("dropdown");  
  const display=()=>{
    
    dropdown.classList.add('hidden');
  }

  return (
    <>
   
      <div >
        <div className='search-container'>
          <input type="text" value={value} onChange={onChange} placeholder="Search by title" />
          <button className='btn btn-danger' onClick={() => { onSearch(); display(); }}>Search</button>

        </div>
        <div className="dropdown">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div key={item._id} className="dropdown-row">
                <h5>{item.title}</h5>
                {item.description}
                {/* Add more detailed content display if needed */}
              </div>
            ))
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
