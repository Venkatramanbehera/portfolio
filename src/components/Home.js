import React from 'react';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

const Section = styled.section`
  min-height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:not(:first-child) {
    padding-top: 80px;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Section id="hero">
        <Hero />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="experience">
        <Experience />
      </Section>
      <Section id="project">
        <Projects />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </HomeContainer>
  );
};

export default Home; 