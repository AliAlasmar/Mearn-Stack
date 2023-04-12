import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../Store/action'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Product from '../Components/Product'


function HomeScreen() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    console.log('products =' + products)

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div>

            <h1>Feature Product</h1>


            <div className="products">
                <Row>
                    {products && products.map((product) => (
                        <Col sm={6} md={4} lg={3} className='mb-3' key={product.slug}>
                            <Product product={product}  />
                        </Col>
                    ))
                    }
                </Row>
            </div>
        </div>
    )
}

export default HomeScreen
