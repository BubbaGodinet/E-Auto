import styled from 'styled-components';
import {useEffect, useState, useRef} from 'react'
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Section2} from './components/styles/Section2.styled'
import arrowleft from './assets/arrow-left.4538fc59.svg'
import arrowright from './assets/arrow-right.a3256c0c (1).svg'
import pump from './assets/pump-icon.112b2e73.svg'
import hp from './assets/line-graph-icon.9dbc336a.svg'
import gauge from './assets/gauge-icon.995b6546.svg'
import rover from './assets/rover-left.6589716b.png'
import pLeft from './assets/porsche-left.5d241960.png'

gsap.registerPlugin(ScrollTrigger);

export default function SelectVehiclePage() {
    
    
    const ContainerDiv = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    height: 60vh;
    width: 33vw;
    padding: 30px;
    min-height: 40vw;
    @media screen and (max-width: 1000px) {
        height: 50vh;
        min-height: 80vw;
        margin-top: 1vh;
        width: 100%;
        padding: 30px;
    }
    @media (min-width:800px) and (max-width:1200px) {
        height: 60vh;
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
    transform: translateX(100%);
    width: 100%;
    height: 100%;
    opacity: 1;
    background-color: rgb(251, 200, 67);
    `
    const ArrowsContainer = styled.div`
    transform: translateY(0%);
    opacity: 1;
    box-sizing: border-box;
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
    const DataContainer = styled.div`
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
    bottom: 0px;
    right: 0px;
    @media screen and (max-width: 1000px) {
        width: 90vw;
        left: -40%;
    }
    @media (min-width: 800px) and (max-width: 1200px) {
        top: 30vw;
    }
    `
    const CarImg1 = styled.img`
    opacity: 1;
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
    @media screen and (max-width: 1000px) {
        font-size: 7vw;
        line-height: 8.5vw;
        white-space: unset;
    }
    @media screen and (max-width: 1300px) {
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
    const [carState, setCarState] = useState(true);
    // const carState = useRef(true);
    const backgroundRef = useRef();
    const generatedCarRef = useRef();
    const selectText = useRef();
    const dataText = useRef();
    const tl = gsap.timeline();
    
    useEffect(() => {
        gsap.to(backgroundRef.current, {scrollTrigger: {trigger: '.background', start: 'top center', markers:true}, duration: .5, x:0}, 'Start')
        gsap.to('.dataText', {scrollTrigger: {trigger: '.dataText', start: 'top center'}, delay: .4, opacity: 1}, 'Start');
        gsap.from(selectText.current, {scrollTrigger: {trigger: '.background', start: 'top center'}, duration: .55, y: -300, opacity: 0, stagger: .20}, 'Start')
        gsap.fromTo('.car1', {x: '1000%',y: '30%'}, {scrollTrigger: {trigger: '.background', start: 'top center', markers:true}, duration: .65, x: '40%', opacity: 1}, 'Start')
        if (carState === true) {
            tl.fromTo('.car1', {x: '50%',y: '110%', opacity: 0}, {duration: .65, x: '40%', opacity: 1})
            tl.fromTo('.car2', {x: '50%',y: '30%', opacity: 0}, {duration: .65, x: '-20%', opacity: 0})
            tl.to('.dataText', {scrollTrigger: {trigger: '.dataText', start: 'top center'},  opacity: 1}, 'Start');
            tl.to('.dataText2', {scrollTrigger: {trigger: '.dataText', start: 'top center'},  opacity: 1}, 'Start');
        } else {
            tl.fromTo('.car1', {x: '50%',y: '110%', opacity: 1}, {duration: .35, x: '-20%', opacity: 0})
            tl.fromTo('.car2', {x: '50%',y: '30%', opacity: 0}, {duration: .65, x: '40%', opacity: 1})
            tl.to('.dataText', {scrollTrigger: {trigger: '.dataText', start: 'top center'}, opacity: 1}, 'Start');
            tl.to('.dataText2', {scrollTrigger: {trigger: '.dataText', start: 'top center'}, opacity: 1}, 'Start');
        }
    },[carState])


    function handleSwitch() {
        setCarState(!carState)
    }

    return(
        <Section2>
            <ContainerDiv>
                <SelectorDiv>
                    <SelectorBackGround className='.background' ref={backgroundRef}/>
                </SelectorDiv>
                <ArrowsContainer>
                    <ArrowsDiv> 
                        <ArrowButton> <ArrowButtonImg onClick={handleSwitch} className='dataText'ref={dataText} alt='leftarrow' src={arrowleft} /> </ArrowButton>
                        <ArrowButton> <ArrowButtonImg onClick={handleSwitch}className='dataText' ref={dataText} alt='rightarrow' src={arrowright} /> </ArrowButton>
                    </ArrowsDiv>
                   {carState ? <DataContainer>
                        <CarInfoDiv>
                            <NameH3 className='dataText' ref={dataText}>Land Rover</NameH3>
                            <YearH4 className='dataText' ref={dataText}>2019 - Range Rover Velar</YearH4>
                        </CarInfoDiv>
                        <Table>
                            <Tbody>
                                <Tr>
                                    <TdImg> 
                                        <IconImg className='dataText' ref={dataText} alt='pump' src={pump}/> 
                                        <Span className='dataText' ref={dataText}>MPG</Span>
                                    </TdImg>
                                     <Td className='dataText' ref={dataText}>25/29</Td>
                                </Tr>
                                <Tr>
                                    <TdImg> 
                                        <IconImg className='dataText' ref={dataText} alt='hp' src={hp}/> 
                                        <Span className='dataText' ref={dataText}>HP</Span>
                                    </TdImg>
                                    <Td className='dataText' ref={dataText}>247</Td>
                                </Tr>
                                <Tr>
                                    <TdImg> 
                                        <IconImg className='dataText' ref={dataText} alt='gauge' src={gauge}/> 
                                        <Span className='dataText' ref={dataText}>0-60</Span>
                                    </TdImg>
                                   <Td className='dataText' ref={dataText}>6.4</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </DataContainer>
                    :
                    <DataContainer>
                        <CarInfoDiv>
                            <NameH3 className='dataText2' ref={dataText}>Porsche</NameH3>
                            <YearH4 className='dataText2' ref={dataText}>2019 - 911 - Carrera S</YearH4>
                        </CarInfoDiv>
                        <Table>
                            <Tbody>
                                <Tr>
                                    <TdImg> 
                                        <IconImg className='dataText2' ref={dataText} alt='pump' src={pump}/> 
                                        <Span className='dataText2' ref={dataText}>MPG</Span>
                                    </TdImg>
                                     <Td className='dataText2' ref={dataText}>19/24</Td>
                                </Tr>
                                <Tr>
                                    <TdImg> 
                                        <IconImg className='dataText2' ref={dataText} alt='hp' src={hp}/> 
                                        <Span className='dataText2' ref={dataText}>HP</Span>
                                    </TdImg>
                                    <Td className='dataText2' ref={dataText}>443</Td>
                                </Tr>
                                <Tr>
                                    <TdImg> 
                                        <IconImg className='dataText2' ref={dataText} alt='gauge' src={gauge}/> 
                                        <Span className='dataText2' ref={dataText}>0-60</Span>
                                    </TdImg>
                                   <Td className='dataText2' ref={dataText}>3.2</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </DataContainer>
                    }
                </ArrowsContainer>
                <CarImgDiv>
                    <CarImg1 ref={generatedCarRef} className='car1'alt='generatedCar' src={rover}/>
                    <CarImg2 ref={generatedCarRef} className='car2'alt='generatedCar' src={pLeft}/>
                </CarImgDiv>
            </ContainerDiv>
            <TextContainer ref={selectText}>
                <TitleH2 ref={selectText}>SELECT A VEHICLE FROM YOUR PHONE.</TitleH2>
                <Summary ref={selectText}>Select from a wide range of luxury vehicles in our inventory.  Drive it for a month, trade it the next for something else you have always wanted to own.</Summary>
            </TextContainer>
        </Section2>
    )
}