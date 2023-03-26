import React, { useEffect, useState } from "react";
import './testnew.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormLabel } from "@mui/material";

let symptoms = [];


export default function Testnew() {
  let url = "http://localhost:5000"

  const submitClick=()=>{
    let SubmitArr=[...new Set(symptoms)];//...= Spread Operator    new Set(arr) is a new array containing the values of the initial array but duplicates removed . Spread Operator then converts it back to array
    symptoms=SubmitArr;
    symptoms.forEach((item)=>{
      url = url.concat("/");
      url = url.concat(item);
      console.log(symptoms);
    })
    console.log(url);
    axios.get(`${url}`)
      .then(response => {
        setDis(response.data)
        console.log(response)
        console.log(symptoms);
        // symptoms=[];
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
    if((event.target.value)!=='')
    {
    if((event.target.value)!==undefined)
    {
    symptoms.push(event.target.value);
    }
  }
  }

  const handleChange2=(event)=>{
    if((event.target.value)!=='')
    {
    if((event.target.value)!==undefined)
    {
    setAge2(event.target.value);
    symptoms.push(event.target.value);
  }
}
}
  const handleChange3=(event)=>{
    if((event.target.value)!=='')
    {
    if((event.target.value)!==undefined)
    {
    setAge3(event.target.value);
    symptoms.push(event.target.value);
  }
}
  }

  const handleChange4=(event)=>{
    if((event.target.value)!=='')
    {
    if((event.target.value)!==undefined)
    {
    setAge4(event.target.value);
    symptoms.push(event.target.value);
  }
}
  }

  const handleChange5=(event)=>{
    if((event.target.value)!=='')
    {
    if((event.target.value)!==undefined)
    {
    setAge5(event.target.value);
    symptoms.push(event.target.value);
    // console.log(symptoms)
  }
}
  }

 
  const options=['itching','skin_rash','nodal_skin_eruptions','continuous_sneezing','shivering','chills','joint_pain',
  'stomach_pain','acidity','ulcers_on_tongue','muscle_wasting','vomiting','burning_micturition','spotting_ urination','fatigue',
  'weight_gain','anxiety','cold_hands_and_feets','mood_swings','weight_loss','restlessness','lethargy','patches_in_throat',
  'irregular_sugar_level','cough','high_fever','sunken_eyes','breathlessness','sweating','dehydration','indigestion',
  'headache','yellowish_skin','dark_urine','nausea','loss_of_appetite','pain_behind_the_eyes','back_pain','constipation',
  'abdominal_pain','diarrhoea','mild_fever','yellow_urine','yellowing_of_eyes','acute_liver_failure','fluid_overload',
  'swelling_of_stomach','swelled_lymph_nodes','malaise','blurred_and_distorted_vision','phlegm','throat_irritation',
  'redness_of_eyes','sinus_pressure','runny_nose','congestion','chest_pain','weakness_in_limbs','fast_heart_rate',
  'pain_during_bowel_movements','pain_in_anal_region','bloody_stool','irritation_in_anus','neck_pain','dizziness','cramps',
  'bruising','obesity','swollen_legs','swollen_blood_vessels','puffy_face_and_eyes','enlarged_thyroid','brittle_nails',
  'swollen_extremeties','excessive_hunger','extra_marital_contacts','drying_and_tingling_lips','slurred_speech','knee_pain','hip_joint_pain',
  'muscle_weakness','stiff_neck','swelling_joints','movement_stiffness','spinning_movements','loss_of_balance','unsteadiness','weakness_of_one_body_side',
  'loss_of_smell','bladder_discomfort','foul_smell_of urine','continuous_feel_of_urine','passage_of_gases','internal_itching','toxic_look_(typhos)',
  'depression','irritability','muscle_pain','altered_sensorium','red_spots_over_body','belly_pain','abnormal_menstruation','dischromic _patches',
  'watering_from_eyes','increased_appetite','polyuria','family_history','mucoid_sputum','rusty_sputum','lack_of_concentration','visual_disturbances',
  'receiving_blood_transfusion','receiving_unsterile_injections','coma','stomach_bleeding','distention_of_abdomen','history_of_alcohol_consumption',
  'fluid_overload','blood_in_sputum','prominent_veins_on_calf','palpitations','painful_walking','pus_filled_pimples','blackheads','scurring','skin_peeling',
  'silver_like_dusting','small_dents_in_nails','inflammatory_nails','blister','red_sore_around_nose','yellow_crust_ooze'];

  const  op= options.map((item) =>
           <MenuItem value={item} id="mi2"><class id="mi1">{item}</class></MenuItem>);

  return (
    <>
    <div className="containerfull">
        <div className="containerframe">
        <div className="co">
          <h1>ENTER YOUR SYMPTOMS</h1>
        </div>
            <div className="inside">
            <FormControl sx={{ m: 1, minWidth: 380 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Symptom 1</InputLabel>
        
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
            
        <div className="inside">
            <FormControl sx={{ m: 1, minWidth: 380 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Symptom 3</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age3}
          onChange={handleChange3}
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
        <InputLabel id="demo-simple-select-autowidth-label">Symptom 4</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age4}
          onChange={handleChange4}
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
            <FormControl sx={{ m: 1, minWidth: 380, }}>
        <InputLabel id="demo-simple-select-autowidth-label">Symptom 5</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age5}
          onChange={handleChange5}
          autoWidth
        //   label="Symptom_5"
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

        <div className="submit">
      <button type="button" id="b1" onClick={submitClick}><class id="b31">SUBMIT</class></button>
      </div>

    {/* <div className="outp"><h1>You may have : {dis}</h1></div> */}

        </div>

        <div className="outpp"><h1>You may have : <h2>{dis}</h2></h1></div>
    </div>
    
    

      
    </>
  );
}