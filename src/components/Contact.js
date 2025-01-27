import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 80px 0;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 60px;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 200px;
    height: 1px;
    background-color: #ddd;
  }

  &::before {
    right: calc(50% + 120px);
  }

  &::after {
    left: calc(50% + 120px);
  }
`;

const ContactText = styled.p`
  font-size: 1.2rem;
  color: #333;
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.6;
`;

const ContactButton = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  background-color: transparent;
  border: 1px solid #333;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 60px;

  &:hover {
    background-color: #333;
    color: white;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;

  a {
    color: #333;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #666;
    }
  }
`;

const Copyright = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const Contact = () => {
  const handleMessageClick = () => {
    window.location.href = "mailto:venkatramanbehera1@gmail.com";
  };

  return (
    <ContactSection>
      <SectionTitle>Contact</SectionTitle>

      <ContactText>
        I am currently seeking employment, and I would appreciate it if you
        could contact me with any available job opportunities.
      </ContactText>

      <ContactButton onClick={handleMessageClick}>Write Message</ContactButton>

      <SocialLinks>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </SocialLinks>

      <Copyright>Venkat Raman Behera - 2025</Copyright>
    </ContactSection>
  );
};

export default Contact;
