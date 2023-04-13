import React from 'react'
import { createContext , useState} from 'react'


export  const CounterCtx = createContext()
CounterCtx.displayName ="counterCart"

const CounterCtxProvider =(props)=>{
    let [counter , setCounter]= useState({
        count :0
    })

    const incressCounter = ()=>{
        setCounter({
           count : counter.count + 1
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