import React from 'react'
import { Link } from 'react-router-dom'
import data from '../Data/data'
import { useState , useEffect} from 'react'
import axios from 'axios'
function HomeScreen() {
    let [product , setProduct] = useState({
        products : []
    })

    async function getproduct() {
      
        //  const response = fetch('http://localhost:3001/api1/product')
          fetch('http://localhost:3001/api1/product')
      .then(response => response.json())
      .then(json =>{
         console.log(json)
         setProduct({
            products : json
         })
      }
         )
       
          .catch(err => console.log(err))
        
      }

    useEffect(()=>{
        getproduct()
    },[])
    return (
        <div>
            List Product
            <h1>Feature Product</h1>
            <div className="products">
                {product.products.map((product) => (
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
