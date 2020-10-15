import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import first from "./first";
import page1 from "./page1";
import page2 from './page2';
import video from './video';
function App() {
  
  return (
    <div className="App">
      <Route path="/" exact component={first} />
      <Route path="/page1" exact component={page1} />
      <Route path="/page2" exact component={page2} />
      <Route path="/video" exact component={video} />
    </div>
  );
}

export default App;
