import React, { useEffect, useState } from 'react'
import Spiderman from '../../assets/alexander-jawfox-tBAsD_VnxCY-unsplash.jpg'
import { Link } from 'react-router-dom';

const KitchenProduct = () => {

  const [product, setProduct] = useState();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProduct(data))
  },[product])

  console.log(product)


  return (
  
    product?.map((product)=>{
    return  <div className="grid grid-cols-3 grid-flow-row gap-6">
    <div className="card w-80 bg-base-100 shadow-xl">
<figure className="px-10 pt-10">
  <img src={product.image} alt="Shoes" className="rounded-xl" />
</figure>
<div className="card-body items-center text-center">
  <h2 className="card-title"></h2>
  <p>{product.id}</p>
  <div className="card-actions">
    <Link to={`https://fakestoreapi.com/products/${product.id}`}><button className="btn btn-primary">{product.category}</button></Link>
  </div>
</div>
</div>
  </div>
   })
  )
}

export default KitchenProduct
