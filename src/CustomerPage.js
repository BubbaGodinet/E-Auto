import styled from 'styled-components';
import { gsap } from "gsap";
import {Section2} from './components/styles/Section2.styled'
import alex from './assets/guy.1b56a7ff.png'
import car from './assets/car-white-2.ec706134.png'
import logo from './assets/logo-black.a224c461.svg'
import arrow from './assets/arrow-right.a3256c0c.svg'

export default function CustomerPage() {

    const CustomerDiv = styled.div`
    background-color:  rgb(251, 200, 67);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    height: 80vh;
    width: 40vw;
    `
    const GuyImg = styled.img`
        transform: translateX(0%);
        opacity: 1;
        width: 70%;
    `
    const CarImg = styled.img`
    transform: translate(50%, 50%);
    opacity: 1;
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 57vw;
    `
    const ReviewDiv = styled.div`
    transform: translateY(0%);
    opacity: 1;
    flex: 1 1 0%;
    margin-left: 6vw;
    margin-top: 10vh;
    display: block;

    h2 { 
        color: rgb(43, 49, 68);
        font-size: 3vw;
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

    p.review {
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

    p.reviewer {
        color: rgb(0, 0, 0);
        font-size: 0.75vw;
        font-weight: 600;
        letter-spacing: 0.02vw;
        line-height: 1.6vw;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;

    }

    div.spacer {
         background: rgb(244, 244, 245);
         height: 0.25vw;
         width: 100%;
         margin: 4.4vh 0px;
    
         display: block;
    }
    `
    const FooterDiv = styled.div`
    display: flex;
    width: 100%;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0px 5% 6.25vw;
    flex-wrap: wrap;
    
    `
    const SpaceDiv = styled.div`
    background: rgb(244, 244, 245);
    height: 1px;
    width: 100%;
    flex: 1 1 100%;
    margin: 6.25vw 0px 1.875vw;
    display: block;
    `
    const FAQDiv = styled.div`
    flex: 1 1 0%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;

    a.logo { 
        padding: 0px;
        color: rgb(65, 74, 105);
        font-size: 1.2vw;
        font-weight: 600;
        letter-spacing: -0.02vw;
        text-decoration: none;  

        cursor: pointer;
    }

    img { 
        height: 1.2vw;

    }

    a.faq {
        padding: 10px 20px;
        color: rgb(65, 74, 105);
        font-size: 1.2vw;
        font-weight: 600;
        letter-spacing: -0.02vw;
        text-decoration: none;
    }
    
    div {
        flex: 1 1 0%;

        display: block;
    }
    `
    const DownloadDiv = styled.div`
    transform: translateY(0%);
    opacity: 1;
    display: block;
    `
    return(
        <>
        <Section2>
            <CustomerDiv>
                <GuyImg alt='guy' src={alex}/>
                <CarImg alt='guy' src={car}/>
            </CustomerDiv>
            <ReviewDiv>
                <h2>CUSTOMERS WITH THAT NEW CAR SMELL.</h2>
                <p className='review'>“With Eleanor I was able to drive 2 of my dream cars this year!  The process is always easy and affordable!”</p>
                <p className='reviewer'>Alex Bateman, Interface Designer</p>
                <div className='spacer'/>
                <DownloadDiv>
                    <a style={{fontSize: '16px', fontWeight: 'bold', letterSpacing: '-0.47px', lineHeight: '54px', textDecoration: 'none', marginLeft: '5px', color: '#414A69'}} href="https://testflight.apple.com/join/dfAnfpPZ">Available On The App Today <img src={arrow}/></a>
                 </DownloadDiv>
            </ReviewDiv>
        </Section2>
        <FooterDiv>
            <SpaceDiv/>
            <FAQDiv>
               <a className='logo' href='https://www.eleanorauto.com/'><img alt='logo' src={logo}/></a>
               <div/>
               <a className='faq' href='http://help.eleanorauto.com'>About Us</a>
               <a className='faq' href='http://help.eleanorauto.com'>Terms of Use</a>
               <a className='faq' href='http://help.eleanorauto.com'>FAQ</a>
            </FAQDiv>
        </FooterDiv>
        </>
    )
}

