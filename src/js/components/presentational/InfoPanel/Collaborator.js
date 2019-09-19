import React from "react";
import ML from "../../../../../public/music_library.png";

class Collaborator extends React.Component {
  render() {
    return (
      <div className="lato" style={{ color: 'white' }}>
      	<div style={{textAlign:'center'}}><img src={ML} className="invert" style={{ height: '70px'}}/></div>
        <h5 className="mt-3" style={{ fontWeight: 'bold' }}>Collaborate with Others</h5>
      	<p style={{ fontSize: '18px' }}>
        	Working collaboratively with other music enthusiasts has never been easier. Through 
          our Music Open-Source Repository (<span className="rocker">MORe</span>), 
          you can now sample and edit audio snippets from others and commit them seamlessly 
          on the platform. <span className="rocker">MORe </span>
          is hosted on our Cloud Storage to enable for access anywhere, anytime.
      	</p>
      </div>
    );
  }
}

export default Collaborator;
