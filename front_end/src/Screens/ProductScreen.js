import React from 'react'
import { useParams } from 'react-router'
function ProductScreen() {

    let {slug} = useParams()
  return (

    <div>
      <h2>{slug}</h2>
    </div>
  )
}

export default ProductScreen
