import React, { useEffect, useState } from "react";
import axios from "axios"
function Precaution(props) { 
  const [user, setUser] = useState([]);

  const fetchData = () => {
    // return fetch(`http://localhost:5000/symptom/${props.name}`)
    //       .then((response) => response.json())
    //       .then((data) => setUser(data));
    
      axios.get(`https://drmorbusbe.onrender.com/precaution/${props.name}`)
      .then(response => {
        setUser(response.data)
        console.log(user)
      }) 
  }

  useEffect(() => {
    fetchData();
  },[])
  const renderList = user.map((item) =>
  <li>{item}</li>);
  return (
    <div>
      <p>{renderList}</p>
    </div>
  );
}

export default Precaution;