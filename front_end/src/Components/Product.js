import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Rating from './Rating'


function Product(props) {
    return (
        <Card className="product" key={props.product.slug}>
            <Link to={`/product/${props.product.slug}`}>
                <img src={props.product.image} className='card-img-top' alt={props.product.name} />
            </Link >
            <Card.Body>
                <Link to={`/product/${props.product.slug}`}>
                    <Card.Title>{props.product.name}</Card.Title>
                </Link >
                <Rating rating={props.product.rating} numReviews={props.product.numReviews} />
                <Card.Text>$ {props.product.price}</Card.Text>
                <Button>Add To Cart</Button>
            </Card.Body>

        </Card>
    )
}

export default Product
