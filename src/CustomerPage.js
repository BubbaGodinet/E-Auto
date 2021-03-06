import styled from 'styled-components';
import {gsap} from "gsap/all";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {useEffect} from "react"
import {Section2} from './components/styles/Section2.styled'
import alex from './assets/guy.1b56a7ff.png'
import car from './assets/car-white-2.ec706134.png'
import logo from './assets/logo-black.a224c461.svg'
import arrow from './assets/arrow-right.a3256c0c.svg'

export default function CustomerPage() {
    
    const CustomerDiv = styled.div`
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        align-items: flex-end;
        position: relative;
        height: 80vh;
        width: 40vw;

        @media screen and (max-width: 1000px) {
            position: relative;
            height: unset;
            width: 120%;
            left: -10%;
            margin-top: 2vh;
         }
    `
    const CustomerInnerDiv = styled.div`
        position: absolute;
        left: 0px;
        top: 0px;
        height: 100%;
        width: 100%;
        overflow: hidden;
    `
    const BackgroundDiv  = styled.div`
        transform: translateX(-100%);
        width: 100%;
        height: 100%;
        background-color:  rgb(251, 200, 67);
    `
    const GuyImg = styled.img`
        transform: translateX(-100%);
        opacity: 0;
        width: 70%;

        @media only screen and (max-width: 1000px) {
            margin-top: 20%;
        }
    `
    const CarImg = styled.img`
        opacity: 0;
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 57vw;

        @media screen and (max-width: 1000px) {
            display: none;
        }
    `
    const ReviewDiv = styled.div`
        opacity: 1;
        flex: 1 1 0%;
        margin-left: 6vw;
        margin-top: 10vh;
        display: block;

        @media screen and (max-width: 1000px) {
            flex: unset;
            margin-left: 0px;
        }

    `
    const TextSpacerDiv = styled.div`
        background: rgb(244, 244, 245);
        height: 0.25vw;
        width: 100%;
        margin: 4.4vh 0px;

        @media screen and (max-width: 1000px) {
            height: 1vw;
            margin: 4.4vh 0px 1vh;
        }
    `
    const ReviewH2 = styled.h2`
        color: rgb(43, 49, 68);
        font-size: 3.9vw;
        font-weight: bold;
        line-height: 4.5vw;
        margin: 0px;
        white-space: pre-line;
        letter-spacing: -.1vw;

        @media screen and (max-width: 1000px) {
            font-size: 7vw;
            line-height: 8vw;
            white-space: unset;
            letter-spacing: .1vw;
        }
    `
    const ReviewP = styled.p`
        color: rgb(0, 0, 0);
        font-size: 1vw;
        font-weight: normal;
        line-height: 1.8vw;
        white-space: pre-line;
        margin-top: 2vw;
        width: 55%;

        @media only screen and (max-width: 1000px) {
            margin-top: 4vw;
            font-size: 3.5vw;
            line-height: 6vw;
            white-space: unset;
            width: 100%;
        }
    `
    const ReviewerP = styled.p`
        color: rgb(0, 0, 0);
        font-size: 0.75vw;
        font-weight: 600;
        letter-spacing: 0.02vw;
        line-height: 1.6vw;

        @media screen and (max-width: 1000px) {
            font-size: 3vw;
            letter-spacing: 0.02vw;
            line-height: 3vw;
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
        
        @media screen and (max-width: 1000px) {
            margin: 10vw 0px 3vw;
        }
    `
    const FAQDiv = styled.div`
        flex: 1 1 0%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: end;
        justify-content: flex-end;

        @media screen and (max-width: 1000px) {
            padding: 1vw 0px 6vw;
        }

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

            @media screen and (max-width: 1000px) {
                height: 4vw;
            }
        }

        a.faq {
            padding: 10px 20px;
            color: rgb(65, 74, 105);
            font-size: 1 vw;
            font-weight: 600;
            letter-spacing: -0.02vw;
            text-decoration: none;
            
            @media screen and (max-width: 1000px) {
                display: none;
            }
        }
    `
    const FAQSpacerDiv = styled.div`
        flex: 1 1 0%;
    `
    const DownloadDiv = styled.div`
    transform: translateY(0%);
    opacity: 1;
    `

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let tl = gsap.timeline({scrollTrigger: {
            trigger:'.reviewDiv', 
            start: 'top 80%'
        }
    });

        tl.to('.backgroundDiv', {duration: .45, opacity: 1, x:0})
          .to('.guyImg', {duration: .35,x:0, opacity: 1})
          .fromTo('.carImg', {x: '-100%', y: '50%'}, {duration: .25,x:'50%', opacity: 1}, "<")
          .from('.reviewDiv', {duration: .55, y: '-20%', opacity: 0}, ">")

        },[])
  
    return(
        <>
        <Section2>
            <CustomerDiv>
                <CustomerInnerDiv >
                    <BackgroundDiv className="backgroundDiv">
                    </BackgroundDiv>
                </CustomerInnerDiv>
                <GuyImg alt='guy' className='guyImg' src={alex}/>
                <CarImg alt='guy' className='carImg' src={car}/>
            </CustomerDiv>
            <ReviewDiv className="reviewDiv">
                <ReviewH2>CUSTOMERS WITH THAT NEW CAR SMELL</ReviewH2>
                <ReviewP className='review'>???With Eleanor I was able to drive 2 of my dream cars this year!  
                The process is always easy and affordable!???</ReviewP>
                <ReviewerP className='reviewer'>Alex Bateman, Interface Designer</ReviewerP>
                <TextSpacerDiv className='spacer'/>
                <DownloadDiv>
                    <a style={{fontSize: '16px', fontWeight: 'bold', letterSpacing: '-0.47px', 
                               lineHeight: '54px', textDecoration: 'none', marginLeft: '5px', color: '#414A69'}} 
                    href="https://testflight.apple.com/join/dfAnfpPZ">Available On The App Today <img src={arrow}/></a>
                 </DownloadDiv>
            </ReviewDiv>
        </Section2>
        <FooterDiv>
            <SpaceDiv/>
            <FAQDiv>
               <a className='logo' href='https://www.eleanorauto.com/'><img alt='logo' src={logo}/></a>
               <FAQSpacerDiv/>
               <a className='faq' href=''>About Us</a>
               <a className='faq' href=''>Terms of Use</a>
               <a className='faq' href=''>FAQ</a>
            </FAQDiv>
        </FooterDiv>
        </>
    )
}

