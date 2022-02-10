import styled from 'styled-components';
import {useEffect, useState, useRef} from 'react'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {Section2} from './components/styles/Section2.styled'
import arrowleft from './assets/arrow-left.4538fc59.svg'
import arrowright from './assets/arrow-right.a3256c0c (1).svg'
import pump from './assets/pump-icon.112b2e73.svg'
import hp from './assets/line-graph-icon.9dbc336a.svg'
import gauge from './assets/gauge-icon.995b6546.svg'
import rover from './assets/rover-left.6589716b.png'
import pLeft from './assets/porsche-left.5d241960.png'

export default function SelectVehiclePage() {
    
    
    const ContainerDiv = styled.div`
        display: flex;
        position: relative;
        flex-direction: column;
        height: 60vh;
        width: 33vw;
        padding: 30px;
        min-height: 40vw;

        @media screen and (max-width: 480px) {
            height: 90vw;
            min-height: 80vw;
            margin-top: 1vh;
            width: 100%;
            padding: 30px;
        }

        @media screen and (min-width: 481px) and (max-width:767px) {
            height: 90vw;
            min-height: 80vw;
            margin-top: 1vh;
            width: 100%;
            padding: 30px;
        }

        @media screen and (min-width: 768px) and (max-width:1024px) {
            height: 50vh;
            min-height: 80vw;
            margin-top: 1vh;
            width: 100%;
            padding: 30px;
        }
    `
    const SelectorDiv = styled.div`
        position: absolute;
        left: 0px;
        top: 0px;
        height: 100%;
        width: 100%;
        overflow: hidden;
    `
    const SelectorBackGround = styled.div`
        width: 100%;
        height: 100%;
        opacity: 1;
        background-color: rgb(251, 200, 67);
    `
    const ArrowsContainer = styled.div`
        transform: translateY(0%);
        opacity: 1;
    `
    const ArrowsDiv = styled.div`
        position: relative;
        z-index: 2;
        display: flex;
        -webkit-box-pack: end;
        justify-content: flex-end;
        -webkit-box-align: center;
        align-items: center;
    `
    const ArrowButton = styled.button`
        appearance: none;
        border: none;
        background: none;
        padding: 10px 15px;
        width: 53px;
        height: 30px;
        font-size: 0px;
        cursor: pointer;
    `
    const ArrowButtonImg = styled.img`
        width: 100%;
        height: 100%;
        opacity: 0;
    `
    const DataContainer1 = styled.div`
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;

        @media screen and (max-width: 1000px) {
            top: 13vw;
            left: 5vw;
        }
    `
    const DataContainer2 = styled.div`
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;

        @media screen and (max-width: 1000px) {
            top: 13vw;
            left: 5vw;
        }
    `
    const CarInfoDiv = styled.div`
        z-index: 1;
        margin-top: 25%;
        margin-left: 20%;

        @media screen and (max-width: 1000px) {
            margin-left: 0%;
            width: 66%;
            margin-top: -8%;
        }
    `
    const NameH3 = styled.h3`
        color: rgb(0, 0, 0);
        font-size: 2vw;
        font-weight: bold;
        margin: 0px;
        opacity: 0;

        @media screen and (max-width: 1000px) {
            font-size: 6vw;
            margin-top: 10px;
            margin-left: 0px;
            letter-spacing: -0.3vw;
        }
    `
    const YearH4 = styled.h4`
        color: rgb(65, 74, 105);
        font-size: .65vw;
        font-weight: normal;
        line-height: 0.5;
        opacity: 0;

        @media screen and (max-width: 1000px) {
            font-size: 2.5vw;
            line-height: 0.8;
            letter-spacing: -0.3vw;
        }
    `
    const Table = styled.table`
        z-index: 1;
        width: 42%;
        margin-left: 20%;
        margin-top: 13%;

        @media screen and (max-width: 1000px) {
            width 55%;
            margin-left: 0%;
            margin-top: 5%;
        }
    `
    const Tbody = styled.tbody`
    
    `
    const Tr = styled.tr`
        height: 3vw;

        @media screen and (max-width: 1000px) {
            height: 12vw;
            width: 33%;
            margin-left: 0%;
            margin-top: 5%;
        }
    `
    const TdImg = styled.td`
        color: rgb(0, 0, 0);
        font-family: "Bebas Neue", sans-serif;
        font-size: 1vw;
        font-weight: bold;
        margin-left: 0.6vw;
    `
    const IconImg = styled.img`
        width: 1.45vw;
        opacity: 0;

        @media screen and (max-width: 1000px) {
            width: 6vw;
        }
    `
    const Td = styled.td`
        color: rgb(0, 0, 0);
        font-family: "Bebas Neue", sans-serif;
        font-size: 1.5vw;
        font-weight: bold;
        padding-top: 5px;
        opacity: 0;

        @media screen and (max-width: 1000px) {
            font-size: 5vw;
            padding-top: 0.5vw;
        }
    `
    const Span = styled.span`
        position: relative;
        top: -0.3vw;
        left: 0.6vw;
        opacity: 0;

        @media screen and (max-width: 1000px) {
            font-size: 3vw;
            position: relative;
            top: -1.3vw;
            left: 2vw;
        }
    `
    const CarImgDiv = styled.div`
        opacity: 1;
        transform: translateX(0%);
        position: absolute;
        width: 43vw;
        bottom: -31%;
        right: 0px;

        @media screen and (max-width: 480px) {
            width: 90vw;
            left: -40%;
            top: 65vw;
        }

        @media screen and (min-width: 481px) and (max-width:767px) {
            width: 90vw;
            left: -40%;
            top: 65vw;
        }

        @media screen and (min-width: 768px) and (max-width: 1200px) {
            left: -40%;
            width: 90vw;
            top: 54vw;
        }
    `
    const CarImg1 = styled.img`
        opacity: 0;
        width: 100%;
        
        @media screen and (max-width: 1000px) {
            top: 10vw;
        }
    `
    const CarImg2 = styled.img`
        opacity: 0;
        width: 100%;

        @media screen and (max-width: 1000px) {
            top: 10vw;
        }
    `
    const TextContainer = styled.div`
        flex: 1 1 0%;
        padding-left: 10vw;
        margin-top: 10vh;

        @media screen and (max-width: 1000px) {
            padding-left: 0px;
            margin-top: 12vh;
        }
    `
    const TitleH2 = styled.h2`
        color: rgb(43, 49, 68);
        font-size: 4vw;
        font-weight: bold;
        line-height: 4.5vw;
        margin: 0px;
        white-space: pre-line;

        @media screen and (max-width: 767px) {
            font-size: 7vw;
            line-height: 8.5vw;
            white-space: unset;
        }

        @media screen and (min-width: 768px) and (max-width: 1300px) {
            font-size: 6vw;
            line-height: 6.5vw;
            white-space: unset;
        }
    `
    const Summary = styled.p`
        color: rgb(0, 0, 0);
        font-size: 1vw;
        font-weight: normal;
        line-height: 1.8vw;
        width: 90%;
        white-space: pre-line;
        margin-top: 2vw;
        width: 30vw;

        @media screen and (max-width: 1000px) {
            margin-top: 4vw;
            font-size: 3.5vw;
            line-height: 6vw;
            white-space: unset;
            width: 100%;
        }
    `

    const [index, setIndex] = useState(0)
    const backgroundRef = useRef();
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

            gsap.to('.arrowBttns', {scrollTrigger: {trigger: backgroundRef.current, start: 'top center'}, opacity: 1})
        if (index === 0) {
            gsap.fromTo(backgroundRef.current, {x:'100%'},{scrollTrigger: {trigger: backgroundRef.current, start: 'top center'}, duration: .45, x:'0%'})
            gsap.to('.arrowBttns', {scrollTrigger: {trigger: '.arrowBttns', start: 'top center'}, opacity: 1})
            gsap.from('.selectText', {scrollTrigger: {trigger: '.selectText', start: 'top center'}, duration: .55, y: -300, opacity: 0, stagger: .20})
            gsap.to('.dataText', {scrollTrigger: {trigger: '.dataText', start: 'top center'}, delay: .4, opacity: 1});
            gsap.fromTo('.car1', {x: '200%',y: '30%', opacity: 0}, {scrollTrigger: {trigger: '.dataText', start: 'top center'}, duration: .65, x: '40%', opacity: 1})    
        } else if (index % 2 === 0 && index > 0) {
            gsap.fromTo('.car1', {x: '60%',y: '30%', opacity: 0}, {duration: .65, x: '40%', opacity: 1})
            gsap.fromTo('.car2', {x: '50%',y: '-70%', opacity: 1}, {duration: .65, x: '-20%', opacity: 0})
            gsap.fromTo('.dataText', {opacity:1},{opacity: 0, duration: .75, y: '-30%'});
            gsap.fromTo('.dataText2', {opacity: 0},{opacity: 1, duration: .75});
        } else if (index % 2 === 1) {
            gsap.fromTo('.car1', {x: '60%',y: '30%', opacity: 1}, {duration: .35, x: '-20%', opacity: 0})
            gsap.fromTo('.car2', {x: '50%',y: '-70%', opacity: 0}, {duration: .65, x: '40%', opacity: 1})
            gsap.fromTo('.dataText', {opacity: 0},{opacity: 1});
            gsap.fromTo('.dataText2', {opacity:1},{opacity: 0, duration: .75, y: '-30%'});
        }
    }, [index])

    function handleSwitch() {
        setIndex(index + 1)
    }

    return(
        <Section2>
            <ContainerDiv>
                <SelectorDiv>
                    <SelectorBackGround className='.selectBackground' ref={backgroundRef}/>
                </SelectorDiv>
                <ArrowsContainer>
                    <ArrowsDiv> 
                        <ArrowButton> <ArrowButtonImg onClick={handleSwitch} className='arrowBttns' alt='leftarrow' src={arrowleft} /> </ArrowButton>
                        <ArrowButton> <ArrowButtonImg onClick={handleSwitch} className='arrowBttns' alt='rightarrow' src={arrowright} /> </ArrowButton>
                    </ArrowsDiv>
                    <DataContainer1 className='dataContainer'>
                        <CarInfoDiv>
                            <NameH3 className='dataText'>Land Rover</NameH3>
                            <YearH4 className='dataText'>2019 - Range Rover Velar</YearH4>
                        </CarInfoDiv>
                        <Table>
                            <Tbody>
                                <Tr>
                                    <TdImg> 
                                        <IconImg className='dataText'  alt='pump' src={pump}/> 
                                        <Span className='dataText' >MPG</Span>
                                    </TdImg>
                                     <Td className='dataText' >25/29</Td>
                                </Tr>
                                <Tr>
                                    <TdImg> 
                                        <IconImg className='dataText' alt='hp' src={hp}/> 
                                        <Span className='dataText' >HP</Span>
                                    </TdImg>
                                    <Td className='dataText'>247</Td>
                                </Tr>
                                <Tr>
                                    <TdImg> 
                                        <IconImg className='dataText'  alt='gauge' src={gauge}/> 
                                        <Span className='dataText' >0-60</Span>
                                    </TdImg>
                                   <Td className='dataText' >6.4</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </DataContainer1>
                    <DataContainer1 className='dataContainer'>
                        <CarInfoDiv>
                            <NameH3 className='dataText1'>Land Rover</NameH3>
                            <YearH4 className='dataText1'>2019 - Range Rover Velar</YearH4>
                        </CarInfoDiv>
                        <Table>
                            <Tbody>
                                <Tr>
                                    <TdImg> 
                                        <IconImg className='dataText1'  alt='pump' src={pump}/> 
                                        <Span className='dataText1' >MPG</Span>
                                    </TdImg>
                                     <Td className='dataText1' >25/29</Td>
                                </Tr>
                                <Tr>
                                    <TdImg> 
                                        <IconImg className='dataText1' alt='hp' src={hp}/> 
                                        <Span className='dataText1' >HP</Span>
                                    </TdImg>
                                    <Td className='dataText1'>247</Td>
                                </Tr>
                                <Tr>
                                    <TdImg> 
                                        <IconImg className='dataText1'  alt='gauge' src={gauge}/> 
                                        <Span className='dataText1' >0-60</Span>
                                    </TdImg>
                                   <Td className='dataText1' >6.4</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </DataContainer1>
                    <DataContainer2>
                        <CarInfoDiv>
                            <NameH3 className='dataText2' >Porsche</NameH3>
                            <YearH4 className='dataText2' >2019 - 911 Carrera S</YearH4>
                        </CarInfoDiv>
                        <Table>
                            <Tbody>
                                <Tr>
                                    <TdImg> 
                                        <IconImg className='dataText2'  alt='pump' src={pump}/> 
                                        <Span className='dataText2'>MPG</Span>
                                    </TdImg>
                                     <Td className='dataText2' >19/24</Td>
                                </Tr>
                                <Tr>
                                    <TdImg> 
                                        <IconImg className='dataText2'  alt='hp' src={hp}/> 
                                        <Span className='dataText2' >HP</Span>
                                    </TdImg>
                                    <Td className='dataText2'>443</Td>
                                </Tr>
                                <Tr>
                                    <TdImg> 
                                        <IconImg className='dataText2'  alt='gauge' src={gauge}/> 
                                        <Span className='dataText2' >0-60</Span>
                                    </TdImg>
                                   <Td className='dataText2' >3.2</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </DataContainer2>
                    <DataContainer1 className='dataContainer'>
                        <CarInfoDiv>
                            <NameH3 className='dataText3'>Porsche</NameH3>
                            <YearH4 className='dataText3'>2019 - 911 Carrera S</YearH4>
                        </CarInfoDiv>
                        <Table>
                            <Tbody>
                                <Tr>
                                    <TdImg> 
                                        <IconImg className='dataText3'  alt='pump' src={pump}/> 
                                        <Span className='dataText3' >MPG</Span>
                                    </TdImg>
                                     <Td className='dataText3' >19/24</Td>
                                </Tr>
                                <Tr>
                                    <TdImg> 
                                        <IconImg className='dataText3' alt='hp' src={hp}/> 
                                        <Span className='dataText3' >HP</Span>
                                    </TdImg>
                                    <Td className='dataText3'>443</Td>
                                </Tr>
                                <Tr>
                                    <TdImg> 
                                        <IconImg className='dataText3'  alt='gauge' src={gauge}/> 
                                        <Span className='dataText3' >0-60</Span>
                                    </TdImg>
                                   <Td className='dataText3' >3.2</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </DataContainer1>
                </ArrowsContainer>
                <CarImgDiv>
                    <CarImg1 className='car1'alt='generatedCar' src={rover}/>
                    <CarImg2  className='car2'alt='generatedCar' src={pLeft}/>
                </CarImgDiv>
            </ContainerDiv>
            <TextContainer className= 'selectText'>
                <TitleH2 className= 'selectText'>SELECT A VEHICLE FROM YOUR PHONE.</TitleH2>
                <Summary className= 'selectText'>Select from a wide range of luxury vehicles in our inventory.  Drive it for a month, trade it the next for something else you have always wanted to own.</Summary>
            </TextContainer>
        </Section2>
    )
}