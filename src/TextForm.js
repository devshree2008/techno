import React, {useState} from 'react'
import './App.css';

export default function TextForm(props) {
  const [text, setText] = useState('');

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
  const handleChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  }
  const handleCopy = () => {
    console.log("Text was copied");
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!","success");
  }
    const handleExtraSpaces = () => {
    let cleanedText = text.replace(/\s+/g, ' ').trim();
    setText(cleanedText);
    props.showAlert("Extra spaces removed!", "success");
  };
    const handlePaste = async () => {
    try {
      const pastedText = await navigator.clipboard.readText();
      setText(pastedText);
      props.showAlert("Text pasted from clipboard!", "success");
    } catch (err) {
      props.showAlert("Failed to paste text!", "error");
    }
  };
  const handleClearClick = () => {
    console.log("Clear text was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text is cleared!","success");
  }
  const handleTitleCase = () => {
        let newText = text
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        setText(newText);
        props.showAlert("Converted to Title Case`!","success");
    }
    const handleSentenceCase = () => {
        let newText = text.toLowerCase();
        newText = newText.replace(/(^\s*[\w])|[,\n\r]\s*[\w]/g, (match) => match.toUpperCase());
        if (newText.length > 0) {
            newText = newText.charAt(0).toUpperCase() + newText.slice(1);
        }
        setText(newText);
        props.showAlert("Converted to Sentence Case!","success");
    }
    const handleCamelCase = () => {
        let newText = text
            .replace(/[-_,\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
            .replace(/^(.)/, (c) => c.toLowerCase());
        setText(newText);
        props.showAlert("Converted to Camel Case!","success");
    }
    const handleSnakeCase = () => {
        let newText = text
            .trim()
            .toLowerCase()
            .replace(/[\s\W-]+/g, '_');
        setText(newText);
        props.showAlert("Converted to Snake Case!","success");
    }

  return (
    <>
      <div className="home-container">
         <h3>Welcome!</h3>
         <label htmlFor="notes">Enter text to Analyze :</label>
         <textarea id="notes" value={text} onChange={handleChange}></textarea>
         <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
         <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
         <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
         <button className="btn btn-primary mx-1 my-1" onClick={handlePaste}>Paste Text</button>
         <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
         <button className="btn btn-primary mx-1 my-1" onClick={handleTitleCase}>Convert to Title Case</button>
         <button className="btn btn-primary mx-1 my-1" onClick={handleSentenceCase}>Convert to Sentence Case</button>
         <button className="btn btn-primary mx-1 my-1" onClick={handleCamelCase}>Convert to Camel Case</button>
         <button className="btn btn-primary mx-1 my-1" onClick={handleSnakeCase}>Convert to Snake Case</button>
         <button type="button" className="btn btn-light mx-1 my-1" onClick={handleClearClick}>Clear text</button>
         <div className="page-container">
  <h2>Your text summary</h2>
  <p>{text.trim().split(/\s+/).filter((e) => e.length !== 0).length} words and {text.length} characters</p>
  <p>{0.008 * text.trim().split(/\s+/).filter((e) => e.length !== 0).length} Minutes read</p>
</div>

         <h4>Preview</h4>
         <p>{text}</p>
    </div>
    </>
  );
}


