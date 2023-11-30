import { Card } from "react-bootstrap";
import photo from "../images/маленькая фотка звезды.png";
import styles from "../App.scss"

function MiniCards(props) {
  return (
    <Card className={`border-0 ${styles.text}`}>
      <Card.Body className="p-0">
        <div className="d-flex">
          <div style={{width: '11vw'}}>
            <Card.Img className="w-100 img-fluid" src={photo} alt='' style={{borderRadius: 0}}/>
          </div>
          
          <div className="ms-2 lh-sm">
            <p className="mb-0">{props.name}</p>
            <small style={{color: '#FF9900'}}>{props.category}<i className="bi bi-patch-check-fill text-warning ms-1"/></small>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default MiniCards;