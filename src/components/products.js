import React, { useEffect } from 'react';
import { fetchProducts } from '../actions/index';
import { connect } from 'react-redux';


function Products() {


    return (
        <div>

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
