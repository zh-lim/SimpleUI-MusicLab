import React from "react";
import MusicMaker from "../presentational/InfoPanel/MusicMaker";
import Collaborator from "../presentational/InfoPanel/Collaborator";
import SocialRepo from "../presentational/InfoPanel/SocialRepo";
import SignUpButton from "./SignUpButton";

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

class InfoPanel extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
    return (
      <div className="Hero" >
      	<div className="BigPanel" style={{ textAlign: 'center', marginTop: '5vw', color: 'white' }} >
          <h2 style={{ fontWeight: 'bold' }}>
            <span className="boogaloo">Create Your Musical Story</span>
          </h2>
          <hr className="white accent-2 mb-2 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
      	</div>
        <div className="flexbox-container">
          <MusicMaker/>
          <Collaborator/>
          <SocialRepo/>
        </div>
        <SignUpButton colorTheme="secondary" containerStyle={styles.containerStyle} buttonStyle={styles.buttonStyle}/>
      </div>
    );
  }
}

export default InfoPanel;
