// import {render} from 'react-dom';
import styled from 'styled-components';
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
    top: 0px;
    left: 0px;
    box-sizing: border-box;
    `
    const CompanyLogo1 = styled.img`
    height: 100%;
    margin-left: 5px;
    box-sizing: border-box;
    `
    const Title = styled.h1`
    font-size: 8vw;
    line-height: 9vw;
    font-family: Bebas Neue,sans-serif;
    text-transform: uppercase;
    text-align: left;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    color: white;
    display: block;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    letter-spacing: -0.256vw
    white-space: pre-line;
    margin: 0px;
    box-sizing: border-box;
  `
  const DownloadDiv = styled.div`
    transform: translateY(0%);
    opacity: 1;
    display: block;
    `
    const TitleDiv = styled.div`
    transform: translateY(0%);
    opacity: 1;
    padding: 50px 0px;
    display: block;
    box-sizing: border-box;
    `
    const AppDiv = styled.div`
    position: absolute;
    right: 8%;
    top: 100px;
    width: 36.7vh;
    font-size: 0px;
    border-radius: 35px;
    filter: drop-shadow(rgba(0, 0, 0, 0.4) -20px 20px 25px);
    transform: translateX(0%);
    opacity: 1;
    display: block;
    box-sizing: border-box;
    `
    const CarOuterDiv = styled.div`
    display: block;
    box-sizing: border-box;
    `
    const CarInnerDiv = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 200px;
    background-color: rgb(255, 255, 255);
    box-sizing: border-box;
    display: block;
    `
    const CarLeft = styled.img`
    transform: translateX(0%);
    position: absolute;
    width: 34.4vw;
    bottom: 150px;
    left: -6.5%;
    box-sizing: border-box;
    `

    const CarRight= styled.img`
    transform: translateX(0%);
    width: 43.8vw;
    bottom: 135px;
    left: 23%;
    position: absolute;
    box-sizing: border-box;
    `

    const CarMiddle = styled.img`
    transform: translateX(0%);
    position: absolute;
    width: 45.7vw;
    bottom: 110px;
    left: 6%;
    box-sizing: border-box;
    `
    const AppImg = styled.img`
    width: 100%;
    box-sizing: border-box;
    font-size: 0px;
    `
return(
    <Section>
      <ElDiv>
        <a style={{height: '1.875vw', zIndex: '1', boxSizing: 'border-box', }} href='https://www.eleanorauto.com/'><CompanyLogo1 alt='logo1' src={logo1} /></a>
      </ElDiv>
      <TitleDiv>
      <Title>
        DRIVE A NEW CAR WHENEVER YOU WANT
      </Title>
      <a style={{fontSize: '16px', fontWeight: 'bold', letterSpacing: '-0.47px', lineHeight: '54px', textDecoration: 'none', marginLeft: '5px', color: '#414A69'}} href="https://testflight.apple.com/join/dfAnfpPZ">Subscribe. Drive. Swap. Download Today <img src={arrow}/></a>
      </TitleDiv>
      <CarOuterDiv>
          <CarInnerDiv>
      <CarLeft alt='carleft' src={carleft} />
      <CarRight alt='carright' src={carright} />
      <CarMiddle alt='carmiddle' src={carmiddle} />
          </CarInnerDiv>
      </CarOuterDiv>
      <AppDiv>
        <AppImg src={currentVehicle}/>
      </AppDiv>
    </Section>
  );
}
