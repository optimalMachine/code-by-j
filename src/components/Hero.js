import React from 'react';
import styled from 'styled-components';


const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  padding-left: 10%;
  background-color: #f8f9fa;
`;

const HeroContent = styled.div`
  text-align: left;
`;

const HeroTitle = styled.h1`
  font-size: 60rem; 
  margin-bottom: 1.5rem; 
  color: #333;
  font-weight: 700; 
`;

const HeroSubtitle = styled.p`
  font-size: 2.8rem; 
  color: #555; 
  font-weight: 300; 
`;

const Hero = () => {
  return (
    <HeroSection>
      <div>
        <h1>Code By J</h1>
        <p>Web Developer & Designer</p>
      </div>
    </HeroSection>
  );
};

export default Hero;