import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  max-width: 500px;
  margin-bottom: 2rem;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: #ccc;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Tech = styled.span`
  color: #666;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectCard = ({ title, description, technologies }) => {
  return (
    <Card>
      <ProjectImage />
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <TechStack>
        {technologies.map((tech, index) => (
          <Tech key={index}>{tech}</Tech>
        ))}
      </TechStack>
      <Links>
        <i className="github-icon"></i>
        <i className="external-link-icon"></i>
      </Links>
    </Card>
  );
};

export default ProjectCard; 