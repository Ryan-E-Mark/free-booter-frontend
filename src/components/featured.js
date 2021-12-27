import React from "react";
import { connect } from 'react-redux';

function FeaturedBoard(props) {

    return (
        <section>
            <div>
                <h3>Featured Board:</h3>
                <p>Board information</p>
            </div>
            <div>
                <p>eventually the board image</p>
            </div>
        </section>
    );
}

const mapStatetoProps = (state) => {
    return {
        product: state.product
    }
}

export default connect(mapStatetoProps)(FeaturedBoard);