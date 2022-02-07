import styled from 'styled-components';
import {useEffect, useRef} from 'react'
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Section2} from './components/styles/Section2.styled'
import arrowleft from './assets/arrow-left.4538fc59.svg'
import arrowright from './assets/arrow-right.a3256c0c (1).svg'
import pump from './assets/pump-icon.112b2e73.svg'
import hp from './assets/line-graph-icon.9dbc336a.svg'
import gauge from './assets/gauge-icon.995b6546.svg'
import rover from './assets/rover-left.6589716b.png'

gsap.registerPlugin(ScrollTrigger);

export default function SelectVehiclePage() {
    
    
    const ContainerDiv = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    height: 70vh;
    width: 33vw;
    padding: 30px;
    min-height: 40vw;
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
    `
    const DataContainer = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    `
    const CarInfoDiv = styled.div`
    z-index: 1;
    margin-top: 25%;
    margin-left: 20%;
    `
    const NameH3 = styled.h3`
    color: rgb(0, 0, 0);
    font-size: 4vw;
    font-weight: bold;
    margin: 0px;
    opacity: 0;
    `
    const YearH4 = styled.h4`
    color: rgb(65, 74, 105);
    font-size: 1.08vw;
    font-weight: normal;
    margin: 0px;
    line-height: 0.5;
    opacity: 0;
    `
    const Table = styled.table`
    z-index: 1;
    width: 42%;
    margin-left: 20%;
    margin-top: 13%;
    `
    const Tbody = styled.tbody`
    
    `
    const Tr = styled.tr`
    height: 3vw;
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
    `
    const Td = styled.td`
    color: rgb(0, 0, 0);
    font-family: "Bebas Neue", sans-serif;
    font-size: 2.2vw;
    font-weight: bold;
    padding-top: 5px;
    opacity: 0;
    `
    const Span = styled.span`
    position: relative;
    top: -0.3vw;
    left: 0.6vw;
    opacity: 0;
    `
    const CarImgDiv = styled.div`
    opacity: 1;
    transform: translateX(0%);
    position: absolute;
    width: 43vw;
    bottom: 0px;
    right: 0px;
    `
    const CarImg = styled.img`
    transform: translate(40%, 30%);
    opacity: 1;
    width: 100%;
    `
    const TextContainer = styled.div`
    flex: 1 1 0%;
    padding-left: 10vw;
    margin-top: 10vh;
    `
    const TitleH2 = styled.h2`
    color: rgb(43, 49, 68);
    font-size: 6vw;
    font-weight: bold;
    line-height: 6vw;
    margin: 0px;
    white-space: pre-line;
    `
    const Summary = styled.p`
    color: rgb(0, 0, 0);
    font-size: 1vw;
    font-weight: normal;
    line-height: 1.8vw;
    width: 90%;
    white-space: pre-line;
    margin-top: 2vw;
    `
    useEffect(() => {
    gsap.to('.background', {scrollTrigger: '.background', duration: .5, x:0}, 'Start');
    gsap.to('.NameH3, .YearH4, .span, .td, .icon', {scrollTrigger: '.NameH3, .YearH4', duration: .75, delay: .4, opacity: 1}, 'Start');
    },[])

    return(
        <Section2>
            <ContainerDiv>
                <SelectorDiv>
                    <SelectorBackGround className='background'/>
                </SelectorDiv>
                <ArrowsContainer>
                    <ArrowsDiv> 
                        <ArrowButton> <ArrowButtonImg alt='leftarrow' src={arrowleft} /> </ArrowButton>
                        <ArrowButton> <ArrowButtonImg alt='rightarrow' src={arrowright} /> </ArrowButton>
                    </ArrowsDiv>
                    <DataContainer>
                        <CarInfoDiv>
                            <NameH3 className='NameH3'>Land Rover</NameH3>
                            <YearH4 className='YearH4'>2019 - Range Rover Velar</YearH4>
                        </CarInfoDiv>
                        <Table>
                            <Tbody>
                                <Tr>
                                    <TdImg> 
                                        <IconImg className='icon' alt='pump' src={pump}/> 
                                        <Span className='span'>MPG</Span>
                                    </TdImg>
                                    <Td className='td'>25/29</Td>
                                </Tr>
                                <Tr>
                                    <TdImg> 
                                        <IconImg className='icon' alt='hp' src={hp}/> 
                                        <Span className='span'>HP</Span>
                                    </TdImg>
                                    <Td className='td'>247</Td>
                                </Tr>
                                <Tr>
                                    <TdImg> 
                                        <IconImg className='icon' alt='gauge' src={gauge}/> 
                                        <Span className='span'>0-60</Span>
                                    </TdImg>
                                    <Td className='td'>6.4</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </DataContainer>
                </ArrowsContainer>
                <CarImgDiv>
                    <CarImg alt='generatedCar' src={rover}/>
                </CarImgDiv>
            </ContainerDiv>
            <TextContainer>
                <TitleH2>SELECT A VEHICLE FROM YOUR PHONE.</TitleH2>
                <Summary>Select from a wide range of luxury vehicles in our inventory.  Drive it for a month, trade it the next for something else you have always wanted to own.</Summary>
            </TextContainer>
        </Section2>
    )
}