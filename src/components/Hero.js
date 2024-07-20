import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  padding-left: 10%;
  background-color: #f5f5f5; // 밝은 회색 배경
`;

const HeroContent = styled.div`
  text-align: left;
`;

const HeroTitle = styled.h1`
  font-size: 6rem;
  margin-bottom: 1.5rem;
  color: #333; // 어두운 회색 텍스트 색상
  font-weight: 700;
`;

const HeroSubtitle = styled.p`
  font-size: 2.8rem;
  color: #666; // 중간 톤의 회색 텍스트 색상
  font-weight: 300;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>Code By J</HeroTitle>
        <HeroSubtitle>Web Developer & Designer</HeroSubtitle>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;