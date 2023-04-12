import React from 'react'
import { Link } from 'react-router-dom'
import data from '../Data/data'
import { useState , useEffect} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import Reducer from '../Store/Reducer'
import { getProduct } from '../Store/action'



function HomeScreen() {
    const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

   console.log('products ='+ products)

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
            List Product
            <h1>Feature Product</h1>
            
            
            <div className="products">
                {products&& products.map((product) => (
                    <div className="product" key={product.slug}>
                        <Link  to={`/product/${product.slug}`}>
                            <img src={product.image} alt={product.name} />
                        </Link >
                        <div className="product-info">
                            <Link  to={`/product/${product.slug}`}>
                                <p>{product.name}</p>
                            </Link >
                            <p>
                                <strong>$ {product.price}</strong>
                            </p>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeScreen
