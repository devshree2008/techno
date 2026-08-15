import './App.css';
import NavBar from './NavBar';
import TextForm from './TextForm';
import About from './About';
import Alert from './Alert';
import FAQ from './FAQ';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
//import logo from './logo.svg';
function App(props) {
  const [alert, setAlert] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
         <div className="bar-left">
                 {/*<img src={logo} className="App-logo" alt="logo" />*/}
                 <h2 className="tech-text">TechText</h2>
          </div>
      <Router>
        <NavBar h2="Techno" toggleMode={() => setDarkMode(!darkMode)} mode={darkMode ? 'dark' : 'light'} />
        <Alert alert={alert} />
        
        <Routes>
          <Route exact path="/about" element={<About mode={darkMode ? 'dark' : 'light'} />} />
          <Route
            path="/"
            element={<TextForm h3="Text Area" showAlert={showAlert} />}
          />
          <Route exact path="/faq" element={<FAQ mode={darkMode ? 'dark' : 'light'} />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
