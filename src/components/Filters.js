import React from 'react';
import { Container, Dropdown, Form, FormControl, InputGroup, Navbar } from 'react-bootstrap';

const Filters = () => {
    return(
        <Navbar bg="light" expand="sm" className="justify-content-between">
          <Container className='px-4 px-sm-0'>
            <Dropdown className="mr-2">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-filter">
                Фильтры
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Action 1</Dropdown.Item>
                <Dropdown.Item>Action 2</Dropdown.Item>
                <Dropdown.Item>Action 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            <InputGroup className="d-sm-none rounded-pill border border-1 border-dark my-2 my-lg-0 ms-lg-3 ms-sm-2">
              <InputGroup.Text className="border-0 rounded-pill bg-white">
                <i className="bi bi-search text-warning"/>
              </InputGroup.Text>
              <FormControl type="text" placeholder="Поиск..." className="border-0 rounded-pill shadow-none" />
            </InputGroup>

            <InputGroup className="mr-2 ms-lg-3 ms-sm-2 mx-1 mx-lg-2">
              <Form.Select className='shadow-none border-1 border-dark'>
                  <option>По умолчанию</option>
                  <option>По дате</option>
                  <option>Дешевле</option>
                  <option>Дороже</option>
                  <option>По популярности</option>
              </Form.Select>
            </InputGroup>
          </Container>
        </Navbar>
    )
}

export default Filters;