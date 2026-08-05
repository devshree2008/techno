import React, {useState} from 'react'
import './App.css';

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success");
  }
  const handleLowClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success");
  }
  const handleClearClick = () => {
    console.log("Clear text was clicked" + text);
    let newText = "";
    setText(newText);
  }
  const handleChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
      <div className="home-container">
         <h2>Welcome!</h2>
         <label htmlFor="notes">Enter text to Analyze :</label>
         <textarea id="notes" value={text} onChange={handleChange}></textarea>
         <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
         <button className="btn btn-primary" onClick={handleLowClick}>Convert to Lowercase</button>
         <button type="button" className="btn btn-light" onClick={handleClearClick}>Clear text</button>
         <h3>Your text summary</h3>
         <p>{text.split(" ").length} words and {text.length} characters & {0.008 * text.split(" ").length} Minutes read</p>
         <h4>Preview</h4>
         <p>{text}</p>
    </div>
    </>
  );
}


