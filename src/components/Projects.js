import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 80px 0;
  background-color: #f5f5f5; 
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 40px;
  text-align: center;
  color: #333;
`;

const ProjectCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProjectTitle = styled.h3`
  font-size: 2.4rem;
  margin-bottom: 15px;
  color: #333;
`;

const ProjectDescription = styled.p`
  font-size: 1.6rem;
  color: #666;
  margin-bottom: 20px;
`;

const ProjectLink = styled.a`
  display: inline-block;
  background-color: #007bff;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.6rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Container>
        <Title>Projects</Title>
        <ProjectCard>
          <ProjectTitle>Personal Portfolio Website</ProjectTitle>
          <ProjectDescription>
                A responsive personal portfolio website built using React and styled-components. 
            This project showcases my skills in front-end development and modern web design principles.

          </ProjectDescription>
          <ProjectLink href="https://github.com/optimalMachine/code-by-j" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </ProjectLink>
        </ProjectCard>
        <ProjectCard>

        <ProjectTitle>ChatSleuth: The AI Detective Adventure</ProjectTitle>
        <ProjectDescription>
        ChatSleuth is an innovative web-based detective game where players become virtual sleuths, 
        guided by an AI-powered chatbot. This game blends the intrigue of classic mystery novels with cutting-edge 
        conversational AI technology, offering a unique and immersive detective experience. It's currently a work in progress, with plans to add more interactive features and optimize performance.
        </ProjectDescription>
        <ProjectLink href="https://github.com/optimalMachine/chatsleuth/tree/main" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </ProjectLink>
      </ProjectCard>
        {/* will be updated in the near future*/}
      </Container>
    </ProjectsSection>
  );
};

export default Projects;