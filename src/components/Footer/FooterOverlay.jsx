import React from 'react';
import styled from 'styled-components';


const FooterOverlay = () => (
  <Wrapper className='footer-overlay'>
    <div className='black' />
    <div className='img app-bg' />
  </Wrapper>
);

export default FooterOverlay;

const Wrapper = styled.div`
width: 100%;
height: 100%;
z-index: -1;
display: flex;
flex-direction: column;
position: absolute;
.black {
  height: 25%;
  background: var(--color-black);
}
.img {
  height: 75%;
}
`