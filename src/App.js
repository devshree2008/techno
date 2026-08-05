import './App.css';
import NavBar from './NavBar';
import TextForm from './TextForm';
import About from './About';
import Alert from './Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <div className="App">
      <Router>
        <NavBar h2="Techno" />

        {/* Define routes */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={<TextForm h3="Text Area" showAlert={showAlert} />}
          />
        </Routes>

        <Alert alert={alert} />
      </Router>
    </div>
  );
}

export default App;
