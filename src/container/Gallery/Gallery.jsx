import React from 'react';
import { images, data } from '../../constants';
import { SubHeading } from '../../components';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import styled from 'styled-components';


const imagess = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  const scrollRef = React.useRef(null)
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300
    }
  }
  return (
    <Wrapper className='gallery flex-center'>
      <div className="content">
        <SubHeading title='Instagram' />
        <h1 className="headtext-cormorant">Photo Gallery</h1>
        <p className="p-opensans" style={{ color: '#aaa', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type='button' className='custom-button'>View More</button>
      </div>
      <div className="images">
        <div className="images-container" ref={scrollRef}>
          {imagess.map((image, index) => {
            return <div className='images-card flex-center' key={`gallery_images-${index + 1}`}>
              <img src={image} alt="gallery" />
              <BsInstagram className='image-icon' />
            </div>
          })}
        </div>
        <div className="images-arrows">
          <BsArrowLeftShort className='arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </Wrapper>
  );
}

export default Gallery;

const Wrapper = styled.section`
display: flex;
background: var(--color-black);
padding: 4rem 0 4rem 6rem;
.content {
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 500px;
  padding-right: 2rem;
  button {
    margin-top: 1rem;
  }
}
.images {
  flex: 1;
  display: flex;
  max-width: 50%;
  position: relative;
}
.images-container {
  display: flex;
  width: max-content;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar{
    display: none;
  }
}
.images-card {
  position: relative;
  min-width: 301px;
  height: 447px;
  margin-right: 2rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s ease;
  }
  :hover img {
    opacity: 0.35;
  }
  :hover .image-icon {
    opacity: 1;
  }
}
.image-icon {
  position: absolute;
  color: #fff;
  font-size: 2rem;
  opacity: 0.5;
  transition: 0.5 ease;
  cursor: pointer;
  opacity: 0;
}
.images-arrows {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  .arrow-icon {
    color: var(--color-golden);
    cursor: pointer;
    background-color: var(--color-black);
    border-radius: 5px;
    font-size: 25px;
  }
}
@media (min-width: 2000px){
  .content {
    min-width: 100px;
    padding-right: 4rem;
  }
  .images-card{
    min-width: 400px;
    height: 550px;
  }
}
@media (max-width: 1150px){
  flex-direction: column;
  .images{
    max-width: 100%;
    margin: 5rem 0;
  }
}
@media (max-width: 850px){
  padding: 4rem 0 4rem 4rem;
}
@media (max-width: 650px){
  .content {
    min-width: 100%;
  }
  .images-card {
    min-width: 240px;
    height: 320px;
  }
}
`