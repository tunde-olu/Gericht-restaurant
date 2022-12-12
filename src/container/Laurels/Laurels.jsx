import React from 'react';
import { images, data } from '../../constants';
import { SubHeading } from '../../components';

import styled from 'styled-components';



const AwardCard = ({ imgUrl, title, subtitle }) => {
  return <div className="laurels-awards-card">
    <img src={imgUrl} alt="award" />
    <div className="laurels-awards-card-content">
      <p className="p-cormorant" style={{ color: '#dcca87' }}>{title}</p>
      <p className="p-cormorant">{subtitle}</p>
    </div>
  </div>
}

const Laurels = () => (
  <Wrapper className='app-bg app-wrapper section-padding' id='awards'>
    <div className="app-wrapper-info">
      <SubHeading title='Awards & recognition' />
      <h1 className='headtext-cormorant'>Our Laurels</h1>
      <div className="laurels-awards">
        {data.awards.map((award) => <AwardCard {...award} key={award.title} />)}
      </div>
    </div>
    <div className="app-wrapper-img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </Wrapper>
);

export default Laurels;

const Wrapper = styled.section`
.laurels-awards {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3rem;
  flex-wrap: wrap;
}
.laurels-awards-card {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 1rem;
  min-width: 230px;
  margin: 1rem;
  img {
    width: 50px;
    height: 50px;
  }
  &-content {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }
}


@media (max-width: 450px){
  .laurels-awards-card {
    min-width: 100%;
    margin: 1rem 0;
  }
}
`