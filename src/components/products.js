import React from 'react';
import { fetchProducts } from '../actions/index';
import { connect, useDispatch } from 'react-redux';
import Sidebar from './sidebar';
import "./product.css";
import data from '../data';


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
            <Sidebar />
            {data.map(prod => 
                <div className='prod-card'>
                    <div className='prodpic-div'>
                        <img className='prod-img' src={prod.image} alt="product"></img>
                    </div>
                    <div className='prodtext-div'>
                        <h3 className='prod-name'>{prod.name}</h3>
                        <p>{prod.size}</p>
                        <p className='prod-desc'>{prod.description}</p>
                    </div>                
                </div>
                )}
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
