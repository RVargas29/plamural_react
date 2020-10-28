import { Container, Nav, NavDropdown } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <header id="header">
          <Container>
            <nav className="nav-menu-container">
              <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                className="nav-menu"
              >
                <Nav.Item>
                  <Nav.Link href="/home">Inicio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">¿Qué es la plataforma?</Nav.Link>
                </Nav.Item>
                <NavDropdown title="Gobernanza">
                  <Nav.Link eventKey="link-2">La REAF</Nav.Link>
                  <Nav.Link eventKey="link-2">El IICA</Nav.Link>
                  <Nav.Link eventKey="link-2">Comisión Directiva</Nav.Link>
                  <Nav.Link eventKey="link-2">Grupo de Trabajo por país</Nav.Link>
                </NavDropdown>
                <NavDropdown title="Nosotras en los países">
                  <Nav.Link eventKey="link-2">Argentina</Nav.Link>
                  <Nav.Link eventKey="link-2">Brasil</Nav.Link>
                  <Nav.Link eventKey="link-2">Chile</Nav.Link>
                  <Nav.Link eventKey="link-2">Colombia</Nav.Link>
                  <Nav.Link eventKey="link-2">Paraguay</Nav.Link>
                  <Nav.Link eventKey="link-2">Uruguay</Nav.Link>
                </NavDropdown>
                <NavDropdown title="Nosotras en los países">
                  <Nav.Link eventKey="link-2">Marco Normative de MERCOSUR</Nav.Link>
                  <Nav.Link eventKey="link-2">Líneas de trabajo de género REAF</Nav.Link>
                  <Nav.Link eventKey="link-2">Foros IICA</Nav.Link>
                  <Nav.Link eventKey="link-2">Publicaciones</Nav.Link>
                  <Nav.Link eventKey="link-2">Galería</Nav.Link>
                  <Nav.Link eventKey="link-2">Uruguay</Nav.Link>
                </NavDropdown>
              </Nav>
            </nav>
          </Container>      
        </header>
      );
}

export default Header;