import React from 'react';
import { connect } from 'react-redux';

const ProductCard = ({product}) => {


    return (
        <section className='product-section'>
            {product.map(prod => (
                <div key={prod.product_id} className="prod-card">
                    <img src={prod.img} alt="product thumbnail" className='prod-img'/>
                    <h4 className='prod-title'>{prod.product_name}</h4>
                    <p className='prod-size'>Size: {prod.product_size}</p>
                    <p className='prod-stock'>In stock: {prod.in_stock}</p>
                </div>
            ))}
        </section>
    )
}

const mapStatetoProps = (state) => {
    return {
        product: state.product
    }
}

export default connect(mapStatetoProps)(ProductCard);
