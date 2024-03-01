import React, { useEffect, useState } from "react";
import axios from "axios"
function Name(props) { 
  const [user, setUser] = useState([]);

  const fetchData = () => {
      axios.get(`https://drmorbusbe.onrender.com/symptom/${props.name}`)
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
      <p>{user.data.name}</p>
    </div>
  );
}

export default Symptom;
