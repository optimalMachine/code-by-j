import React, { useState } from 'react';
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1.6rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.textColor};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primaryColor};
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1.6rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.textColor};
  transition: all 0.3s ease;
  min-height: 150px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primaryColor};
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverBackground};
  }
`;

const StatusMessage = styled.p`
  margin-top: 20px;
  font-size: 1.6rem;
  text-align: center;
  color: ${({ success, theme }) => success ? theme.successColor : theme.errorColor};
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
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
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    try {
      const response = await fetch("https://formspree.io/f/mvgpzzkl", {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus("Thanks for your submission!");
        form.reset();
      } else {
        setStatus("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      setStatus("Oops! There was a problem submitting your form");
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <Title>Get in Touch</Title>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Your Name" required />
          <Input type="email" name="email" placeholder="Your Email" required />
          <TextArea name="message" placeholder="Your Message" required />
          <SubmitButton type="submit">Send Message</SubmitButton>
          {status && <StatusMessage success={status.includes('Thanks')}>{status}</StatusMessage>}
        </Form>
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