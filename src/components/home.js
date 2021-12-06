import React from 'react';
import powsurf from '../video/justinsurf.mp4'
import './home.css'

function Home() {
    return (
        <div className="home-div">
            <h1>Freebooter</h1>
            <h3>Mountain Surf</h3>
            <div>
                <p>Free your feet, free your soul</p>
            </div>   
            <button>View our lineup</button>
            <video src={powsurf} type="video/mp4" muted loop autoPlay/>
      </div>
    )
}

export default Home;