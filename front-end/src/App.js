import React, { useState } from 'react';
import './App.css';
import Homepage from './pages/Homepage.js'
import Footer from './components/Footer.js'
import Nav from './components/Nav.js'
import Intro from './components/Intro.js'
import Login from './components/Login/Login.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Create from './components/Create.js'
// import RecordList from './components/RecordList.js'
import 'bootstrap/dist/css/bootstrap.css';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
}


function App() {

  const token = getToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="App">
        <Nav />
          <Homepage />  
        {/* <Create />
        <RecordList />
        <Homepage /> */}
        <Intro />
        <Footer />
    </div>
  );
}

export default App;
