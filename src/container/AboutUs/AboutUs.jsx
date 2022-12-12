import React from 'react';
import styled from 'styled-components';
import { images } from '../../constants';


const AboutUs = () => (
  <Wrapper className='app-bg flex-center section-padding' id='about'>
    <div className="overlay flex-center">
      <img src={images.G} alt="G letter" />
    </div>

    <div className="content flex-center">
      <div className="content-about">
        <h1 className="headtext-cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon-img' />
        <p className="p-opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom-button'>Know More</button>
      </div>

      <div className="content-knife flex-center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="content-history">
        <h1 className="headtext-cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon-img' />
        <p className="p-opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom-button'>Know More</button>
      </div>
    </div>
  </Wrapper>
);

export default AboutUs;

const Wrapper = styled.section`
position: relative;
.overlay {
  position: absolute;
  inset: 0;
  img {
  width: 391px;
  height: 415px;
  z-index: 0;
  }
}
.content {
  width: 100%;
  z-index: 2;
}
.content-about {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  text-align: right;
  p {
    margin: 2rem 0;
    color: var(--color-grey);
  }
}
.content-knife{
  margin: 2rem 4rem;
  img {
    height: 910px;
  }
}
.content-history {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
  p {
    margin: 2rem 0;
    color: var(--color-grey);
  }
}
@media (min-width: 1080px){
  .content-knife img {
        height: 1110px;
    }

    .content-about p,
    .content-history p {
        margin: 4rem 0;
    }
}
@media (max-width: 900px){
.content{
  flex-direction: column;
}
.content-knife {
  margin: 4rem 0;
}
}
@media (max-width: 650px){
.overlay img {
  width: 80%;
  height: 320px;
}
}
`