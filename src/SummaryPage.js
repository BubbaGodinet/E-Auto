import styled from 'styled-components';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {useEffect} from "react"
import {SummarySection} from './components/styles/SummarySection.styled'
import coin from './assets/coin.39ba494c.svg'
import doc from './assets/document.31e848e2.svg'
import wrench from './assets/wrench.0772f3e4.svg'

gsap.registerPlugin(ScrollTrigger);
const plugins = [ ScrollTrigger ]
export default function SummaryPage() {

    const OuterDiv = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    height: 100%;
    -webkit-box-pack: justify;
    justify-content: space-between;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
    `
    const InnerDiv = styled.div`
    transform: translate3d(0px, 0px, 0px);
    opacity: 0;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(244, 244, 245);
    height: 28.3vw;
    width: 28.3vw;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        height: 100vw;
        width: 100vw;
        margin-bottom: 3vw;
    }
    `
    const InnerTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    `
    const IconImg = styled.img`
    height: 30%;
    `
    const H2 = styled.h2`
    color: rgb(43, 49, 68);
    font-size: 1.15vw;
    font-weight: bold;
    letter-spacing: -0.01vw;
    line-height: 1;
    margin: 2vw 0px 1vw;
    text-align: center;
    letter-spacing: -1px;
    flex-direction: column;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        font-size: 5vw;
        letter-spacing: -0.01vw;
        line-height: 1;
        margin: 10vw 0px 4vw;
    }
    `
    const P = styled.p`
    white-space: pre-line;
    color: rgb(0, 0, 0);
    font-size: 0.875vw;
    font-weight: normal;
    letter-spacing: -0.03vw;
    line-height: 1.5;
    margin: 0px;
    width: 18vw;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        font-size: 3vw;
        letter-spacing: -0.01vw;
        width: 60vw;
    }
    `

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.innerDiv', {scrollTrigger: {trigger: '.innerDiv', start: 'top center'}, duration: .75, y: 70, opacity:1, stagger: .30});
        },[])
        
    return(
        <SummarySection>
                <OuterDiv>
                    <InnerDiv className='innerDiv'>
                    <IconImg alt='coin' src={coin}/>
                    <InnerTextDiv>
                        <H2>SIMPLY MONTHLY PRICING</H2>
                        <P>Pick your plan, pay the monthly price. <br/> Thats it. No hidden fees!</P>
                    </InnerTextDiv>
                    </InnerDiv>
                </OuterDiv>
                <OuterDiv>
                  <InnerDiv className='innerDiv'>
                    <IconImg alt='doc' src={doc}/>
                    <InnerTextDiv>
                        <H2>VEHICLE INSURANCE INCLUDED</H2>
                        <P>That’s right, you’re covered.  All Eleanor plans include insurance coverage.</P>
                    </InnerTextDiv>
                    </InnerDiv>
                </OuterDiv>
                <OuterDiv>
                <InnerDiv className='innerDiv'>
                    <IconImg alt='wrench' src={wrench}/>
                    <InnerTextDiv>
                        <H2>MAINTENANCE IS COVERED</H2>
                        <P>Leave it us. Don’t worry about maintaining your vehicle. Eleanor covers that as well.</P>
                    </InnerTextDiv>
                    </InnerDiv>
                </OuterDiv>
        </SummarySection>
    )
}