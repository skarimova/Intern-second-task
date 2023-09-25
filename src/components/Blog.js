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
        <Container className="justify-content-center p-3" fluid>
            <Row md={4} sm={3} xs={2}>
                {featuredPosts.map((post) => (<Col>
                                                <Cards key={post.id} post={post} />
                                              </Col>))}
            </Row>
        </Container>
    )
}

export default Blog;