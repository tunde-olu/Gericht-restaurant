import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import styled from 'styled-components';
import { images } from '../../constants';

const Footer = () => (
  <Wrapper className='footer section-padding'>
    <FooterOverlay />
    <Newsletter />
    <div className="footer-links">
      <div className="contact">
        <h1 className="headtext">Contact Us</h1>
        <p className="p-opensans">001 Allen Avenue, Ikeja, Lagos</p>
        <p className="p-opensans">+234 80 0000 0000</p>
        <p className="p-opensans">+234 90 0000 0000</p>
      </div>

      <div className="logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p-opensans">"The best way to find yourself is to lose yourself in the service of others"</p>
        <img src={images.spoon} alt="spoon" className='spoon-img' style={{ marginTop: 15 }} />
        <div className="icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="work">
        <h1 className="headtext">Working Hours</h1>
        <p className="p-opensans">Monday-Friday:</p>
        <p className="p-opensans">08:00 am - 12:00 am</p>
        <p className="p-opensans">Saturday-Sunday:</p>
        <p className="p-opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className="copyright">
      <p className="p-opensans">&copy; {new Date().getFullYear()} Gericht. All Rights reserved.</p>
    </div>
  </Wrapper>
);

export default Footer;

const Wrapper = styled.footer`
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: var(--color-black);
  padding-top: 0;
  .footer-links {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 5rem;
    padding: 0 2rem;
  }
  .contact,
  .logo,
  .work{
    flex: 1;
    margin: 1rem;
    text-align: center;
  }
  .logo img:first-child{
    width: 210px;
    margin-bottom: 0.75rem;
  }
  .work p:nth-child(2n + 1){
    margin-bottom: 2rem;
  }
  .icons {
    margin-top: 0.5rem;
    svg {
      color: var(--color-white);
      margin: 0.5rem;
      font-size: 24px;
      cursor: pointer;
      :hover {
        color: var(--color-golden);
      }
    }
  }
  .headtext{
    font-family: var(--font-base);
    color: var(--color-white);
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    font-size: 32px;
    line-height: 41.6px;
    margin-bottom: 1rem;
  }
  .copyright {
    margin-top: 3rem;
  }
  @media (min-width: 2000px){
    .headtext{
      font-size: 51px;
      line-height: 61px;
    }
  }
  @media (max-width: 1150px){
    .footer-links {
      flex-direction: column;
      align-items: center;
      padding: 0;
    }
    .contact,
    .logo,
    .work{
      margin: 2rem 0;
      width: 100%;
    }
  }
  @media (max-width: 650px){
    padding: 0 0 2rem 0;
  }
  @media (max-width: 350px){
    .logo img:first-child {
      width: 80%;
    }
  }
`