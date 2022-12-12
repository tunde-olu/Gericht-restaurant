import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import styled, { css } from 'styled-components';
import { meal } from '../../constants';


const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = useRef()
  const handleVideo = () => {
    setPlayVideo((oldState) => !oldState)
    if (playVideo) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }

  return (
    <Wrapper playVideo={playVideo} className='video'>
      <video src={meal} ref={vidRef} type='video/mp4' controls={false} loop muted />
      <div className="video-overlay flex-center">
        <div className="circle flex-center" onClick={handleVideo}>
          {playVideo ? <BsPauseFill color='#fff' fontSize={30} /> : <BsFillPlayFill color='#fff' fontSize={30} />}
        </div>
      </div>
    </Wrapper>
  )
}

export default Intro;

const Wrapper = styled.section`
height: 100vh;
position: relative;
video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.video-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5);
}
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid var(--color-golden);
  cursor: pointer;
}
@media (min-width: 1280px){
  ${({ playVideo }) => playVideo && css`
  .circle {
    display: none;
  }
  :hover .circle {
    display: flex;
  }
  `}
}
`