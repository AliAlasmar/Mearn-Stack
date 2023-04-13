import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { useEffect } from 'react';
import { getProductById } from '../Store/action';
import Badge from 'react-bootstrap/Badge'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Rating from '../Components/Rating';
import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import { Helmet } from 'react-helmet-async';
import { CounterCtx } from '../Context/CartContext';



function ProductScreen() {
  console.log()
  let value = useContext(CounterCtx)
  let { slug } = useParams()

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const products = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getProductById(slug));
  }, [dispatch]);



  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (

    <div>
      <div className="products">
        <Row>
          <Col md={6}>
            <img className='img-large' src={product.image} />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <ListGroup.Item>
                <h1>{product.name}</h1>
              </ListGroup.Item>

              <ListGroup.Item>
                <Rating rating={product.rating} numReviews={product.numReviews} />
              </ListGroup.Item>

              <ListGroup.Item>
                price : {product.price}$
              </ListGroup.Item>

              <ListGroup.Item>
                Description :
                <p>{product.description}</p>
              </ListGroup.Item>

            </ListGroup>
          </Col>
          <Col md={3}>
            <br />
            <Card>
              <Card.Body>
                <ListGroup.Item>
                  <Row>
                    <Col>Price :</Col>
                    <Col>{product.price}$</Col>
                  </Row>
                </ListGroup.Item>
                <hr />
                <ListGroup.Item>
                  <Row>
                    <Col>Status :</Col>
                    <Col>
                      {product.countInStock > 0 ?
                        <Badge bg="success">In Stocke</Badge> :
                        <Badge bg="danger">Unavilable</Badge>}</Col>
                  </Row>
                  <br/>
                </ListGroup.Item>
                          
                      {product.countInStock > 0 &&(
                        <ListGroup.Item>
                          <div className='d-grid'>
                            <Button onClick={()=>value.incressCounter(product._id)} variant="primary">
                              Add To Cart {value.counter.count}
                            </Button>
                          </div>
                        </ListGroup.Item>
                      )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ProductScreen
