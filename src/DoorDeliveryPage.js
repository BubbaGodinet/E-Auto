import styled from 'styled-components';
import {useEffect} from 'react'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import map from './assets/map.3f0298de.png'
import car from './assets/porsche-right.981532db.png'
import app from './assets/app-2.35887031.png'

// const plugins = [ ScrollTrigger ]

// gsap.registerPlugin(ScrollTrigger);
export default function DoorDeliveryPage() {

    
    const DoorSection = styled.section`
    transform: translateX(0%);
    padding: 6vw 5% 0px;
    background-color: white;
    height: 100vh;
    display: flex;
    @media screen and (max-width: 1000px) {
        height: unset;
        margin-top: 6vw;
        flex-direction: column;
    }
    `

    const TextDiv = styled.div`
    flex: 1 1 0%;
    margin-top: 10%;
    display: block;
    opacity: 1;
    @media screen and (max-width: 1000px) {
        margin-top: 30%;
    }
    `
    const ContainerDiv = styled.div`
        position: relative;
        flex: 1.5 1 0%;
        height: 34.9vw;
        @media screen and (max-width: 1000px) {
            overflow: hidden;
            width: 110%;
            margin-left: -5%;
            padding: 45vh 0px;
        }
    `
    const MapDiv = styled.div`
        position: absolute;
        left: 0px;
        width: 50vw;
        margin-top: 8%;
        overflow: hidden;
        @media only screen and (max-width: 1000px) {
            left: 50%;
            top: 50%;
            margin-top: 0px;
            width: 130%;
            transform: translate(-57%, -50%);
        }
    `
    const AppDiv = styled.div`
        transform: translate(0%, 5%);
        opacity: 1;
        position: absolute;
        left: 38%;
        top: -10%;
        width: 36.7vh;
        font-size: 0px;
        border-radius: 35px;
        filter: drop-shadow(rgba(0, 0, 0, 0.4) -20px 20px 25px);
        @media screen and (max-width: 1000px) {
            left: 17%;
            top: 10%;
            width: 30vh;
        }
        @media (min-width: 800px) and (max-width: 1200px) {
            left: 30%;
            top: 10%;
        }
    `
    const MapImg = styled.img`
        transform: translateX(0%);
        width: 100%;
    `
    const DeliverCarImg = styled.img`
        transform: translate(-45%, 20%);
        opacity: 1;
        position: absolute;
        width: 31vw;
        bottom: 0px;
        left: 0px;
        @media only screen and (max-width: 1000px) {
            display: none;
        }
    `
    const AppImg = styled.img`
    width: 100%;
    `

    const H2 = styled.h2`
    transform: translateY(0%);
    opacity: 1;
    color: rgb(43, 49, 68);
    font-size: 4vw;
    font-weight: bold;
    line-height: 4.5vw;
    margin: 0px;
    white-space: pre-line;
    font-family: Bebas Neue,sans-serif;
    text-transform: uppercase;
    @media screen and (max-width: 1000px) {
        font-size: 6.5vw;
        line-height: 8vw;
        white-space: unset;
        letter-spacing: -0.3vw;
        width: 92vw;
    }
    `
    const P = styled.p`
        transform: translateY(0%);
        opacity: 1;
        color: rgb(0, 0, 0);
        font-size: 1vw;
        font-weight: normal;
        line-height: 1.8vw;
        width: 20vw;
        white-space: pre-line;
        margin-top: 2vw;
        width: 70%;
        @media screen and (max-width: 1000px) {
            margin-top: 4vw;
        font-size: 3.5vw;
        line-height: 6vw;
        white-space: unset;
        width: 100%;
        }
    `

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from('.mapDiv', {scrollTrigger: {trigger:'.deliverText', start: 'top 40%', markers:true}, duration: .4, x: 2000, opacity: 1})
        gsap.from('.deliverText', {scrollTrigger: {trigger:'.deliverText', start: 'top 40%'}, y: -300, opacity: 0, stagger: .20})
        gsap.from('.appDiv', {scrollTrigger: {trigger:'.deliverText', start: 'top 40%'}, duration: .55, y: -300, opacity: 0})
        gsap.from('.deliverCar', {scrollTrigger: {trigger:'.deliverText', start: 'top 40%'}, duration: .75, x:-800, opacity: 0})
    },[])

    console.log('ScrollTrigger', ScrollTrigger)

    return(
        <DoorSection>
            <TextDiv className='deliverText' >
                 <H2 className='deliverText'>DELIVERED TO YOUR DOOR.</H2>
                 <P className='deliverText'>Eleanor works with your schedule to have a <br/> white-glove delivery service deliver your new <br/> vehicle right to your door.</P>
            </TextDiv>
            <ContainerDiv className="container">
                <MapDiv className="mapDiv">
                    <MapImg className='map' alt='map' src={map} />
                </MapDiv>
                <DeliverCarImg className='deliverCar' alt='porsche' src={car}/>
                <AppDiv className="appDiv">
                    <AppImg className='app' alt='app' src={app}/>
                </AppDiv>
            </ContainerDiv>
        </DoorSection>
    )
}