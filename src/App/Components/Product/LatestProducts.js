import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from './Card/ProductCard'
import { useSelector } from "react-redux";

const LatestProducts = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <Container className="my-3 py-3">
      <h3 className="text-center mb-4">Latest Products</h3>
      <Row>
        {products &&
          products.slice(0, 6).map((p) => {
            return (
              <Col xs={12} sm={6} md={4} lg={2} className="mb-4" key={p.id}>
                <ProductCard product={p} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}

export default LatestProducts