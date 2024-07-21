import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  padding-left: 10%;
  background-color: ${({ theme }) => theme.heroBackground};
  transition: all 0.3s ease;
`;

const HeroContent = styled.div`
  text-align: left;
`;

const HeroTitle = styled.h1`
  font-size: 6rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.heroTitleColor};
  font-weight: 700;
  transition: color 0.3s ease;
`;

const HeroSubtitle = styled.p`
  font-size: 2.8rem;
  color: ${({ theme }) => theme.heroSubtitleColor};
  font-weight: 300;
  transition: color 0.3s ease;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>Code By J</HeroTitle>
        <HeroSubtitle>Web Developer & AI Engineer</HeroSubtitle>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;