import React from "react";
import { slide as Menu } from 'react-burger-menu';

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '25px',
    left: '36px',
    top: '10px'
  },
  bmBurgerBars: {
    // background: '#373a47'
    background: 'white'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100vh',
    top: '-20px',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};


class SideMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu styles={styles}/>
    );
  }
}

export default SideMenu;