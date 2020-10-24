import React, { useContext } from 'react';
import { Form, FormControl, Nav, Navbar, Button, Container } from 'react-bootstrap';
import { MyContext } from '../../App';
import logo from '../../Logo.png';

const Header = (props) => {
    let textColor = {
        color: props.color
    };
    const [loggedInUser, setLoggedInUser] = useContext(MyContext);
    return (
        <Container>
            <Navbar>
                <Navbar.Brand href="#home">
                <img
                            src={logo}
                            width="95"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                />
                </Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search your destination" className="mr-sm-2" />
                    <Button variant="outline-light font-weight-bold text-light">Search</Button>
                </Form>
                <Nav className="ml-auto">
                    <Nav.Link style={textColor} className="mx-3 font-weight-bold" href="#home">News</Nav.Link>
                    <Nav.Link style={textColor} className="mx-3 font-weight-bold" href="#home">Destination</Nav.Link>
                    <Nav.Link style={textColor} className="mx-3 font-weight-bold" href="#features">Blog</Nav.Link>
                    <Nav.Link style={textColor} className="mx-3 font-weight-bold" href="#pricing">Contact</Nav.Link>
                    {
                        props.login ? <Button variant="warning">Log in</Button> : <span  className="font-weight-bold my-auto">{loggedInUser.name}</span>
                        
                    }
                    
                    
                    
                </Nav>
            </Navbar>
        </Container>
    );
};

export default Header;