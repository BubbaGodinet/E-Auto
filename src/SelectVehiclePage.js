import styled from 'styled-components';
import { gsap } from "gsap";
import {Section2} from './components/styles/Section2.styled'
import arrowleft from './assets/arrow-left.4538fc59.svg'
import arrowright from './assets/arrow-right.a3256c0c (1).svg'
import pump from './assets/pump-icon.112b2e73.svg'
import hp from './assets/line-graph-icon.9dbc336a.svg'
import gauge from './assets/gauge-icon.995b6546.svg'

export default function SelectVehiclePage() {

    
    return(
        <Section2>
            <div className="container">
                <div className="selector">
                    <div className="innerSelector"/>
                </div>
                <div className="arrowDiv">
                    <div className='arrows'> 
                        <button> <img className='arrow' alt='leftarrow'/> </button>
                        <button> <img className='arrow' alt='rightarrow' /> </button>
                    </div>
                    <div className="dataContainer">
                        <div className="carInfoDiv">
                            <h3></h3>
                            <h4></h4>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td> 
                                        <img/> 
                                        <span></span>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td> 
                                        <img/> 
                                        <span></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td> 
                                        <img/> 
                                        <span></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div></div>
            </div>
            <div className="text">
                <h2>SELECT A VEHICLE FROM YOUR PHONE.</h2>
                <p>We have three tiers of luxury vehicles to choose from, each with all-inclusive pricing.
                   Once you’ve picked the car you want to drive from our lineup, all we need is a driver’s
                   license and an address to deliver the car. No gimmicks. No hidden fees.</p>
            </div>
        </Section2>
    )
}