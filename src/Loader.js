import styled from 'styled-components';
import './loader.css'
import {LoaderSection} from './components/styles/LoaderSection.styled'
import {useEffect} from 'react'
import {gsap} from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
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

        @media screen and (max-width: 799px) {
            display: absolute;
            position: absolute;
            right: 25%;
            top: 20%;
        }

        @media screen and (min-width: 800px) and (max-width: 1300px) {
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
        height: 3%;
    `
    const Circle = styled.img`
        position: absolute;
        height: 13.1%;
    `
    const Dot = styled.img`
        position: absolute;
        height: 1%;
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