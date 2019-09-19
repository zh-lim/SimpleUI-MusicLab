import React from "react";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";

class SignUpButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div style={{ ...this.props.containerStyle, ...{zIndex: '999'} }}>
        <Button variant="contained" color={this.props.colorTheme} style={{ ...this.props.buttonStyle,...{zIndex: 'inherit'} }}>
          Sign Up
        </Button>
      </div>
    );
  }
}

SignUpButton.propTypes = {
  containerStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  colorTheme: PropTypes.string
}

export default SignUpButton;