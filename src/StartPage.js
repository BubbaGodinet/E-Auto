// import {render} from 'react-dom';
import styled from 'styled-components';
import { gsap } from "gsap";
import { useRef, useEffect } from 'react'
import {Section} from './components/styles/Section.styled'
import carleft from './assets/car-white-1.0ce8111a (1).png'
import carright from './assets/car-white-2.ec706134.png'
import carmiddle from './assets/porsche-right.981532db.png'
import arrow from './assets/arrow-right.a3256c0c.svg'
import currentVehicle from './assets/app-1.cf9c774d.png'
import logo1 from './assets/logo-white.bf5c5867.svg'

export default function StartPage() {
    const appRef = useRef();
    
    useEffect(() => {
        gsap.from('.section',{duration: .65, x:-5000})
        gsap.to('.cars', {duration: .55, x:0, delay: .35})
        gsap.to('.appDiv1', {duration: .65, x: 0, delay: .65, opacity: 1, ease: "sine.out"})
        gsap.from('.text', {duration: .55, y: -100, delay: .65, stagger: 0.10, opacity: 0})
      });
    
    const ElDiv = styled.div`
    display: flex;
    height: 100px;
    width: 100%;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 5%;
    position: absolute;
    top: 0px;
    left: 0px;
    `
    const CompanyLogo1 = styled.img`
    height: 100%;
    margin-left: 5px;
    @media screen and (max-width: 1000px) {
        height: 3.882vw;
    }
    `
    const Title = styled.h1`
    font-size: 6vw;
    line-height: 6vw;
    font-family: Bebas Neue,sans-serif;
    text-transform: uppercase;
    color: white;
    font-weight: bold;
    letter-spacing: -0.225vw;
    white-space: pre-line;
    margin: 0px;
    width: 65vw;
    @media screen and (max-width: 1000px) {
        font-size: 9vw;
        line-height: 10vw;
        width: 90vw;
    }
  `
    const DownloadDiv = styled.div`
    transform: translateY(100%);
    opacity: 1;
    display: block;
     @media screen and (max-width: 1000px) {
        margin: 0%;
        margin-bottom: 10vw;
    }
    `
    const TitleDiv = styled.div`
    transform: translateY(0%);
    opacity: 1;
    padding: 50px 0px;
    @media screen and (max-width: 1000px) {
        padding: 40px 0px 20vw;
    }
    `
    const AppDiv = styled.div`
    position: absolute;
    right: 8%;
    top: 100px;
    width: 36.7vh;
    font-size: 0px;
    border-radius: 35px;
    filter: drop-shadow(rgba(0, 0, 0, 0.4) -20px 20px 25px);
    transform: translateX(100%);
    opacity: 0;
    @media all and (max-width: 1000px) {
        display: none;
    }
    `
    const CarOuterDiv = styled.div`
    @media screen and (max-width: 1000px) {
        overflow: hidden;
        width: 100%;
        height: 40vh;
        position: absolute;
        z-index: 10;
        left: 0px;
        bottom: -5vh;
    }
    `
    const CarInnerDiv = styled.div`
    position: absolute;
    z-index: -1;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 200px;
    background-color: rgb(255, 255, 255);
    @media screen and (max-width: 1000px) {
       display: none;
       position: absolute;
        z-index: 10;
    }
    `
    const CarLeft = styled.img`
    transform: translateX(-100%);
    position: absolute;
    width: 34.4vw;
    bottom: 150px;
    left: -6.5%;
    @media screen and (max-width: 1000px) {
        width: 55vw;
        bottom: 2vh;
        left: -5.5%;
    }
    `
    
    const CarRight= styled.img`
    transform: translateX(-100%);
    width: 43.8vw;
    bottom: 135px;
    left: 23%;
    position: absolute;
    @media screen and (max-width: 1000px) {
        width: 68vw;
        bottom: 1vh;
        left: 52%;
    }
    `
    const CarMiddle = styled.img`
    transform: translateX(-100%);
    position: absolute;
    width: 45.7vw;
    bottom: 110px;
    left: 6%;
    @media screen and (max-width: 1000px) {
        position: absolute;
        z-index: 1000;
        width: 68vw;
        bottom: -.5vh;
        left: 13%;
    }
    `
    const AppImg = styled.img`
    width: 100%;
    position: absolute;
    right: 8%;
    top: 100px;
    width: 36.7vh;
    font-size: 0px;
    border-radius: 35px;
    filter: drop-shadow(rgba(0, 0, 0, 0.4) -20px 20px 25px);
}
    `
return(
    <>
      <ElDiv>
        <a style={{height: '1.875vw', zIndex: '1', boxSizing: 'border-box', }} href='https://www.eleanorauto.com/'><CompanyLogo1 alt='logo1' src={logo1} /></a>
      </ElDiv>
    <Section className='section'>
      <TitleDiv className='text' >
      <Title>
        DRIVE A NEW <br/> CAR EVERY MONTH.
      </Title>
      <DownloadDiv className='text'>
      <a style={{fontSize: '16px', fontWeight: 'bold', letterSpacing: '-0.47px', lineHeight: '54px', textDecoration: 'none', marginLeft: '5px', color: '#414A69'}} href="https://testflight.apple.com/join/dfAnfpPZ">Available On The App Today <img src={arrow}/></a>
      </DownloadDiv>
      </TitleDiv>
      <CarOuterDiv>
          <CarInnerDiv >
          </CarInnerDiv>
      <CarLeft className='cars' alt='carleft' src={carleft} />
      <CarRight className='cars' alt='carright' src={carright} />
      <CarMiddle className='cars' alt='carmiddle' src={carmiddle} />
      </CarOuterDiv>
      <AppDiv className='appDiv1'>
        <AppImg ref={appRef} src={currentVehicle}/>
      </AppDiv>
    </Section>
    </>
  );
}
