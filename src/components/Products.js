import React, { useEffect } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../RTK/slices/productsSlice";
import { addToCart } from "../RTK/slices/cartSlice";

function Products() {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Container>
      <Row className="my-5 py-5">
        {products.map((product) => (
          <Col className="col-lg-3" key={product.id}>
            <Card>
              <Card.Img
                className="card-img"
                variant="top"
                src={product.image}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>{product.price} $</Card.Text>

                <Button
                  variant="primary"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
