import React from 'react'
import { createContext , useState} from 'react'
import axios from 'axios'

export  const CounterCtx = createContext()
CounterCtx.displayName ="counterCart"

const CounterCtxProvider =(props)=>{
    let [counter , setCounter]= useState({
        count :0,
        cartItems:[]
    })

    const incressCounter = (id)=>{
        console.log('cart_id :'+id)
        axios.get('http://localhost:3001/api1/product_cart/' + id)
        .then(response => {
          const products = response.data;
          console.log('result from api' + products)
          setCounter(prevState =>({
            
            count : counter.count + 1,
            cartItems : prevState.cartItems.concat(products),
         }))
          
        })
       
    }

    const decressCounter = ()=>{
        setCounter({
            count : counter.count - 1
         })
    }

    let values={
        counter,
        incressCounter,
        decressCounter
    }
    return (
        <CounterCtx.Provider value={values} >
            {props.children}
        </CounterCtx.Provider>
    )
}
export default CounterCtxProvider