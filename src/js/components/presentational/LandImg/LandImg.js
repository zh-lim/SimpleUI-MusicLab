import React from "react";
import SignUpButton from "../../container/SignUpButton";

const styles = {
  containerStyle: {
    display: 'flex',
    width: 'inherit',
    height: '45px',
    justifyContent: 'center'
  },
  buttonStyle: {
    width: 'inherit',
    height: 'inherit',
    maxWidth: '240px',
    fontSize: '18px'
  }
};

class LandImg extends React.Component {
  render() {
    return (
      <div id="hero" className="Hero" style={{ backgroundImage: 'url("https://data.whicdn.com/images/314707089/large.jpg")' }} >
        <div className="content" style={{ width: '30vw', textAlign: 'center', top: '5vw', margin: 'auto', color: 'white', maxHeight: '500px' }}>
          <h1>
            <span className="rocker" >M u s i c L a b</span>
          </h1>
          <hr className="white accent-2 mb-2 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
          <p className="lato mt-4">
            Music tells a story. MusicLab helps you craft your musical stories by assisting you in
            <span style={{ fontWeight: 'bold' }}> MAKING, COLLABORATING & SHARING</span> of your musical ideas. 
            Share your story with MusicLab now.
          </p>
          <SignUpButton colorTheme="primary" containerStyle={styles.containerStyle} buttonStyle={styles.buttonStyle}/>
        </div>
        <div className="overlay" />
      </div>
    );
  }
}

export default LandImg;
