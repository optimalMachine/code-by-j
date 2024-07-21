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
          <p>A modern, responsive personal portfolio website designed to effectively showcase my skills and projects. This project demonstrates my proficiency in front-end development and understanding of contemporary web design principles.</p>

          <p>Key Technology Stack</p>
          <ul>
              <li><strong>React:</strong> For building a dynamic and interactive user interface</li>
              <li><strong>styled-components:</strong> Implementing a consistent design system with component-based styling</li>
              <li><strong>AWS (Amazon Web Services):</strong> Creating a reliable and scalable web hosting and deployment infrastructure</li>
          </ul>
          <p>Core Features</p>
          <ol>
              <li><strong>Responsive Design:</strong> Optimized user experience across various devices including mobile, tablet, and desktop</li>
              <li><strong>Dynamic Project Gallery:</strong> An interactive project showcase section utilizing React's capabilities</li>
              <li><strong>Accessibility Considerations:</strong> Designed in compliance with web accessibility guidelines to ensure usability for all users</li>
              <li><strong>Performance Optimization:</strong> Implementing fast loading speeds through image optimization, code splitting, and other techniques</li>
          </ol>

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