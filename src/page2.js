import React, { Component } from 'react';
import { useState } from "react";
import Calendar from 'react-calendar';
import { render } from "react-dom";
import {Link} from 'react-router-dom';
import './Calender.scss';
const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return (
    <div>
      <Calendar onChange={onChange} value={date} className="react-calendar" />
      {console.log(date)}
      <p style={{backgroundColor:'white',textAlign:'center', borderRadius:20}}>
      {date.toString()}
      </p>
    </div>
  );
};
class page2 extends Component {
//    constructor(props){
//      super(props);
//     this.state = {

//       currentDateTime: Date().toLocaleString(),
//       date: []

//     }
// }
  
 
  render() {
   
    return (
      
        
      
      <main style={{marginLeft:'10%',marginRight:'10%',padding:'1%'}}>
        <h1 className="h1">
        Previous Count
       </h1>
      <ReactCalendar />
      <div className="div">
    <Link to="/" style={{textDecoration:'none',color:'black'}}>Back</Link> 
     </div>
      </main>
    
      
     
    );
  }
}

export default page2; 