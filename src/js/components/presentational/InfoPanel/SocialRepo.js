import React from "react";
import Share from "../../../../../public/share-music.png";

class SocialRepo extends React.Component {
  render() {
    return (
      <div className="lato" style={{ color: 'white' }}>
      	<div style={{textAlign:'center'}}><img src={Share} className="invert" style={{ height: '70px'}}/></div>
        <h5 className="mt-3" style={{ fontWeight: 'bold' }}>Share Your Music</h5>
      	<p style={{ fontSize: '18px' }}>
        	Share your stories on <span className="rocker">MusicLab</span>. 
          Join the community and connect with others musically. Contribute to 
          an ever growing open-source repository for music.
      	</p>
      </div>
    );
  }
}

export default SocialRepo;
