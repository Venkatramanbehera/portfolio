import React from "react";
import styled from "styled-components";

const ExperienceSection = styled.section`
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

const ExperienceItem = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 60px;
  padding: 0 20px;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

const JobInfo = styled.div`
  text-align: right;
  min-width: 250px;

  ${ExperienceItem}:nth-child(even) & {
    text-align: left;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const CompanyName = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #ddd;
`;

const Duration = styled.p`
  color: #888;
  font-size: 0.9rem;
`;

const Divider = styled.div`
  width: 1px;
  background-color: #ddd;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: #fff;
    border: 2px solid #ddd;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
  }
`;

const JobDescription = styled.div`
  flex: 1;
  max-width: 500px;
  text-align: left;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 16px;
    color: #444;
    line-height: 1.6;
    position: relative;
    padding-left: 20px;

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      color: #666;
    }
  }
`;

const Experience = () => {
  return (
    <ExperienceSection>
      <SectionTitle>Experience</SectionTitle>

      <ExperienceItem>
        <JobInfo>
          <JobTitle>Senior Software Engineer</JobTitle>
          <CompanyName>Mindfire Solutions - Bhubaneswar, Odisha</CompanyName>
          <Duration>October 2022 - Present</Duration>
        </JobInfo>

        <Divider />

        <JobDescription>
          <ul>
            <li>
              Developed and launched a scalable Event Management CMS and mobile
              application, handling over 10,000 registrations per event, and
              integrated payment processing via AffiniPay, improving
              registration efficiency by 30 percent.
            </li>
            <li>
              Engineered real-time features such as a polling system with
              WebSocket and Faye, leading to a 40 percent increase in attendee
              engagement during events.
            </li>
            <li>
              Designed and implemented gamification features, dynamic photo
              galleries, and interactive modules like lead retrieval,
              contributing to a 25 percent increase in user interaction.
            </li>
            <li>
              Redesigned chat file format and implemented backward compatibility
              for search.
            </li>
          </ul>
        </JobDescription>
      </ExperienceItem>

      <ExperienceItem>
        <JobInfo>
          <JobTitle>Software Engineer</JobTitle>
          <CompanyName>
            Invincix Solutions Private Limited - Bhubaneswar, Odisha
          </CompanyName>
          <Duration>Sept 2021 - Oct 2022</Duration>
        </JobInfo>

        <Divider />

        <JobDescription>
          <ul>
            <li>
              Contributed to the development of a marketplace application,
              building reusable front-end components with ReactJS.
            </li>
            <li>
              Collaborated with cross-functional teams to gather client
              requirements, resulting in the delivery of tailored solutions that
              improved user satisfaction by 15 percent.
            </li>
            <li>
              Worked on React Native projects, writing unit tests for components
              using Jest and Enzyme, reducing bug count by 35 percent.
            </li>
            <li>
              Adhered to Agile methodology, ensuring the timely delivery of
              features, achieving 100 percent on-time delivery for the past 6
              months.
            </li>
            <li>
              Addressed SonarQube issues and enhanced application security by
              resolving critical vulnerabilities as part of DevSecOps practices.
            </li>
          </ul>
        </JobDescription>
      </ExperienceItem>
    </ExperienceSection>
  );
};

export default Experience;
