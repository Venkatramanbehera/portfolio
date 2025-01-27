import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: black;
  border: 1px solid black;
  padding: 0.5rem 1rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: ${(props) => (props.primary ? "none" : "1px solid black")};
  background: ${(props) => (props.primary ? "black" : "white")};
  color: ${(props) => (props.primary ? "white" : "black")};
  cursor: pointer;
  border-radius: 4px;
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">V</Logo>
      <NavLinks>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/experience">experience</NavLink>
        <NavLink to="/project">project</NavLink>
        <NavLink to="/contact">contact</NavLink>
      </NavLinks>
      <ButtonGroup>
        <Button>Resume</Button>
        <Button primary>Hire Me</Button>
      </ButtonGroup>
    </Nav>
  );
};

export default Navbar;
