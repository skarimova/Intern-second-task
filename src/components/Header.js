import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';
import logo from "../images/лого.png";


function Header() {
  return (
    <Navbar className='justify-content-center px-4' fluid>
      <Image src={logo} style={{height: '4rem'}}/>
      <InputGroup className='rounded-pill border border-1 border-dark ms-3'>
        <InputGroup.Text className='border-0 rounded-pill bg-white'><i className="bi bi-search text-warning"/></InputGroup.Text>
        <Form.Control type="text" placeholder="Поиск..." className='border-0 rounded-pill shadow-none'/>
      </InputGroup> 
      <Button className="rounded-pill fw-bold px-5 mx-3 d-none d-sm-block border-2" variant="outline-warning" style={{color: 'black'}}>Вход</Button>
      <Button className="rounded-pill fw-bold d-none d-sm-block" variant="warning">Регистрация</Button>    
    </Navbar>
  );
}

export default Header;