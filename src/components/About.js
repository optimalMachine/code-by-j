import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 80px 0;
  background-color: #f9f9f9;
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
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const SkillItem = styled.li`
  font-size: 1.4rem;
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Title>About Me</Title>
        <Content>
          <TextContent>
            <Paragraph>
              안녕하세요, 저는 웹 개발자이자 디자이너인 J입니다. 사용자 중심의 디자인과 
              효율적인 코드 작성에 열정을 가지고 있습니다. 3년간의 프리랜서 경험을 통해 
              다양한 프로젝트를 수행했으며, 항상 새로운 기술을 배우고 적용하는 것을 즐깁니다.
            </Paragraph>
            <Paragraph>
              제 목표는 사용자 경험을 개선하고 비즈니스 가치를 창출하는 웹 솔루션을 제공하는 것입니다. 
              팀 협업을 중요하게 생각하며, 열린 마인드로 소통하고 문제를 해결하는 것을 좋아합니다.
            </Paragraph>
            <SkillsList>
              <SkillItem>React</SkillItem>
              <SkillItem>JavaScript</SkillItem>
              <SkillItem>HTML/CSS</SkillItem>
              <SkillItem>Node.js</SkillItem>
              <SkillItem>UI/UX Design</SkillItem>
            </SkillsList>
          </TextContent>
          <ImageContainer>
            <ProfileImage src="/path-to-your-image.jpg" alt="Profile" />
          </ImageContainer>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About;