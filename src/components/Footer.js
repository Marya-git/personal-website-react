
import React, { useState } from 'react';
import style from '../mystyle.module.css';
import { MDBIcon, MDBContainer, MDBBtn, MDBFooter } from 'mdb-react-ui-kit';


function Footer() {

  return (
    <div>
      <MDBFooter className='bg-light text-center text-white '>
        <MDBContainer className='p-4 pb-0'>
          <section className='mb-4'>
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#3b5998' }}
              target="_blank"
              href='https://www.facebook.com/ma.fayazi/'
              role='button'
            >
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#dd4b39' }}
              target="_blank"
              href='https://scholar.google.com/citations?user=K20n54sAAAAJ&hl=en&authuser=3'
              role='button'
            >
              <MDBIcon fab icon='google' />
            </MDBBtn>
    
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#0082ca' }}
              target="_blank"
              href='www.linkedin.com/in/maryamfayazi'
              role='button'
            >
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#333333' }}
              target="_blank"
              href='https://github.com/Marya-git'
              role='button'
            >
              <MDBIcon fab icon='github' />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Copyright: Maryam Fayazi
        </div>
      </MDBFooter>
    </div>
    
  );
}
export default Footer;