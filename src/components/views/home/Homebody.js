import './css/style.css';
import './css/style.css.map';
import binance from './img/binance.svg';
import heroimage from './img/heroimage.png';
import ehterium from './img/ethereum.svg';
import algorand from './img/algorand-algo-icon.svg';
import about from './img/about.png';
import collection1 from './img/collection1.png';
import collection2 from './img/collection2.png';
import collection3 from './img/collection3.png';
import collection4 from './img/collection4.png';
import collection5 from './img/collection5.png';
import collection6 from './img/collection6.png';
import collection7 from './img/collection7.png';
import collection8 from './img/collection8.png';
import collection9 from './img/collection9.png';
import { useContext } from 'react';
import { MainAppContext } from '../../../context/MainAppContext';

const Homebody = () => {
    return (
        <div>
            <section class="spacer10" id="banner">
                <div class="container spacer5 bg-purple ta-center">
                    <h1 class="size5 bold spacebottom2 size4-xs">Get ready to collect<br />our NFT</h1>
                    <a class="btn bg-halfwhite size2 started ">Get started</a>
                </div>
            </section>

            <footer class="spacer10">
                <div class="container row jc-between flexcol-s ta-center-s">
                    <div class="row flexcol spacebottom3-s">
                        <a href="#home" class="size2 bold white"><span class="lightpurple">N</span>ar<span class="lightpurple">F</span>ke<span class="lightpurple">T</span></a>
                        <p class="size2 halfwhite spacetop2">The best NFT marketplace website in<br />the world and feel your
                            experience
                            in<br />selling or buy our work</p>
                    </div>
                    <div class="row flexcol spacebottom3-s">
                        <a href="#about" class="bold size2 white">About</a>
                        <a href="#" class="size2 halfwhite spacetop2">Product</a>
                        <a href="#" class="size2 halfwhite spacetop2">Resource</a>
                        <a href="#" class="size2 halfwhite spacetop2">Term & Condition</a>
                        <a href="#" class="size2 halfwhite spacetop2">FAQ</a>
                    </div>
                    <div class="row flexcol spacebottom3-s">
                        <a href="#" class="bold size2 white">Company</a>
                        <a href="#" class="size2 halfwhite spacetop2">Our Team</a>
                        <a href="#" class="size2 halfwhite spacetop2">Partner With Us</a>
                        <a href="#" class="size2 halfwhite spacetop2">Privacy & Policy</a>
                        <a href="#" class="size2 halfwhite spacetop2">Features</a>
                    </div>
                    <div class="row flexcol spacebottom3-s">
                        <h5 class="bold size2">Contact</h5>
                        <a href="#" class="size2 halfwhite spacetop2">+254 792022405</a>
                        <a href="#" class="size2 halfwhite spacetop2">gicugumajoseph@gmail.com</a>
                        <div class="row jc-between spacetop2 jc-evenly-s">
                            <a href="#" class="fab fa-youtube size2 halfwhite spacetop2"></a>
                            <a href="#" class="fab fa-discord size2 halfwhite spacetop2"></a>
                            <a href="#" class="fab fa-instagram size2 halfwhite spacetop2"></a>
                        </div>
                    </div>
                </div>
                <p class="size2 halfwhite spacetop5 ta-center">Created by <span class="white bold">Team 33</span> | All Right
                    Reserved!</p>
            </footer>
        </div>
    )
}

export default Homebody;