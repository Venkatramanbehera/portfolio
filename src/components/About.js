import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  padding: 80px 0;
  max-width: 1200px;
  margin: 0 auto;
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

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 40px;
  align-items: start;
  padding: 0 20px;
`;

const TextContent = styled.div`
  p {
    margin-bottom: 24px;
    line-height: 1.8;
    color: #333;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: #ddd;
  border-radius: 8px;
`;

const About = () => {
  return (
    <AboutSection>
      <SectionTitle>About Me</SectionTitle>
      <ContentWrapper>
        <TextContent>
          <p>
            Dedicated Ruby on Rails Engineer with 3+ years of hands-on
            experience in designing, developing, and deploying scalable web and
            mobile applications. Proficient in Ruby on Rails, React, and React
            Native, with a strong focus on delivering user-centric solutions.
            Adept at collaborating in agile teams and translating complex
            requirements into robust applications.
          </p>
          <p>
            Passionate about clean code principles, test-driven development
            (TDD), and building applications that offer seamless user
            experiences. Experienced in optimizing application performance and
            ensuring high-quality, maintainable code.
          </p>
          <p>
            Skilled in integrating third-party APIs, managing databases, and
            deploying applications using cloud services such as AWS.
            Continuously exploring new technologies and best practices to stay
            ahead in the ever-evolving tech landscape.
          </p>
          <p>
            Outside of work, I enjoy contributing to open-source projects,
            participating in hackathons, and mentoring aspiring developers to
            help them grow in their careers.
          </p>
        </TextContent>
        <ImageContainer />
      </ContentWrapper>
    </AboutSection>
  );
};

export default About;
