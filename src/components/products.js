import React, { useEffect } from 'react';
import { fetchProducts } from '../actions/index';
import { connect, useDispatch } from 'react-redux';
import Sidebar from './sidebar';
import "./css/product.css";



function Products(props) {
    const dispatch = useDispatch()

    // console.log(props);
    // useEffect(() => {
    //     dispatch(fetchProducts())
    //     console.log(props.product)
    // }, [])

    function handleClick() {
        dispatch(fetchProducts())
    }
    
    console.log(props.product);

    return (
        <div>
            <div style={{height: "90vh"}}>
            <button onClick={handleClick}>CLICK ME</button>

            </div>
            {props.product.status === "success" ? 
            <span></span>
            : <span></span>}
            <Sidebar />
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        product: state.product,
        fetching: state.fetching
    }
}

export default connect(mapStatetoProps, { fetchProducts })(Products);
