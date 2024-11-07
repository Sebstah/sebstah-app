import React from "react";
import { styled } from "@mui/material";
import WomenVideo from "../../../assets/Sebstah-Women_Talking-Video.mp4";

// Styled components
const HeroWrapper = styled("div")`
  position: relative;
  width: 100vw;
  height: 100vh; /* Full viewport height */
  overflow: hidden;
  left: 50%;
  transform: translateX(-50%);
`;

const VideoBackground = styled("video")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const Overlay = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 146, 79, 0.7); /* Orange color with 70% opacity */
  mix-blend-mode: multiply;
  z-index: 2;
`;

const Wave = styled("div")`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 250px; /* Adjust the height if necessary */
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'><path fill='%23f8f9fa' fill-opacity='1' d='M0,64L60,69.3C120,75,240,85,360,112C480,139,600,181,720,165.3C840,149,960,75,1080,48C1200,21,1320,43,1380,53.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'></path></svg>");
  background-size: cover;
  z-index: 3;
`;

const TextBox = styled("div")`
  position: absolute;
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Adjust to center the text box */
  z-index: 4;
  color: white;
  text-align: center;
  padding: 20px;
  max-width: 600px; /* Adjust the width as needed */
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background for better readability */
  border-radius: 10px; /* Rounded corners */
`;

const HeroSection: React.FC = () => {
  return (
    <HeroWrapper>
      <VideoBackground autoPlay loop muted>
        <source src={WomenVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Overlay />
      <TextBox>
        <h1>Web agency with expertise in websites and SEO Solutions</h1>
        <p>Crafting Digital Success Together</p>
      </TextBox>
      <Wave />
    </HeroWrapper>
  );
};

export default HeroSection;
