import React from "react";
import PropTypes from "prop-types";
import Headroom from 'react-headroom';
import SideMenu from './SideMenu';
// import { Container } from 'react-responsive-grid';
import Logo from '../../../../public/logo-clean.gif';
// import { Menu } from '@material-ui/icons';

const styles = {
  menuStyle: {
    color: 'white',
    float: 'left',
    marginLeft: '20px',
    marginTop: '10px',
    position: 'absolute',
    display: 'flex'
  },
  logoStyle: {
    width: '50px',
    height: '45px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex'
  }
};

class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ width: 'inherit', height: '60px' }}>
        <Headroom
          wrapperStyle={{ width: 'inherit' }}
          style={{
            background: 'transparent',
            width: '100%',
          }}
        >
          <SideMenu />
          <img src={Logo}
            style={styles.logoStyle}
          />
        </Headroom>
      </div>
    );
  }
};

TopBar.propTypes = {
  title: PropTypes.string
};

export default TopBar;
