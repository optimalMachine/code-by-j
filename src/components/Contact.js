import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 80px 0;
  background-color: ${({ theme }) => theme.contactBackground};
  transition: background-color 0.3s ease;
`;

const Container = styled.div`
  max-width: 800px;
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

const ContactInfo = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const ContactItem = styled.p`
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.textColor};
  transition: color 0.3s ease;
`;

const EmailLink = styled.a`
  color: ${({ theme }) => theme.linkColor};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.linkHoverColor};
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialLink = styled.a`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.iconColor};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.iconHoverColor};
  }
`;

const Contact = () => {
    const email = "binarybard10101@gmail.com";
    return (
        <ContactSection id="contact">
        <Container>
            <Title>Get in Touch</Title>
            <ContactInfo>
                <ContactItem>
                    Email: <EmailLink target="_blank" href={`mailto:${email}`}>{email}</EmailLink>
                </ContactItem>
            </ContactInfo>
            <SocialLinks>
            <SocialLink href="https://github.com/optimalMachine" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/jiuk-choi-3b1972167/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
            </SocialLink>
            </SocialLinks>
        </Container>
        </ContactSection>
    );
};

export default Contact;