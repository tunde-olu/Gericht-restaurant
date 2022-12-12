import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import styled from 'styled-components';

const Chef = () => (
  <Wrapper className='app-bg app-wrapper section-padding'>
    <div className='app-wrapper-img app-wrapper-img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app-wrapper-info">
      <SubHeading title="Chef's Word" />
      <h1 className='headtext-cormorant'>What we believe in</h1>
      <div className="chef-content">
        <div className="chef-content-quote">
          <img src={images.quote} alt="quote" />
          <p className="p-opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit</p>
        </div>
        <p className="p-opensans">auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
      </div>
      <div className="chef-sign">
        <p>Kevin Luo</p>
        <p className='p-opensans'>Chef & Founder</p>
        <img src={images.sign} alt="signature" />
      </div>
    </div>
  </Wrapper>
);

export default Chef;

const Wrapper = styled.section`
.chef-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5rem;
}
.chef-content-quote {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  img{
    width: 47px;
    height: 40px;
    margin: 0 1rem 1rem 0;
  }
}
.chef-sign {
  width: 100%;
  margin-top: 2rem;
  p:first-child {
    font-family: var(--font-base);
    font-weight: 400;
    font-size: 32px;
    line-height: 41px;
    letter-spacing: 0.04em;
    color: var(--color-golden);
  }
  img {
    width: 250px;
    margin-top: 3rem;
  }
}
@media (max-width: 2000px){
  .chef-sign img {
    width: 370px;
  }
}
@media (max-width: 450px){
  .chef-sign img {
    width: 80%;
  }
}
`