import React from 'react'
import './App.css'
import NavBar from "./Components/NavBar/NavBar"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Props from "./Components/Pages/Props/Props";

function App() {
  return (

    <Router>
        <div className="App">
          <NavBar/>
          <Route exact path="/props" component={Props}/>
        </div>
    </Router>


  );
}

export default App;
