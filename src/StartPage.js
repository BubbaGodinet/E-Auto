// import {render} from 'react-dom';
import styled from 'styled-components';
import {gsap} from "gsap";
import { useRef, useEffect } from 'react'
import {Section} from './components/styles/Section.styled'
import carleft from './assets/car-white-1.0ce8111a (1).png'
import carright from './assets/car-white-2.ec706134.png'
import carmiddle from './assets/porsche-right.981532db.png'
import arrow from './assets/arrow-right.a3256c0c.svg'
import currentVehicle from './assets/app-1.cf9c774d.png'
import logo1 from './assets/logo-white.bf5c5867.svg'

export default function StartPage() {
    
    const ElDiv = styled.div`
        display: flex;
        height: 100px;
        width: 100%;
        -webkit-box-align: center;
        align-items: center;
        padding: 0px 5%;
        position: absolute;
        z-index: 11;
        top: 0px;
        left: 0px;
    `
    const CompanyLogo1 = styled.img`
        height: 100%;
        margin-left: 5px;

        @media screen and (max-width: 1000px) {
            height: 3vw;
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

        @media screen and (max-width: 480px) {
            width: 55vw;
            bottom: 2vh;
            left: 0vw;
        }

        @media screen and (min-width: 481px) and (max-width:767px) {
            width: 55vw;
            bottom: 2vh;
            left: 0vw;
        }

        @media screen and (min-width: 768px) and (max-width:1200px) {
            width: 48vw;
            bottom: 1.5vw;
            left: 0vw;
        }
    `

    const CarMiddle = styled.img`
        transform: translateX(-100%);
        position: absolute;
        width: 45.7vw;
        bottom: 110px;
        left: 6%;

        @media screen and (max-width: 480px) {
            z-index: 1;
            width: 68vw;
            bottom: -.25vw;
            left: 19vw;
        }

        @media screen and (min-width: 481px) and (max-width:767px) {
            z-index: 1;
            width: 68vw;
            bottom: -.25vw;
            left: 19vw;
        }

        @media screen and (min-width: 768px) and (max-width:1200px) {
            width: 60vw;
            bottom: 0vw;
            left: 20vw;
        }
    `
    
    const CarRight= styled.img`
        transform: translateX(-100%);
        width: 43.8vw;
        bottom: 135px;
        left: 23%;
        position: absolute;

        @media screen and (max-width: 480px) {
            width: 62vw;
            bottom: 4vw;
            left: 44vw;
        }

        @media screen and (min-width: 481px) and (max-width:767px) {
            width: 62vw;
            bottom: 4vw;
            left: 44vw;
        }

        @media screen and (min-width: 768px) and (max-width:1200px) {
            width: 55vw;
            bottom: 2vw;
            left: 50vw;
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
    ` 
    useEffect(() => {
        let tl = gsap.timeline();

        tl.from('.section',{duration: .65, x:-5000})
          .to('.cars', {duration: .55, x:0}, "<.4")
          .to('.appDiv1', {duration: .75, x: 0, opacity: 1, ease: "sine.out"}, "<.3")
          .from('.text', {duration: .35, y: -100, stagger: 0.10, opacity: 0}, "<")

      },[]);

return(
    <>
      <ElDiv>
          <a style={{ height: '1.875vw', zIndex: '1'}} href=''><CompanyLogo1 alt='logo1' src={logo1} /></a>
      </ElDiv>
            <Section className='section'>
                  <TitleDiv className='text' >
                        <Title>
                             DRIVE A NEW <br/> CAR EVERY MONTH.
                        </Title>
                        <DownloadDiv className='text'>
                            <a style={{fontSize: '16px', fontWeight: 'bold', letterSpacing: '-0.47px', lineHeight: '54px', 
                                       textDecoration: 'none', marginLeft: '5px', color: '#414A69'}} 
                                       href="https://testflight.apple.com/join/dfAnfpPZ">Available On The App Today <img src={arrow}/></a>
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
                        <AppImg src={currentVehicle}/>
                  </AppDiv>
    </Section>
    </>
  );
}
