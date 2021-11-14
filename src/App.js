
import { React, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useHistory
} from "react-router-dom";


import Homepage from './Components/Homepage';
import Locations from './Components/Locations';
import Footer from './Components/Footer';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/locations" element={<Locations/>} />
          <Route path="/" element={<Homepage/>} />
        </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
