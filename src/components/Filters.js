import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function Filters() {
    return(
        <Form className='d-flex px-4 pt-3'>
            <Dropdown>
                <Dropdown.Toggle variant="outline-dark">
                    Фильтры
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Another action</Dropdown.Item>
                    <Dropdown.Item>Something else</Dropdown.Item>                    
                </Dropdown.Menu>
            </Dropdown>
            <InputGroup className='rounded-pill border border-1 border-dark mx-3 pe-5'>
                <InputGroup.Text className='border-0 rounded-pill bg-white'><i className="bi bi-search text-warning"/></InputGroup.Text>
                <Form.Control type="text" placeholder="Поиск..." className='border-0 shadow-none'/>
            </InputGroup>
            <Form.Select className='shadow-none border-1 border-dark' style={{width: '20vw'}}>
                <option>По умолчанию</option>
                <option>По дате</option>
                <option>Дешевле</option>
                <option>Дороже</option>
                <option>По популярности</option>
            </Form.Select>
        </Form>
    )
}

export default Filters;