import React from 'react';
import { Navbar, Container, Image, InputGroup, FormControl, Button } from 'react-bootstrap';
import logo from "../images/лого.png";

const Header = () => {
    return (
        <Navbar bg="light" expand="sm" className="justify-content-between" style={{ marginLeft: '-5px', paddingRight: '0' }}>
            <Container className='px-4 px-sm-0'>
                <Navbar.Brand href="#">
                    <Image src={logo} alt="Logo" style={{ height: '40px' }} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <InputGroup className="rounded-pill border border-1 border-dark my-2 my-lg-0">
                    <InputGroup.Text className="border-0 rounded-pill bg-white">
                        <i className="bi bi-search text-warning"/>
                    </InputGroup.Text>
                    <FormControl type="text" placeholder="Поиск..." className="border-0 rounded-pill shadow-none" />
                </InputGroup>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="d-flex flex-column flex-sm-row align-items-sm-center ms-lg-3 ms-sm-2">
                        <Button className="rounded-pill fw-bold px-2 px-lg-3 mx-1 my-2 my-lg-0 border-2" variant="outline-warning" style={{ color: 'black' }}>
                            Вход
                        </Button>
                        <Button className="rounded-pill fw-bold mx-1 mx-lg-2 my-2 my-lg-0" variant="warning">
                            Регистрация
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;


