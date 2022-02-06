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
    var tl = gsap.timeline();
    const sectionRef = useRef()
    const appRef = useRef();
    const carRef = useRef();
    const carRef2 = useRef();
    const carRef3 = useRef();
    const subscribe = useRef();
    const title = useRef();

    useEffect(() => {
        tl.from(sectionRef.current,{duration: .85, x:-5000})
        gsap.to(carRef.current, {duration: .55, x:0})
        gsap.to(carRef2.current, {duration: .55, x:0})
        gsap.to(carRef3.current, {duration: .55, x:0})
        gsap.to(appRef.current, {duration: .65, x: 0, delay: .65, opacity: 1, ease: "sine.out"})
        gsap.from('.text', {duration: .65, y: 100, opacity: 0, delay: .65, stagger: 0.10})
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
    `
    const Title = styled.h1`
    font-size: 3vw;
    line-height: 6vw;
    font-family: Bebas Neue,sans-serif;
    text-transform: uppercase;
    text-align: left;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: white;
    display: block;
    font-weight: bold;
    letter-spacing: -0.256vw
    white-space: pre-line;
    margin: 0px;
  `
  const DownloadDiv = styled.div`
    transform: translateY(100%);
    opacity: 1;
    display: block;
    `
    const TitleDiv = styled.div`
    transform: translateY(100%);
    opacity: 1;
    padding: 50px 0px;
    display: block;
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
    display: block;
    `
    const CarOuterDiv = styled.div`
    display: block;
    `
    const CarInnerDiv = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 200px;
    background-color: rgb(255, 255, 255);
    display: block;
    `
    const CarLeft = styled.img`
    transform: translateX(100%);
    position: absolute;
    width: 34.4vw;
    bottom: 150px;
    left: -6.5%;
    `

    const CarRight= styled.img`
    transform: translateX(100%);
    width: 43.8vw;
    bottom: 135px;
    left: 23%;
    position: absolute;
    `

    const CarMiddle = styled.img`
    transform: translateX(100%);
    position: absolute;
    width: 45.7vw;
    bottom: 110px;
    left: 6%;
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
    <Section ref={sectionRef}>
      <TitleDiv className='text' ref={title}>
      <Title>
        DRIVE A NEW CAR WHENEVER YOU WANT
      </Title>
      <DownloadDiv className='text' ref={subscribe}>
      <a style={{fontSize: '16px', fontWeight: 'bold', letterSpacing: '-0.47px', lineHeight: '54px', textDecoration: 'none', marginLeft: '5px', color: '#414A69'}} href="https://testflight.apple.com/join/dfAnfpPZ">Subscribe. Drive. Swap. Download Today <img src={arrow}/></a>
      </DownloadDiv>
      </TitleDiv>
      <CarOuterDiv>
          <CarInnerDiv >
      <CarLeft ref={carRef} className='cars' alt='carleft' src={carleft} />
      <CarRight ref={carRef2} className='cars' alt='carright' src={carright} />
      <CarMiddle ref={carRef3} className='cars' alt='carmiddle' src={carmiddle} />
          </CarInnerDiv>
      </CarOuterDiv>
      <AppDiv ref={appRef}>
        <AppImg ref={appRef} src={currentVehicle}/>
      </AppDiv>
    </Section>
    </>
  );
}
