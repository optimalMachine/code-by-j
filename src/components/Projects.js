import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 80px 0;
  background-color: ${({ theme }) => theme.projectsBackground};
  transition: background-color 0.3s ease;
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
  color: ${({ theme }) => theme.titleColor};
  transition: color 0.3s ease;
`;

const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px ${({ theme }) => theme.shadowColor};
  transition: all 0.3s ease;
`;

const ProjectTitle = styled.h3`
  font-size: 2.4rem;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.titleColor};
  transition: color 0.3s ease;
`;

const ProjectDescription = styled.div`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 20px;
  transition: color 0.3s ease;

  p, ul, ol {
    margin-bottom: 15px;
  }

  ul, ol {
    padding-left: 20px;
  }

  strong {
    color: ${({ theme }) => theme.text};
  }
`;

const ProjectLink = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.6rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverBackground};
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

          <h3>Key Technology Stack</h3>
          <ul>
              <li><strong>React:</strong> For building a dynamic and interactive user interface.</li>
              <li><strong>Styled-components:</strong> Implementing a consistent design system with component-based styling.</li>
              <li><strong>AWS (Amazon Web Services):</strong> Creating a reliable and scalable web hosting and deployment infrastructure.</li>
          </ul>
          <h3>Core Features</h3>
          <ol>
              <li><strong>Responsive Design:</strong> Optimized user experience across various devices including mobile, tablet, and desktop.</li>
              <li><strong>Dark Mode:</strong> Implemented a toggleable dark/light theme for improved readability and reduced eye strain in different lighting conditions.</li>

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
      <ProjectCard>
      <ProjectTitle>Ethereal Arbitrage: Flash Loan - Blockchain Project</ProjectTitle>
      <ProjectDescription>
      In the shadows of the blockchain, there exists a phenomenon known as the "flash loan" - a fleeting moment where wealth appears from the void, only to vanish in the blink of an eye.
      </ProjectDescription>
      <ProjectLink href="https://github.com/optimalMachine/flash-loan" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </ProjectLink>
      </ProjectCard>
        {/* will be updated in the near future*/}
      </Container>
    </ProjectsSection>
  );
};

export default Projects;