import React, { useEffect } from 'react';
import { fetchProducts } from '../actions/index';
import { connect, useDispatch } from 'react-redux';


function Products(props) {
    const dispatch = useDispatch()

    // console.log(props);
    // useEffect(() => {
    //     dispatch(fetchProducts())
    //     // console.log(props.product)
    // }, [props.product])

    function handleClick() {
        dispatch(fetchProducts())
    }

    return (
        <div>
            <button onClick={handleClick}>CLICK ME</button>
            {props.product.status === "success" ? <img src={props.product.message} alt="random dog"></img> : <span></span>}
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
