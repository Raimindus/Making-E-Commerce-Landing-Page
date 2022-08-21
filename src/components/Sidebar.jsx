import { slide as Menu } from 'react-burger-menu'
import React from 'react';
import { Row } from 'react-bootstrap';
import {Col, Container} from 'reactstrap';
import { HashLink } from 'react-router-hash-link';

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '30px',
      height: '24px',
      right: '25px',
      top: '25px'
    },
    bmBurgerBars: {
      background: '#373a47'
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
      height: '100%'
    },
    bmMenu: {
      background: 'white',
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
  }


class SideBar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
        <Container fluid px="0" style={{paddingTop:"25px", backgroundColor:'#F1F3FF'}}>
            <Container pt="4" ms="0" me="0" px="0" className='hideSidebar'>
                <Row ms="0" className="justify-content-start headertext">
                    <Col sm="1">
                        <button className='bluebox' style={{border:'0'}} />
                    </Col>
                    <Menu right styles={styles} isOpen={this.state.menuOpen}
                     onStateChange={(state) => this.handleStateChange(state)}>
                        <h3 style={{color:'black', fontWeight:'700'}}>BCR</h3>
                        <br/><br/>
                        <HashLink style={{color:'black'}} onClick={() => this.closeMenu()} id="services" className="menu-item text-decoration-none" Smooth to="/#services">Our Services</HashLink>
                        <br/><br/>
                        <HashLink style={{color:'black'}} onClick={() => this.closeMenu()} id="about" className="menu-item text-decoration-none" Smooth to="/#about">Why Us</HashLink>
                        <br/><br/>
                        <HashLink style={{color:'black'}} onClick={() => this.closeMenu()} id="testi" className="menu-item text-decoration-none" Smooth to="/#testi">Testimonial</HashLink>
                        <br/><br/>
                        <HashLink style={{color:'black'}} onClick={() => this.closeMenu()} id="faq" className="menu-item text-decoration-none" Smooth to="/#faq">FAQ</HashLink>
                    </Menu>
                </Row>
            </Container>
        </Container>
    );
  }
}

export default SideBar;