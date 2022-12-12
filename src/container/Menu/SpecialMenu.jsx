import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';
import styled from 'styled-components';


const SpecialMenu = () => (
  <Wrapper className='specialMenu flex-center section-padding' id='menu' >
    <div className="title">
      <SubHeading title='Menu that fits your palatte' />
      <h1 className="headtext-cormorant">Today's Special</h1>
    </div>

    <div className="menu">
      <div className="menu-wine flex-center">
        <p className='menu-heading'>Wine & Beer</p>
        <div className="menu-items">
          {data.wines.map((wine, index) => {
            return <MenuItem key={wine.title + index} {...wine} />
          })}
        </div>
      </div>

      <div className="menu-img">
        <img src={images.menu} alt="menu" />
      </div>

      <div className="menu-cocktails flex-center">
        <p className='menu-heading'>Cocktails</p>
        <div className="menu-items">
          {data.cocktails.map((cocktail, index) => {
            return <MenuItem key={cocktail.title + index} {...cocktail} />
          })}
        </div>
      </div>
    </div>
    <div style={{ marginTop: '15px' }}>
      <button type='button' className='custom-button'>View More</button>
    </div>
  </Wrapper>
);

export default SpecialMenu;


const Wrapper = styled.section`
flex-direction: column;
background: var(--color-black);
.title{
  margin-bottom: 2rem;
  text-align: center;
}
.menu {
  width: 100%;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.menu-heading {
  font-family: var(--font-base);
  font-weight: 600;
  font-size: 45px;
  line-height: 58.5px;
  letter-spacing: 0.04em;
  color: var(--color-white);
}
.menu-wine, .menu-cocktails {
  flex: 1;
  width: 100%;
  flex-direction: column;
}
.menu-img {
  width: 410px;
  margin: 0 2rem;
  img {
  width: 100%;
  height: auto;
}
}
.menu-items {
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  width: 100%;
}

@media (max-width: 1150px){
  .menu {
    flex-direction: column;
    align-items: center;
    width: 100%;
    img{
      margin: 3rem 0;
    }
  }
}
@media (max-width: 650px){
  .menu img {
      width: 100%;
      padding: 0 2rem;
    }
    .menu-heading {
      font-size: 35px;
      line-height: 48.5px;
    }
}
`