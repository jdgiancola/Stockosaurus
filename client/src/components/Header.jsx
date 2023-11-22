import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Auth from '../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Navbar bg="info" variant="dark" className="mb-4">
      <Container className="justify-content-between">
        <Navbar.Brand as={Link} to="/" className="text-dark">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
            Stockosaurus
          </h1>
        </Navbar.Brand>
        <Navbar.Text className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          Your cool new iventory system!
        </Navbar.Text>
        <Nav>
          {Auth.loggedIn() ? (
            <>
              <Button as={Link} to="/" variant="primary" className="m-2">
                Home
              </Button>
              <Button as={Link} to="/Donate" variant="primary" className="m-2">
                Donate
              </Button>
              <Button as={Link} to="/About" variant="primary" className="m-2">
                About us
              </Button>
              <Button variant="light" className="m-2" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button as={Link} to="/login" variant="primary" className="m-2">
                Login
              </Button>
              <Button as={Link} to="/signup" variant="light" className="m-2">
                Signup
              </Button>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;