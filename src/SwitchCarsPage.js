import styled from 'styled-components';
import { gsap } from "gsap";
import {Section2} from './components/styles/Section2.styled'
import porsche from './assets/porche-front.acc2162e.png'
import app from './assets/app-3.c8673836.png'

export default function SwitchCarsPage() {


    const CarWrapper = styled.div`
    display: block;
    position: relative;
    height: 90vh;
    width: 30vw;
    transform: translateY(-6vh);

    div.container {
        display: block;
        position: absolute;
        left: 0px;
        top: 0px;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    div.appImg {
        display: block;
        position: absolute;
        right: 0px;
        top: 50%;
        width: 36.7vh;
        font-size: 0px;
        border-radius: 35px;
        filter: drop-shadow(rgba(0, 0, 0, 0.2) 20px 20px 25px);
    }

    div.carImg {
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgb(251, 200, 67);
    }

    img.car {
        width: 80%;
        transform: translateX(5%);
    }

    img.app {
        width: 100%;
    }
    `

    const NewWrapper = styled.div`
        display: block;
        flex: 1 1 0%;
        margin-left: 15vw;
        margin-top: 25vh;

        h2 {
            color: rgb(43, 49, 68);
            font-size: 6vw;
            font-weight: bold;
            line-height: 6vw;
            margin: 0px;
            white-space: pre-line;
            font-family: Bebas Neue,sans-serif;
            text-transform: uppercase;
            display: block;
            margin-block-start: 0.83em;
            margin-block-end: 0.83em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
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
            display: block;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
        }
    `
    return(
        <Section2>
            <CarWrapper>
               <div className='container'>
                    <div className="carImg">
                        <img className='car' alt='porsche' src={porsche}/>
                    </div>
               </div>
               <div className="appImg">
                    <img className='app' alt='app' src={app}/>
               </div>
            </CarWrapper>
            <NewWrapper>
                <h2>DRIVE UNTIL YOU WANT SOMETHING NEW</h2>
                <p>Going on a new date this weekend? The Porsche is a great choice. Heading to the mountains? We recommend the F-150 Raptor.
                    Swap your vehicle as many times as you want, all for the same monthly price.
                </p>
            </NewWrapper>
        </Section2>
    )
}