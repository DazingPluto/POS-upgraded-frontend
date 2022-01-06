import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

// components
import MenuPage from "./components/MenuPage";
import LandingPage from "./components/LandingPage";
import Ghost from "./components/Ghost"
import OptionsContainer from "./components/OptionsContainer";

class App extends Component {
  render() {
    return (
     <Router>
       <div>
        <Routes>
         <Route path="/" element={<LandingPage />}/>
         <Route path="/MainMenu" element={<MenuPage />}/>

         <Route path="/ghost" element={<Ghost />}/>
         <Route path="/options" element={<OptionsContainer />}/>

         </Routes>
       </div>
     </Router>
    );
  }
}

export default App;