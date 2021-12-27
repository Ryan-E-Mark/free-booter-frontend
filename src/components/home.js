import React from 'react';
import { useNavigate } from 'react-router-dom'
import powsurf from '../video/justinsurf2.mp4'
import FeaturedBoard from "./featured";
import './home.css'


function Home() {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/products')
    }
    return (
        <section>
            <div className="home-div">
                <h1>Freebooter</h1>
                <h3>Mountain Surf</h3>
                <div>
                    <p>Free your feet, free your soul</p>
                </div>   
                <button onClick={handleClick}>View our lineup</button>
                <video src={powsurf} type="video/mp4" muted loop autoPlay/>
            </div>
            <FeaturedBoard />
        </section>
    )
}

export default Home;