import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <header id="header" className="header-fixed">
          <Container>
            <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="main-navbar">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Inicio</Nav.Link>
                  <Nav.Link href="/#about">¿Qué es la plataforma?</Nav.Link>
                  <Nav.Link href="/gobernanza">Gobernanza</Nav.Link>
                  <Nav.Link href="/#features">Políticas Públicas</Nav.Link>  
                  <Nav.Link href="#event-list">Eventos</Nav.Link>
                  <Nav.Link href="/videos">Mujeres emprendedoras</Nav.Link>                
                  <Nav.Link href="/repository">Biblioteca</Nav.Link>                  
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>      
        </header>
      );
}

export default Header;