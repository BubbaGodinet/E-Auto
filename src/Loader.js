import styled from 'styled-components';
import './loader.css'
import {LoaderSection} from './components/styles/LoaderSection.styled'
import {useEffect} from 'react'
import {gsap} from "gsap";
import crown from './assets/crown.png'
import circle from './assets/Oval.png'
import dot from './assets/dot.png'

export default function Loader() {

    const LoaderDiv = styled.div`
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        width: 50%;
        height: 50%;
        -webkit-box-pack: justify;
        justify-content: space-between;
        justify-content: center; 
        
        @media screen and (max-width: 480px) {
            display: absolute;
            position: absolute;
            right: 25%;
            top: 20%;
        }

        @media screen and (min-width: 481px) and (max-width: 767px) {
            position: absolute;
            right: 25%;
            top: 20%;
        }

        @media screen and (min-width: 768px) and (max-width: 1024px) {
            position: absolute;
            right: 25%;
            top: 20%;
        }

        @media screen and (min-width: 1025px) and (max-width: 1280px) {
            position: absolute;
            right: 25%;
            top: 20%;
        }
    `
    const ImgDiv = styled.div`
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        width: 100%;
    `
    const Crown = styled.img`
        position: absolute;
        height: auto;
    `
    const Circle = styled.img`
        position: absolute;
        height: auto;

    `
    const Dot = styled.img`
        position: absolute;
        height: auto;
        `
    
    return (
        <LoaderSection>
            <LoaderDiv>
                <ImgDiv>
                    <Crown alt={crown} src={crown}/>
                    <Circle alt={circle} src={circle}></Circle>
                    <Dot className='dot' alt={dot} src={dot}/>
                </ImgDiv>
            </LoaderDiv>
        </LoaderSection>
    )
}