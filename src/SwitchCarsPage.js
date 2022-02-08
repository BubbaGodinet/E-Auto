import styled from 'styled-components';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useEffect} from 'react'
import {Section2} from './components/styles/Section2.styled'
import porsche from './assets/porche-front.acc2162e.png'
import app from './assets/app-3.c8673836.png'

gsap.registerPlugin(ScrollTrigger);
export default function SwitchCarsPage() {

    const CarDiv = styled.div`
    position: relative;
    height: 90vh;
    width: 30vw;
    transform: translateY(-6vh);
    @media screen and (max-width: 1024px) {
        height: 75vh;
        width: 80vw;
        transform: translate(-10%, 2vh);
    }
    `
    const InnerCarDiv = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
    overflow: hidden;
    `
    const CarImgDiv = styled.div`
    transform: translateX(-100%);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgb(251, 200, 67);
    `
    const CarImg = styled.img`
    width: 80%;
    transform: translateX(5%);
    `
    const AppImgDiv = styled.div`
    opacity: 0;
    position: absolute;
    right: 0px;
    top: 50%;
    width: 36.7vh;
    font-size: 0px;
    border-radius: 35px;
    filter: drop-shadow(rgba(0, 0, 0, 0.2) 20px 20px 25px);
    @media only screen and (max-width: 1024px) {
        right: 0px;
        top: 50%;
        width: 25vh;
    }
    @media (min-width: 800px) and (max-width: 1200px) {
        left: 35%;
        width: 30vh;
    }
    `
    const AppImg = styled.img`
    width: 100%;
    `
    const TextDiv = styled.div`
    flex: 1 1 0%;
    margin-left: 15vw;
    margin-top: 25vh;
    @media screen and (max-width: 1024px) {
        flex: unset;
        margin-left: 0vw;
        margin-top: 0vh;
    }
    `
    const TitleH2 = styled.h2`
    transform: translateY(0%);
    opacity: 1;
    color: rgb(43, 49, 68);
    font-size: 4vw;
    font-weight: bold;
    line-height: 4.5vw;
    margin: 0px;
    white-space: pre-line;
    @media screen and (max-width: 1024px) {
        font-size: 7vw;
        line-height: 8vw;
        white-space: unset;
        letter-spacing: -0.3vw;
    }
    `
    const P = styled.p`
    transform: translateY(0%);
    opacity: 1;
    color: rgb(0, 0, 0);
    font-size: 1vw;
    font-weight: normal;
    line-height: 1.8vw;
    width: 90%;
    white-space: pre-line;
    margin-top: 2vw;
    width: 25vw;
    @media screen and (max-width: 1024px) {
        font-size: 4vw;
        width: 95vw;
        line-height: 7vw;
    }
    `
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.carImgDiv', {scrollTrigger: {trigger:'.textDiv',start:'top center'}, duration: .65, x:'0%'});
        gsap.fromTo('.appImgDiv', {x: '45%',y: '-80%'}, {scrollTrigger: {trigger:'.textDiv', start:'top center'}, duration: .55, delay: .4, opacity: 1, y:'-50%'});
        gsap.from('.textDiv', {scrollTrigger: {trigger:'.textDiv', start:'top center',markers:true}, duration: .55, y: -300, opacity: 0, stagger: .20})
        },[])
  
    return(
        <Section2>
            <CarDiv>
                <InnerCarDiv>
                    <CarImgDiv className='carImgDiv'>
                        <CarImg alt='porsche' src={porsche}/>
                    </CarImgDiv>
                </InnerCarDiv>
                <AppImgDiv className='appImgDiv'>
                    <AppImg alt='app' src={app}/>
                </AppImgDiv>
            </CarDiv>
            <TextDiv className='textDiv'>
                <TitleH2 className='textDiv'>TRADE IN YOUR CAR EVERY MONTH.</TitleH2>
                <P className='textDiv'>Use Eleanor Trade-In Credits to trade in your vehicle for something else in our luxurious inventory. Nothing says “June” like a new car!</P>
            </TextDiv>
        </Section2>
    )
}

