import React, { useEffect, useState } from "react";
import axios from "axios"
function Symptom(props) { 
  const [user, setUser] = useState([]);

  const fetchData = () => {
    // return fetch(`http://localhost:5000/symptom/${props.name}`)
    //       .then((response) => response.json())
    //       .then((data) => setUser(data));
    
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
      <p>{renderList}</p>
    </div>
  );
}

export default Symptom;



// Example POST method implementation:
// async function postData(url = "https://01d1-118-185-209-213.in.ngrok.io/symptom/Dengue", data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, *cors, same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: "follow", // manual, *follow, error
//     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }
// );
// axios.post()