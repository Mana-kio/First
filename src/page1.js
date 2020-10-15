import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

import List from './List';

class page1 extends React.Component  {
//   const ColoredLine = ({ color }) => (
//     <hr
//         style={{
           
//             backgroundColor: color,
//             width: "90%"
//         }}
//     />
// )
constructor(props) {
  super(props);
  this.state = {
    value: '',
    list:[]
};

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({value: event.target.value});
  this.setState({
    list: [
      {
        name: this.state.value,
      }
    ]
    });
}

handleSubmit(event) {
  alert('Line count count updated. Thank you!!   ' + this.state.value);
  event.preventDefault();
}
  
render()
{return (
    <div className="App">
     
      <header className="App-header">
        <div style={{backgroundColor:'grey' ,height: '35vh', width: '40vw',justifyContent:'center',alignItems:'center'}}>
        <form onSubmit={this.handleSubmit}
        style={{justifyContent:'center',alignItems:'center',marginLeft:'30%',marginTop:40}}>
        <label>
          Line Count
          <br></br><input type="text" value={this.state.value} onChange={this.handleChange}
          style={{height:40,width:50}} />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
        </div>
        
        <List list={this.state.list} />
        {/* <ColoredLine color="black" /> */}
      </header>
      <div className="maindiv">
     <div className="div">
    <Link to="/" style={{textDecoration:'none',color:'black'}}>Back</Link> 
     </div>
    
    
     </div>
       <h1 className="logo">
          TimeSaver.Club
        </h1>
    
    </div>
  );
}
}
export default page1;
