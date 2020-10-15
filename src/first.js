import React, { Component } from 'react';

import './App.css';
import {Link} from 'react-router-dom';

  const ColoredLine = ({ color }) => (
    <hr
        style={{
           
            backgroundColor: color,
            width: "90%"
        }}
    />
);

      
class first extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list:[],
      upload:false,
      count:false
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
    this.setState({
      upload:false,
      count:true
    })
  }
  render()
  {
    return (
      <div className="App">
        <h1 style={{marginLeft:60,marginTop:0,paddingTop:40}}>
            Hello Volunteer
          </h1>
        <header className="App-header">
         
          <img src={require('./boy.jpg')} class="App-logo" alt="logo" />
          <p>
            Markus Gilbert
          </p>
          <ColoredLine color="black" />
        </header>
        <div>
    {this.state.upload==false?(
     <div >
     {/* <Link to="/page1" style={{textDecoration:'none',color:'black',textAlign:'center'}}></Link> 
    */}
     <button onClick={() => this.setState({
            upload:true
          })}
          style={{backgroundColor:'#F07272', height: '10vh',width: '15vw',textAlign: 'center',borderRadius: '20rem' ,marginLeft:'45%',textAlign:'center'}}>
       Update line count
       
      </button>
     { this.state.count==true?(
        <p  style={{ height: '10vh',width: '15vw',textAlign: 'center' ,marginLeft:'45%',textAlign:'center',marginTop:20,fontSize:20}}> 
        Current count is: {this.state.value}</p>
     ):(
       <p></p>
     )}
      
      {/* <Link to="/video" style={{textDecoration:'none',color:'black',textAlign:'center'}}>video</Link>  */}
      </div> 
    ):(
        <form onSubmit={this.handleSubmit}
        style={{justifyContent:'center',alignItems:'center',marginLeft:'45%',marginTop:0,flexDirection:'row'}}>
        <label style={{fontSize:30,}}>
          Line Count
          <br></br>
          <input type="text" value={this.state.value} onChange={this.handleChange}
          style={{height:50,width:60,marginLeft:30}} />
        </label>
        <br></br>
        <input type="submit" value="Submit" style={{backgroundColor:'#F07272',marginTop:20,borderRadius: '20rem',height: '8vh',width: '10vw'}} />
      </form>
      
    )}
       
       </div>
       
         <h1 className="logo">
            TimeSaver.Club
          </h1>
       
      </div>
    );
  }
}
  


export default first;
