import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Logo from '../../../../public/logo-clean.gif';

const styles = {
  logoStyle: {
    width: '40px',
    height: '36px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex'
  }
};

const Footer = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="mt-3 justify-content-center">
          <MDBCol md="2" lg="2" xl="2" className="mb-4 light-grey-text text-center">
            <img src={Logo} style={styles.logoStyle} />
            <p className="light-grey-text rocker" style={{ fontSize: '20px' }}>MusicLab</p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4 light-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>About Us</strong>
            </h6>
            <hr className="white accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p style={{ fontSize: '14px' }}>
              <a href="#!" className="light-grey-text">
                Our Team
              </a>
            </p>
            <p style={{ fontSize: '14px' }}>
              <a href="#!" className="light-grey-text">
                Careers
              </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4 light-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact Us</strong>
            </h6>
            <hr className="white accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p style={{ fontSize: '14px' }}>
              <a href="#!" className="light-grey-text">
                <i className="fa fa-home mr-3" /> Singapore, S 566190, SG
              </a>
            </p>
            <p style={{ fontSize: '14px' }}>
              <a href="#!" className="light-grey-text">
                <i className="fa fa-envelope mr-3" /> info@musiclab.com
              </a>
            </p>
            <p style={{ fontSize: '14px' }}>
              <a href="#!" className="light-grey-text">
                <i className="fa fa-phone mr-3" /> + 65 9543 2211
              </a>
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
            <h6 className="mb-0 white-text">
              Get connected with us on social networks!
            </h6>
          </MDBCol>
          <MDBCol md="6" lg="7" className="text-center text-md-right">
            <a className="fb-ic ml-0">
              <i className="fab fa-facebook-f fa-lg white-text mr-lg-4">
              </i>
            </a>
            <a className="tw-ic">
              <i className="fab fa-twitter fa-lg white-text mr-lg-4">
              </i>
            </a>
            <a className="li-ic">
              <i className="fab fa-linkedin-in fa-lg white-text mr-lg-4">
              </i>
            </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href=""> MusicLab.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;