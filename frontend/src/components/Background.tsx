import { useRef } from "react";
import styled from "styled-components";
import backgroundImage from "./../IMG/pebbels.jpg";
import backgroundVideo from "./../IMG/2.mp4";

const Background = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  if (videoRef.current) {
    videoRef.current.playbackRate = 0.75;
  }

  return (
    <StyledBackground>
      <img src={backgroundImage} alt="" />
      <video ref={videoRef} src={backgroundVideo} muted loop autoPlay></video>
    </StyledBackground>
  );
};

const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    animation: shake 15s ease-in-out infinite alternate;
  }
  @keyframes shake {
    0% {
      transform: translate(0) scale(1.05);
    }
    20% {
      transform: translate(-0.5%, 0.5%) scale(1.05);
    }
    40% {
      transform: translate(-0.5%, -0.5%) scale(1.05);
    }
    60% {
      transform: translate(0.5%, -0.5%) scale(1.05);
    }
    80% {
      transform: translate(0.5%, 0.5%) scale(1.05);
    }
    100% {
      transform: translate(0) scale(1.05);
    }
  }
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.3;
    filter: saturate(50%);
    //mix-blend-mode: multiply;
  }
`;

export default Background;
