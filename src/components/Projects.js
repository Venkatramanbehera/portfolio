import React from "react";
import styled from "styled-components";

const ProjectSection = styled.section`
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

const FeaturedProjectContainer = styled.div`
  margin-bottom: 100px;
`;

const FeaturedProject = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 60px;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

const ProjectImage = styled.div`
  flex: 1;
  aspect-ratio: 16/9;
  background-color: #ddd;
  border-radius: 8px;
`;

const ProjectContent = styled.div`
  flex: 1;
  text-align: left;
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #ddd;
`;

const TechStack = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  span {
    color: #666;
    font-size: 0.9rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: #333;
    text-decoration: none;

    &:hover {
      color: #666;
    }
  }
`;

const OtherProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  padding: 0 20px;
`;

const SmallProject = styled.div`
  display: flex;
  gap: 20px;
`;

const SmallProjectImage = styled.div`
  width: 120px;
  height: 120px;
  background-color: #ddd;
  border-radius: 8px;
`;

const SmallProjectContent = styled.div`
  flex: 1;
  text-align: left;
`;

const SmallProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const SmallProjectDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ddd;
`;

const Projects = () => {
  return (
    <ProjectSection>
      <FeaturedProjectContainer>
        <SectionTitle>Featured Project</SectionTitle>

        <FeaturedProject>
          <ProjectImage />
          <ProjectContent>
            <ProjectTitle>Lupin Lyfe App</ProjectTitle>
            <ProjectDescription>
              <ul>
                <li>
                  A health monitoring application that integrates with physical
                  devices to track heart rate, blood pressure, BMI, and SpO2.
                  Users can book appointments and consult with doctors, while
                  doctors can monitor patient health metrics in real time.
                </li>
                <li>
                  Designed UI based on Figma designs and implemented API
                  integration for seamless front-end functionality.
                </li>
                <li>
                  Optimized performance through code refactoring, wrote unit
                  tests, and collaborated with the DevSecOps team to resolve
                  security issues.
                </li>
              </ul>
            </ProjectDescription>
            <TechStack>
              <span>React Native</span>
              <span>Typescript</span>
              <span>Redux</span>
              <span>Ruby on Rails</span>
              <span>AWS</span>
            </TechStack>
            <ProjectLinks>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-code-branch"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </ProjectLinks>
          </ProjectContent>
        </FeaturedProject>

        <FeaturedProject>
          <ProjectImage />
          <ProjectContent>
            <ProjectTitle>
              Event Management Application (EventKaddy.com)
            </ProjectTitle>
            <ProjectDescription>
              <ul>
                <li>
                  Developed and maintained a CMS and mobile app to streamline
                  event operations for single and multi-event setups.
                </li>
                <li>
                  Facilitated attendee, exhibitor, and speaker registration
                  workflows, integrating secure payment processing via AffiniPay
                  and third-party APIs such as Cvent and YourMemberships.
                </li>
                <li>
                  Designed modules for lead retrieval, polling, games, QR code
                  scanning, and dynamic photo galleries with gamification
                  elements.
                </li>
                <li>
                  Built a dynamic Photo Gallery feature allowing attendees to
                  upload, comment on, and share photos, with gamification
                  elements like points and badges for contributions.
                </li>
                <li>
                  Incorporated gamification features to allow attendees to earn
                  points for activities, redeemable for products within the
                  platform.
                </li>
                <li>
                  Integrated secure payment processing, supported CE certificate
                  generation, and optimized application scalability and
                  performance.
                </li>
              </ul>
            </ProjectDescription>
            <TechStack>
              <span>React</span>
              <span>React Native</span>
              <span>Redux</span>
              <span>Ruby</span>
              <span>Ruby on Rails</span>
              <span>Payment APIs</span>
              <span>Third-party APIs</span>
              <span>AWS</span>
            </TechStack>
            <ProjectLinks>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-code-branch"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </ProjectLinks>
          </ProjectContent>
        </FeaturedProject>
      </FeaturedProjectContainer>

      <SectionTitle>Other Project</SectionTitle>
      <OtherProjectsGrid>
        {[1, 2, 3, 4].map((item) => (
          <SmallProject key={item}>
            <SmallProjectImage />
            <SmallProjectContent>
              <SmallProjectTitle>Project Name</SmallProjectTitle>
              <SmallProjectDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent sit amet vestibulum felis.
              </SmallProjectDescription>
              <TechStack>
                <span>HTML</span>
                <span>CSS</span>
                <span>JS</span>
              </TechStack>
              <ProjectLinks>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code-branch"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </ProjectLinks>
            </SmallProjectContent>
          </SmallProject>
        ))}
      </OtherProjectsGrid>
    </ProjectSection>
  );
};

export default Projects;
