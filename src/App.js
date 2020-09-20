import React from 'react'
import './App.css'
import 'bootstrap/dist/js/bootstrap.min'
import NavBar from "./Components/NavBar/NavBar"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Props from "./Components/Pages/Props/Props";
import Accueil from "./Components/Pages/Accueil/Accueil";
import PropTypes from "./Components/Pages/Props/MyPropTypes";
import UseState from "./Components/Pages/Hooks/UseState";
import UseEffect from "./Components/Pages/Hooks/UseEffect";

function App() {
  return (
      <div className="App">
          <Router>
              <NavBar/>
              <Route exact path="/" component={Accueil}/>
              <Route path="/props" render={()=><Props someProps1="I am a Props"/>}/>
              <Route path="/propTypes" render={()=><PropTypes somPropType="appProp"/>}/>
              <Route path="/useState" render={()=><UseState/>}/>
              <Route path="/useEffect" render={()=><UseEffect/>}/>
          </Router>
      </div>

  );
}

export default App;
