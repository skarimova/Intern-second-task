import Pagination from 'react-bootstrap/Pagination';

function Paginations() {
  return (
    <Pagination className='d-flex justify-content-center'> 
      <Pagination.First/>
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Last />
    </Pagination>
  );
}

export default Paginations;