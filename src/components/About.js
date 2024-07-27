import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 80px 0;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 30px;
  text-align: center;
  color: ${({ theme }) => theme.titleColor};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  flex: 1;
  margin-right: 40px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 30px;
  }
`;

const Paragraph = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSecondary};
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const SkillItem = styled.li`
  font-size: 1.4rem;
  background-color: ${({ theme }) => theme.skillBackground};
  color: ${({ theme }) => theme.skillText};
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 200px; 
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 150px; 
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px ${({ theme }) => theme.shadowColor};
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Title>About Me</Title>
        <Content>
          <TextContent>
            <Paragraph>
              Hello, I'm Jay (Jiuk), a versatile professional with a passion for web development and AI Engineering. My journey has led me through various fields, allowing me to accumulate a diverse set of skills and perspectives. From web design to sales, and now to coding, each experience has shaped my unique approach to problem-solving and creativity.
            </Paragraph>
            <Paragraph>
              My goal is to deliver web solutions that enhance user experience and create business value. I value team collaboration and enjoy communicating with an open mind to solve problems effectively.
            </Paragraph>
            <Paragraph>
              When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or experimenting with creative coding concepts.
            </Paragraph>
            <SkillsList>
              <SkillItem>React</SkillItem>
              <SkillItem>JavaScript</SkillItem>
              <SkillItem>HTML/CSS</SkillItem>
              <SkillItem>Node.js</SkillItem>
              <SkillItem>OpenAI</SkillItem>
              <SkillItem>Python</SkillItem>
              <SkillItem>Flask</SkillItem>
              <SkillItem>Solidity</SkillItem>
            </SkillsList>
          </TextContent>
          <ImageContainer>
            <ProfileImage src="/images/Jprofile.jpg" alt="Jay" />
          </ImageContainer>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About;