import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

import Auth from '../utils/auth';
import '../Styles/Header.css';


const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Navbar bg="" variant="dark" className="fullheader mb-4">
      <Container className="justify-content-between">
        <Navbar.Brand as={Link} to="/" className="text-dark">
          <h1 className="titlename m-0">
            STOCKOSAURUS
          </h1>
        </Navbar.Brand>
        <Navbar.Text className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
       
          Your cool new inventory system!
        </Navbar.Text>
      </Container>
      <Container className='justify-content-center'>
        <Nav className='navbtns'>
          {Auth.loggedIn() ? (
            <>
              <Button as={Link} to="/" variant="primary" className="m-2 btn">
                Home
              </Button>
             
              <Button as={Link} to="/About" variant="primary" className="m-2 btn">
                About us
              </Button>
              <Button variant="light" className="m-2 btn" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button as={Link} to="/login" variant="primary" className="m-2 btn">
                Login
              </Button>
              <Button as={Link} to="/signup" variant="light" className="m-2 btn">
                Signup
              </Button>
              <Button as={Link} to="/Donate" variant="primary" className="m-2 btn">
                Donate
              </Button>

            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;