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
import Api from "./Components/Pages/Hooks/Api";
import CustomHook from "./Components/Pages/Hooks/CustomHook";
import UseMemo from "./Components/Pages/Hooks/UseMemo";

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
              <Route path="/api" render={()=><Api/>}/>
              <Route path="/customHooks" render={()=><CustomHook/>}/>
              <Route path="/useMemo" render={()=><UseMemo/>}/>
          </Router>
      </div>

  );
}

export default App;
