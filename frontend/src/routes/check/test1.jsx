import React, { useEffect, useState } from "react";
import './test1.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormLabel } from "@mui/material";

let symptoms = [];


export default function Test1() {
  let url = "http://localhost:5000"

  const submitClick=()=>{
    let SubmitArr=[...new Set(symptoms)];//...= Spread Operator    new Set(arr) is a new array containing the values of the initial array but duplicates removed . Spread Operator then converts it back to array
    symptoms=SubmitArr;
    symptoms.forEach((item)=>{
      url = url.concat("/");
      url = url.concat(item);
      
    })
    console.log(url);
    axios.get(`${url}`)
      .then(response => {
        setDis(response.data)
        console.log(response)
        console.log(symptoms);
      })
  }
  
  
  
  


  const [dis,setDis]= React.useState(" ");
  const [age1,setAge1]=React.useState('');
  const [age2,setAge2]=React.useState('');
  const [age3,setAge3]=React.useState('');
  const [age4,setAge4]=React.useState('');
  const [age5,setAge5]=React.useState('');
  
  // const fetchData = () => {
  //     axios.get(`${url}`)
  //     .then(response => {
  //       setDis(response.data)
  //       console.log(response)
  //     }) 
  // }

  // useEffect(() => {
  //   fetchData();
  // },[])

  const handleChange1=(event)=>{
    setAge1(event.target.value);
    if((event.target.value)!='')
    {
    if((event.target.value)!=undefined)
    {
    symptoms.push(event.target.value);
    }
  }
  }

  const handleChange2=(event)=>{
    if((event.target.value)!='')
    {
    if((event.target.value)!=undefined)
    {
    setAge2(event.target.value);
    symptoms.push(event.target.value);
  }
}
}
  const handleChange3=(event)=>{
    if((event.target.value)!='')
    {
    if((event.target.value)!=undefined)
    {
    setAge3(event.target.value);
    symptoms.push(event.target.value);
  }
}
  }

  const handleChange4=(event)=>{
    if((event.target.value)!='')
    {
    if((event.target.value)!=undefined)
    {
    setAge4(event.target.value);
    symptoms.push(event.target.value);
  }
}
  }

  const handleChange5=(event)=>{
    if((event.target.value)!='')
    {
    if((event.target.value)!=undefined)
    {
    setAge5(event.target.value);
    symptoms.push(event.target.value);
    // console.log(symptoms)
  }
}
  }

 
  const options=['itching','skin_rash','nodal_skin_eruptions','continuous_sneezing','shivering','chills','joint_pain'];

  const  op= options.map((item) =>
           <MenuItem value={item}>{item}</MenuItem>);

  return (
    <>
    <div className="Full">

    <div className="container212">
        <div className="inside">
        <FormControl sx={{ m: 1, minWidth: 380 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age1}
          onChange={handleChange1}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
         <MenuItem value={30}>Thirty</MenuItem> */}
          

          {op};

        </Select>
      </FormControl>

        </div>


        <div className="inside">
        <FormControl sx={{ m: 1, minWidth: 380 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Symptom 2</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age2}
          onChange={handleChange2}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
         <MenuItem value={30}>Thirty</MenuItem> */}
          

          {op};

        </Select>
      </FormControl>

        </div>



    </div>
    </div>
    

      
    </>
  );
}