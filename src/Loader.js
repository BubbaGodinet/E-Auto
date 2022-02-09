import styled from 'styled-components';
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
        height: 13.2%;
    `
    const Dot = styled.img`
        position: absolute;
        height: 1%;
        right: 59.5vw;
        top: 43%;
        `
        
    useEffect(() => {
        gsap.registerPlugin(MotionPathPlugin)
        gsap.to('.dot', {
            duration: 4,
            repeat: -1, 
            motionPath: 
                 {path: 'M168.666,89.397 C157.306,54.594 192.389,16.136 219.835,5.726 244.65,-3.701 301.182,5.888 321.371,36.179 349.662,78.621 329.41,126.407 307.674,149.327 291.353,166.535 188.789,180.152 168.765,96.05 '}
        })
    },[])
    
    return (
        <LoaderSection>
            <LoaderDiv>
                <ImgDiv>
                    <Crown alt={crown} src={crown}/>
                    <Circle alt={circle} src={circle}/>
                    <Dot className='dot' alt={dot} src={dot}/>
                </ImgDiv>
            </LoaderDiv>
        </LoaderSection>
    )
}