import React from "react";
import styled from "styled-components";
import { SubHeading } from "../../components";
import { images } from "../../constants";



const Header = () => {
  return (
    <Wrapper className="app-header app-wrapper section-padding">
      <div className="app-wrapper-info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app-header-h1">The Key to Fine Dining</h1>
        <p className="p-opensans" style={{ margin: "2rem 0" }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button type="button" className="custom-button">Explore Menu</button>
      </div>
      <div className="app-wrapper-img">
        <img src={images.welcome} alt="header" />
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  background-color: var(--color-black);
  .app-header-h1 {
    color: var(--color-golden);
    font-family: var(--font-base);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    line-height: 117px;
    font-size: 90px;
  }
  .app-header-img img {
    width: 80%;
  }
`;
