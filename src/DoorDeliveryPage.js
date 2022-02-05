import styled from 'styled-components';
import { gsap } from "gsap";

import map from './assets/map.3f0298de.png'
import car from './assets/porsche-right.981532db.png'
import app from './assets/app-2.35887031.png'


export default function DoorDeliveryPage() {

    const DoorSection = styled.section`
    transform: translateX(0%);
    padding: 6vw 5% 0px;
    background-color: white;
    height: 100vh;
    display: flex;

    div.text {
        flex: 1 1 0%;
        margin-top: 10%;
        display: block;
    }

    h2 {
        transform: translateY(0%);
        opacity: 1;
        color: rgb(43, 49, 68);
        font-size: 6vw;
        font-weight: bold;
        line-height: 6vw;
        margin: 0px;
        white-space: pre-line;
        font-family: Bebas Neue,sans-serif;
        text-transform: uppercase;
    }

    p {
        transform: translateY(0%);
        opacity: 1;
        color: rgb(0, 0, 0);
        font-size: 1vw;
        font-weight: normal;
        line-height: 1.8vw;
        width: 90%;
        white-space: pre-line;
        margin-top: 2vw;
        width: 55%;
    }

    div.container {
        position: relative;
        flex: 1.5 1 0%;
        height: 34.9vw;
    }

    div.mapDiv {
        position: absolute;
        left: 0px;
        width: 50vw;
        margin-top: 8%;
        overflow: hidden;
    }

    img.map {
        transform: translateX(0%);
        width: 100%;
    }

    img.car {
        transform: translate(-45%, 20%);
        opacity: 1;
        position: absolute;
        width: 31vw;
        bottom: 0px;
        left: 0px;
    }

    div.appDiv {
        transform: translate(0%, 0%);
        opacity: 1;
        position: absolute;
        left: 38%;
        top: -10%;
        width: 36.7vh;
        font-size: 0px;
        border-radius: 35px;
        filter: drop-shadow(rgba(0, 0, 0, 0.4) -20px 20px 25px);
    }

    img.app {
        width: 100%;
    }
    `
    return(
        <DoorSection>
            <div className='text' >
                 <h2>DELIVERED TO YOUR DOOR.</h2>
                 <p>Eleanor works with your schedule to have a
          white-glove delivery service deliver your new
          vehicle right to your door. Your live vehicle
          concierge is available to answer questions 24/7.</p>
            </div>
            <div className="container">
                <div className="mapDiv">
                    <img className='map' alt='map' src={map} />
                </div>
                <img className='car' alt='porsche' src={car}/>
                <div className="appDiv">
                    <img className='app' alt='app' src={app}/>
                </div>
            </div>
        </DoorSection>
    )
}