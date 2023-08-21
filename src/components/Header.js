
import React, { useState } from 'react';
import LogImage from '../images/logo.jpg';
import style from '../mystyle.module.css';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

function Header({navPath}) {
  const [showBasic, setShowBasic] = useState(false);
  let activeHome = false
    , activeAbout = false
    , activeProject = false
    , activeContact =  false;

  if (navPath === '/'){
    activeHome = 'true';
  } else if (navPath === '/about') {
    activeAbout = 'true'
  } else if (navPath === '/project') {
    activeProject = 'true'
  } else if (navPath === '/contact') {
    activeContact = 'true'
  } 
  

  return (
    <MDBNavbar expand='lg' dark bgColor='dark' className='sticky-top'>
      <MDBContainer fluid>
        <img className={style.logo} src={LogImage} />

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active={activeHome} aria-current='page' href='/'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active={activeAbout} href='/about'>About</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' active={activeProject} className='nav-link' role='button'>
                  Project
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink  active={activeContact} href='/contact' tabIndex={-1} aria-disabled='true'>
                Contact
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
export default Header;