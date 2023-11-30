import { Col, Container, Row } from "react-bootstrap";
import Cards from "./Card";

const featuredPosts = [
    { id: 'p1',
      title: 'Без слов',
      name: 'Настя Ивлеева Вячеславовна',
      description: 'Коробка с посудами',
      category: 'проверено',
      rarity: 'уникальная',
      price: '500',
    },
    { id: 'p2',
      title: 'Без слов',
      name: 'Настя Ивлеева Вячеславовна',
      description: 'Коробка с посудами',
      category: 'проверено',
      rarity: 'уникальная',
      price: '500',
    },
    { id: 'p3',
      title: 'Без слов',
      name: 'Настя Ивлеева Вячеславовна',
      description: 'Коробка с посудами',
      category: 'проверено',
      rarity: 'уникальная',
      price: '500',
    },
    { id: 'p4',
      title: 'Без слов',
      name: 'Настя Ивлеева Вячеславовна',
      description: 'Коробка с посудами',
      category: 'проверено',
      rarity: 'уникальная',
      price: '500',
    },
    { id: 'p5',
      title: 'Без слов',
      name: 'Настя Ивлеева Вячеславовна',
      description: 'Коробка с посудами',
      category: 'проверено',
      rarity: 'уникальная',
      price: '500',
    },
    { id: 'p6',
      title: 'Без слов',
      name: 'Настя Ивлеева Вячеславовна',
      description: 'Коробка с посудами',
      category: 'проверено',
      rarity: 'уникальная',
      price: '500',
    },
];

function Blog() {
    return (
        <Container className="justify-content-center p-4" fluid>
            <Row>
              {featuredPosts.map((post, index) => (
                <Col key={index} md={3} sm={4} xs={12} className="mb-3">
                  <Cards post={post} />
                </Col>
              ))}
            </Row>
        </Container>
    )
}

export default Blog;