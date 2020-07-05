import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Route, Switch} from "react-router-dom"
import './App.css';

//Components
import Home  from "./components/pages/Home"
import Navbar from "./components/layouts/Navbar"
import SpeakerList from "./components/pages/SpeakerList"
import SpeakerInfo from "./components/pages/SpeakerInfo"

function App() {
  return (
    <>
    <Navbar />
      <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/speakers-list" component={SpeakerList}/>
       <Route path="/speaker/info/:id" children={<SpeakerInfo/>}/>
     </Switch>
    </>
  ) 
}

export default App;
