import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import TopBar from './components/container/TopBar';
import LandImg from './components/presentational/LandImg/LandImg';
import InfoPanel from './components/container/InfoPanel';
import Footer from './components/container/Footer';

class App extends Component {
  state = {
    name: 'MusicLab',
  };

  render() {
    return (
      <div className="App">
        <header className="Header">
          <TopBar title={this.state.name}/>
        </header>
        <LandImg />
        <InfoPanel />
        <Footer />
      </div>
    );
  }
}

export default hot(App);
