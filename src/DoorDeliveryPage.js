import styled from 'styled-components';
import {useEffect} from 'react'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
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

        @media screen and (max-width: 480px) {
            height: unset;
            margin-top: 27vw;
            flex-direction: column;
        }

        @media screen and (min-width: 481px) and (max-width: 767px) {
            height: unset;
            margin-top: 15vw;
            flex-direction: column;
        }

        @media screen and (min-width: 768px) and (max-width: 1024px) {
            height: unset;
            margin-top: 15vw;
            flex-direction: column;
        }

        @media screen and (min-width: 1025px) and (max-width: 1280px) {
            height: unset;
            margin-top: 15vw;
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
            padding: 70vw 0px;
        }
    `
    const MapDiv = styled.div`
        position: absolute;
        left: 0px;
        width: 50vw;
        margin-top: 8%;
        overflow: hidden;

        @media screen and (max-width: 1000px) {
            margin-top: 0px;
            width: 130%;
            left: -25vw;
            top: 20vw;
            // transform: translate(-57%, -50%);
        }
    `
    const AppDiv = styled.div`
        position: absolute;
        left: 38%;
        top: -15%;
        width: 19vw;
        font-size: 0px;
        border-radius: 35px;
        filter: drop-shadow(rgba(0, 0, 0, 0.4) -20px 20px 25px);

        @media screen and (min-width: 0px) and (max-width: 1280px) {
            left: 25vw;
            top: 0vw;
            width: 50vw;
            filter: none;
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
        let tl = gsap.timeline({
            scrollTrigger: {
               trigger:'.mapDiv', 
               start: 'top 60%', 
            }
        });

        tl.fromTo('.mapDiv', { duration: .45, x: '200%', opacity: 1}, {x: '0%'})
          .fromTo('.deliverText', {y: '-100%', opacity: 0}, {opacity: 1, y: '0%', stagger: .20}, ">")
          .fromTo('.appDiv', {duration: .45, y:'-100%', opacity: 0},{ y: '3%', opacity: 1}, "<")
          .fromTo('.deliverCar', {duration: .45, x:'-200%', opacity: 0},{ x:'-47%', opacity: 1}, "<")

    },[])

    return(
        <DoorSection>
            <TextDiv className='deliverText' >
                 <H2 className='deliverText'>DELIVERED TO YOUR DOOR.</H2>
                 <P className='deliverText'>Eleanor works with your schedule to have a <br/> white-glove delivery service deliver 
                 your new <br/> vehicle right to your door.</P>
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