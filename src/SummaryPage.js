import styled from 'styled-components';
import { gsap } from "gsap";
import {SummarySection} from './components/styles/SummarySection.styled'
import coin from './assets/coin.39ba494c.svg'
import doc from './assets/document.31e848e2.svg'
import wrench from './assets/wrench.0772f3e4.svg'

export default function SummaryPage() {

    const SummaryWrapper = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    height: 100%;
    -webkit-box-pack: justify;
    justify-content: space-between;

    div {
        transform: translate3d(0px, 0px, 0px);
        opacity: 1;
        background-color: rgb(244, 244, 245);
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        flex-direction: column;
        width: 28.3vw;
        height: 28.3 vw;
    }

    img {
        height: 30%;
        box-sizing: border-box;
    }

    H2 {
        font-family: Bebas Neue,sans-serif;
        text-transform: uppercase;
        color: rgb(43, 49, 68);
        font-weight: bold;
        letter-spacing: -0.01vw;
        line-height: 1;
        margin: 2vw 0px 1vw;
    }

    p {
        white-space: pre-line;
        color: rgb(0, 0, 0);
        font-size: 0.875vw;
        font-weight: normal;
        letter-spacing: -0.03vw;
        line-height: 1.5;
        margin: 0px;
        width: 55%;
    }
    `
    return(
        <SummarySection>
            <SummaryWrapper>
                <div>
                    <img alt='coin' src={coin}/>
                    <div>
                        <h2>SIMPLY MONTHLY PRICING</h2>
                        <p>Pick your plan, pay the monthly price. Thats it. No hidden fees!</p>
                    </div>
                </div>
                <div>
                    <img alt='doc' src={doc}/>
                    <div>
                        <h2>VEHICLE INSURANCE INCLUDED</h2>
                        <p>That’s right, you’re covered.  All Eleanor plans include insurance coverage.</p>
                    </div>
                </div>
                <div>
                    <img alt='wrench' src={wrench}/>
                    <div>
                        <h2>MAINTENANCE IS COVERED</h2>
                        <p>Leave it us. Don’t worry about maintaining your vehicle. Eleanor covers that as well.</p>
                    </div>
                </div>
            </SummaryWrapper>
        </SummarySection>
    )
}