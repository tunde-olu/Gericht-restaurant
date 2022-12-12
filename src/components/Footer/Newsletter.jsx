import React from 'react';
import styled from 'styled-components';
import SubHeading from '../SubHeading/SubHeading';


const Newsletter = () => (
  <Wrapper className='newsletter'>
    <div className="heading">
      <SubHeading title='Newsletter' />
      <h1 className="headtext-cormorant">Subscribe to our Newsletter</h1>
      <p className="p-opensans">And never miss latest Updates!</p>
    </div>
    <div className="input flex-center">
      <input type="email" placeholder='Enter your e-mail address' />
      <button className="custom-button">Subscribe</button>
    </div>

  </Wrapper>
);

export default Newsletter;

const Wrapper = styled.div`
padding: 2rem 4rem;
border: 1px solid var(--color-golden);
background: var(--color-black);
.heading {
  text-align: center;
}
.input {
  margin-top: 3rem;
  input {
    width: 620px;
    border: 1px solid var(--color-golden);
    border-radius: 5px;
    font-size: 1rem;
    font-family: var(--font-base);
    color: var(--color-white);
    margin-right: 2rem;
    padding: 0.75rem 1rem;
    background: var(--color-black);
  }
  button {
    width: max-content;
  }
}
@media (min-width: 2000px){
  .input {
    font-size: 2rem;
  }
}
@media (max-width: 990px){
  .heading h1 {
    font-size: 50px;
    line-height: 55px;
  }
  .input {
    flex-direction: column;
    width: 100%;
    input {
      width: 100%;
      margin: 0 0 2rem 0;
    }
  }
}
@media (max-width: 650px){
  padding: 2rem 0;
  border: none;
}
@media (max-width: 300px){
  .heading h1 {
    font-size: 32px;
    line-height: 50px;
  }
}
`