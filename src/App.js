
import { React, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useHistory
} from "react-router-dom";

import NavigationBar from './Components/NavigationBar';
import Homepage from './Components/Homepage';
import Menu from './Components/Menu';
import Locations from './Components/Locations';
import Footer from './Components/Footer';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <NavigationBar/>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/locations" element={<Locations/>} />
        </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
