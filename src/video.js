import React, { Component } from 'react';
import { Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './app-v.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//import Privac from "./privacyPolicy";
import "./video-react.css"; 
//import { Player } from 'video-react';

export default class video extends Component {
    state = {
      date: new Date(),
    }
   
    onChange = date => this.setState({ date })
   
    render() {
      return (
     <div className="main-container">
        <div className="header">
        <h1 className="h1">
            Time Saver.club
         </h1>
         </div>
         <div className="body">
         <h2 className="h2">
            View all available dates
         </h2>
         <div className="cad">
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />
        </div>
        </div>
        <div>
        {/* <Player
      playsInline
     // poster="/assets/poster.png"
      src="https://youtu.be/WKydF_3gxfw"
        /> */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/WKydF_3gxfw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="dropd">
          
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            State
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">X</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Y</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Z</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Country
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">X</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Y</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Z</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Precinct

          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">X</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Y</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Z</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
      </div>
      );
    }
  }