import styled from 'styled-components';
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
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
    transform: translateY(-800%);
    opacity: 0;
    position: absolute;
    right: 0px;
    top: 50%;
    width: 36.7vh;
    font-size: 0px;
    border-radius: 35px;
    filter: drop-shadow(rgba(0, 0, 0, 0.2) 20px 20px 25px);
    `
    const AppImg = styled.img`
    width: 100%;
    `
    const TextDiv = styled.div`
    flex: 1 1 0%;
    margin-left: 15vw;
    margin-top: 25vh;
    `
    const TitleH2 = styled.h2`
    transform: translateY(0%);
    opacity: 1;
    color: rgb(43, 49, 68);
    font-size: 6vw;
    font-weight: bold;
    line-height: 6vw;
    margin: 0px;
    white-space: pre-line;
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
    `
    useEffect(() => {
        gsap.to('.carDiv', {scrollTrigger: '.textDiv', duration: .85, x:0}, 'Start');
        gsap.to('.appImgDiv', {scrollTrigger: '.textDiv', duration: .75, delay: .4, opacity: 1, x:'40%', y:'-50%'}, 'Start');
        gsap.from('.textDiv', {scrollTrigger: {trigger:'.textDiv', markers:true}, duration: .55, y: -300, opacity: 0, stagger: .20}, 'Start')
        },[])
  
    return(
        <Section2>
            <CarDiv>
                <InnerCarDiv>
                    <CarImgDiv className='carDiv'>
                        <CarImg alt='porsche' src={porsche}/>
                    </CarImgDiv>
                </InnerCarDiv>
                <AppImgDiv className='appImgDiv'>
                    <AppImg alt='app' src={app}/>
                </AppImgDiv>
            </CarDiv>
            <TextDiv className='textDiv'>
                <TitleH2 className='textDiv'>TRADE IN YOUR CAR EVERY MONTH</TitleH2>
                <P className='textDiv'>Use Eleanor Trade-In Credits to trade in your vehicle for something else in our luxurious inventory. Nothing says “June” like a new car!</P>
            </TextDiv>
        </Section2>
    )
}

