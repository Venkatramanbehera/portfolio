import React from "react";
import styled from "styled-components";

const HeroSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0) translateX(-50%);
    }
    40% {
      transform: translateY(-30px) translateX(-50%);
    }
    60% {
      transform: translateY(-15px) translateX(-50%);
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Title>Hi, I'm</Title>
      <Title>Venkat Raman Behera</Title>
      <Subtitle>I design and build things.</Subtitle>
      <ScrollIndicator>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 13L12 18L17 13"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 7L12 12L17 7"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
