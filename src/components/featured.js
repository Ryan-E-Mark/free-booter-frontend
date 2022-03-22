import React from "react";
import { connect } from 'react-redux';
import './css/featured.css';

function FeaturedBoard(props) {

    return (
        <section id="featured">
            <div className="text-box">
                <h3>Featured Board: </h3>
                <p>This board is sick, the gnarliest ripper you've ever seen. When the moon is full and the pow is just right, you can hear the howls of a local shredder absolutely getting after it on this board. Ride it, love it.</p>
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