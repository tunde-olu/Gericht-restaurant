import React from 'react';
import styled from 'styled-components';


const MenuItem = ({ title, price, tags }) => {
  return <Wrapper className='menu-item'>
    <div className="head">
      <div className="name">
        <p className="p-cormorant" style={{ color: '#dcca87' }}>{title}</p>
      </div>

      <div className='dash' />

      <div className="price">
        <p className="p-cormorant">{price}</p>
      </div>
    </div>
    <div className="sub">
      <p className="p-opensans" style={{ color: '#aaa' }}>{tags}</p>
    </div>
  </Wrapper>
}

export default MenuItem;

const Wrapper = styled.article`
width: 100%;
margin: 1rem 0;
display: flex;
flex-direction: column;
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sub {
  width: 100%;
  margin-top: 0.2rem;
}
.name {
  flex: 1;
}
.dash {
  width: 90px;
  height: 1px;
  background: var(--color-golden);
  margin: 0 1rem;
}
.price {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
`