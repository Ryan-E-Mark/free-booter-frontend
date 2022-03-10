import React from 'react';
import { fetchProducts } from '../actions/index';
import { connect, useDispatch } from 'react-redux';

const data = [
    {
    name: 'Slayer',
    image: null,
    size: null,
    description: "the absolute best board ever",
    type: 'board',
    quantity: 1,
},
{
    name: 'Slayer',
    image: null,
    size: null,
    description: "the absolute best board ever",
    type: 'board',
    quantity: 1,
},
{
    name: 'Slayer',
    image: null,
    size: null,
    description: "the absolute best board ever",
    type: 'board',
    quantity: 1,
},
{
    name: 'Slayer',
    image: null,
    size: null,
    description: "the absolute best board ever",
    type: 'board',
    quantity: 1,
},
]


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
            {data.map(prod => 
                <div>
                    <img src={prod.image} alt="product"></img>
                    <h3>{prod.name}</h3>
                    <p>{prod.size}</p>
                    <p>{prod.description}</p>
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
