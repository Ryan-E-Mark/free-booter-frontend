import React, { useEffect } from 'react';
import { fetchProducts } from '../actions/index';
import { connect, useDispatch } from 'react-redux';
import Sidebar from './sidebar';
import ProductCard from './productCard';
import "./css/product.css";



function Products({product}) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    
    console.log(product)
    return (
        <div>
            {product.length ? 
                <ProductCard/>
            : <span></span>}
            <Sidebar />
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        product: state.product
    }
}

export default connect(mapStatetoProps, { fetchProducts })(Products);
