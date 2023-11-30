import photo from "../images/фотка.png";
import MiniCards from './MiniCard';
import { Button, Card } from 'react-bootstrap';

function Cards(props) {
    const { post } = props;

    return (
      <Card border='secondary' className='p-2 mb-4' style={{borderRadius: 0}}>
          <Card.Img src={photo} alt='' style={{borderRadius: 0}}/>

          <Card.Body className='p-0'  style={{fontSize: '1.8vw'}}>
            <Card.Title className='mt-2 mb-2 fw-bold' style={{fontSize: '1.8vw'}}>{post.title}</Card.Title>
            
            <MiniCards name={post.name} category={post.category}/>

            <div className="d-flex justify-content-between mb-2 mt-3">
              <p className="mb-2 mb-md-0 fs-5.5">Редкость:</p>
              <p className='fs-6.5 border border-2 border-warning px-3 px-md-1 px-lg-3 fs-md-6 pb-1 rounded'>{post.rarity}</p>
            </div>

            <div className="d-flex justify-content-between">
              <p className="fs-5.5">Цена:</p>
              <p className='fs-6.5 bg-warning px-4 rounded py-1'>от<span className='ms-1'/>{post.price}<i className="bi bi-currency-dollar"/></p>
            </div>

            <Button className="btn btn-warning w-100 mt-2 pb-2" style={{fontSize: '2vw'}}>Купить</Button>
          </Card.Body>
      </Card>
    )
}

export default Cards;

