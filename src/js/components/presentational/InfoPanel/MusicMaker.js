import React from "react";
import AlbumW from "../../../../../public/album.png";

class MusicMaker extends React.Component {
  render() {
    return (
      <div className="lato" style={{ color: 'white' }}>
        <div style={{textAlign:'center'}}><img src={AlbumW} className="invert" style={{ height: '70px'}}/></div>
        <h5 className="mt-3" style={{ fontWeight: 'bold' }}>Make Music</h5>
      	<p style={{ fontSize: '18px' }}>
        	Music creation made simple and accessible. Powered by tensorflow Magenta, 
          our AI engine <span className="rocker"> AIMee</span> helps 
          simplify music generation through interactive user interface.
      	</p>
      </div>
    );
  }
}

export default MusicMaker;
