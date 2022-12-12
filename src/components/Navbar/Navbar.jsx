import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import styled from "styled-components";




const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Wrapper className="navbar">
      <div className="navbar-logo">
        <img src={images.gericht} alt="gericht logo" />
      </div>
      <ul className="navbar-links">
        <li className="p-opensans"><a href="#home">Home</a></li>
        <li className="p-opensans"><a href="#about">About</a></li>
        <li className="p-opensans"><a href="#menu">Menu</a></li>
        <li className="p-opensans">
          <a href="#award">Award</a>
        </li>
        <li className="p-opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="navbar-login">
        <a href="#login" className="p-opensans">
          Log In / Register
        </a>
        <div></div>
        <a href="./" className="p-opensans">
          Book Table
        </a>
      </div>

      <div className="navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} cursor="pointer" onClick={() => setToggleMenu(!toggleMenu)} />

        {toggleMenu && (
          <div className="navbar-smallscreen-overlay flex-center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay-close" onClick={() => setToggleMenu(!toggleMenu)} />
            <ul className="navbar-smallscreen-links">
              <li className="p-opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p-opensans">
                <a href="#about">About</a>
              </li>
              <li className="p-opensans">
                <a href="#menu">Menu</a>
              </li>
              <li className="p-opensans">
                <a href="#award">Award</a>
              </li>
              <li className="p-opensans">
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div className="navbar-login navbar-login-mobile" style={{ display: "none" }}>
              <a href="#login" className="p-opensans">
                Log In / Register
              </a>
              <div></div>
              <a href="./" className="p-opensans">
                Book Table
              </a>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-black);
  padding: 1rem 2rem;
  .navbar-logo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img {
      width: 150px;
    }
  }
  .navbar-links {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    /* column-gap: 2rem; */
    li {
      margin: 0 1rem;
      cursor: pointer;
      &:hover {
        color: var(--color-grey);
      }
    }
  }
  .navbar-login {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    a {
      margin: 0 1rem;
      text-decoration: none;
      transition: all 0.5 ease;
      &:hover {
        border-bottom: 1px solid var(--color-golden);
      }
    }
    div {
      width: 1px;
      height: 30px;
      background-color: var(--color-grey);
    }
  }
  .navbar-smallscreen {
    display: none;
  }
  .navbar-smallscreen-overlay {
    position: fixed;
    inset: 0;
    background: var(--color-black);
    transition: all 0.5s ease;
    flex-direction: column;
    z-index: 5;
    .overlay-close {
      font-size: 27px;
      color: var(--color-golden);
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 20px;
    }
  }
  .navbar-smallscreen-links {
    list-style-type: none;
    li {
      margin: 2rem;
      cursor: pointer;
      font-size: 2rem;
      color: var(--color-golden);
      text-align: center;
      font-family: var(--font-base);
      &:hover {
        color: var(--color-white);
      }
    }
  }
  @media (max-width: 2000px) {
    .navbar-logo img {
      width: 210px;
    }
  }
  @media (max-width: 1150px) {
    .navbar-links {
      display: none;
    }
    .navbar-smallscreen {
      display: flex;
    }
  }
  @media (max-width: 650px) {
    padding: 1rem;
    .navbar-login {
      display: none;
    }
    .navbar-login-mobile {
      display: flex !important;
    }
    .navbar-logo img {
      width: 110px;
    }
  }
`;
