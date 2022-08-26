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

const Navbar = () => {
    const { connectWallet } = useContext(MainAppContext);
    return (
        <header class="header bg-white10">
            <div class="container">
                <a href="#" class="logo bold white"><span class="lightpurple">N</span>ar<span class="lightpurple">F</span>ke<span class="lightpurple">T</span></a>

                <div class="menu">
                    <form action="" class="search-form">
                        <label for="search-box" class="fas fa-search"></label>
                        <input type="search" id="search-box" placeholder="Search items and collections" />
                    </form>
                    <a href="#collections">Collections</a>
                    <a href="#featured">Featured</a>
                    <a href="#faq">FAQ</a>
                    <button class="btn bg-purple wallet" onClick={connectWallet}>Connect Wallet</button>
                    {/* <div><button class="btn bg-purple wallet" onClick={connectWallet}></button></div> */}
                </div>

                <div class="fas fa-wallet" id="wallet"></div>
                <div class="fas fa-bars" id="bar"></div>
            </div>
        </header>
    )
}

export default Navbar;