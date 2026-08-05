import React, {useState} from 'react';
// import './About.css';  optional CSS file for styling

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color : 'white',
        backgroundColor : 'black'
    }); 
    const [btnText, setBtnText] = useState("Enable Dark Mode");
    const toggleStyle = () => {
        if(myStyle.color === 'white'){
            setMyStyle({
              color : 'black',
              backgroundColor : 'white'
            });
            setBtnText("Enable Dark Mode");
        }
        else{
            setMyStyle({
              color : 'white',  
              backgroundColor : 'black',
              border : '7px solid white'
            });
            setBtnText("Enable Light Mode");
        }
    }

  return (
    <div className="about-container" style={myStyle}>
      <h1>About Us</h1>
      <p>
        Welcome to our application! We are passionate about building tools that
        make text analysis simple and effective. Our mission is to help users
        transform and understand their text with ease.
      </p>
      <h2>Our Vision</h2>
      <p>
        We aim to provide intuitive features like case conversion, word count,
        character count, and reading time estimation — all in one place.
      </p>
      <h2>Our Team</h2>
      <p>
        Built by a small team of developers who love React and modern web
        technologies. We believe in clean design, usability, and continuous
        improvement.
      </p>
      <div className="about-toggle">
        <button className="btn btn-primary" onClick={toggleStyle}>
          {btnText}
        </button>
      </div>
    </div>
  );
}
  
