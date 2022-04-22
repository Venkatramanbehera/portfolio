import React from 'react'
import './productlist.css';
import { Product } from '../../components';
const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl-text">
            <h1 className="pl-title">Create & inspire. Its Venkat</h1>
            <p className="pl-desc">
                Lama is a creative portfolio that your work has been waiting for.
                Beautiful homes, stunning portfolio styles & a whole lot more awaits
                inside.
            </p>
        </div>
        <div className="pl-list">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>
  )
}

export default ProductList