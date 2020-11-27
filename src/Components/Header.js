import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import './Header.css';

const Header = () => {
  var currentPath = window.location.pathname
    if(currentPath == '/') {
      return (
        <header id="header" className="header-fixed">
          <Container>
            <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="main-navbar">
                <Nav className="m-auto">
                  <Nav.Link href="/">Inicio</Nav.Link>
                  <Link className="nav-link" to="anchor-about" smooth={true} href="/">¿Qué es la plataforma?</Link>
                  <Nav.Link href="/gobernanza#anchor-gobernanza">Gobernanza</Nav.Link>
                  <Link className="nav-link" to="anchor-features" smooth={true} href="/">Políticas Públicas</Link>
                  <Link className="nav-link" to="anchor-event-list" smooth={true} href="/">Eventos</Link>
                  <Link className="nav-link" to="anchor-video-list" smooth={true} href="/">Mujeres emprendedoras</Link>           
                  <Nav.Link href="/repository#anchor-repo-list">Biblioteca</Nav.Link>                  
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>      
        </header>
      );
    }

    return (
      <header id="header" className="header-fixed">
        <Container>
          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="main-navbar">
              <Nav className="m-auto">
                <Nav.Link href="/">Inicio</Nav.Link>  
                <Nav.Link href="/#anchor-about">¿Qué es la plataforma?</Nav.Link>
                <Nav.Link href="/gobernanza#anchor-gobernanza">Gobernanza</Nav.Link>
                <Nav.Link href="/#anchor-features">Políticas Públicas</Nav.Link>
                <Nav.Link href="/#anchor-event-list">Eventos</Nav.Link>
                <Nav.Link href="/#anchor-video-list">Mujeres emprendedoras</Nav.Link>       
                <Nav.Link href="/repository#anchor-repo-list">Biblioteca</Nav.Link>                  
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>      
      </header>
    );
}

export default Header;