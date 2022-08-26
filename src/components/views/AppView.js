import React, { useContext } from "react";
import { MainAppContext } from "../../context/MainAppContext";
import { scaleIcon } from "@heroicons/react/solid";
import heroimage from './home/img/collection6.png';

import bgImg from "../../assets/nft-2.png";
import userImg from "../../assets/user.jpg";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { ScaleIcon } from "@heroicons/react/solid";
import Home from "./home/Home";

const exports = {};

exports.ConnectWallet = ({ connectWallet }) => {

  return (
    <Home></Home>
  );
};

exports.ChooseRole = (obj) => {
  return (
    <div>
      {/* <div className="container">
        <div className="ow jc-between ai-center col-reverse-s">
          <div className="col5 col6-md col12-s ta-center-s">
            <h1 className="py-3 text-5xl md:text-5xl font-bold">
              Please Select User
            </h1>
            <button
              className="py-3 px-6 sm:w-[50%] my-4 flex bg-cyan-700 text-white font-bold rounded-lg "
              onClick={obj.deployCreator}
            >
              <PlusCircleIcon className="h-6 text-indigo-200" />
              Creator
            </button>
            <button
              className="py-3 px-6 sm:w-[50%] my-4 flex bg-cyan-700 text-white font-bold rounded-lg "
              onClick={obj.deployBidder}
            >
              <ScaleIcon className="h-6 text-indigo-200" />
              Bidder
            </button>
          </div>
          <div>
            <img className="w-full" src={bgImg} alt="nft" />
          </div>
        </div>
      </div> */}
      <section id="home" class="spacetop15 spacebottom10">
        <div class="container">
          <div class="row jc-between ai-center col-reverse-s">
            <div class="col5 col6-md col12-s ta-center-s">
              <h1 class="size5 bold spacebottom1">
                Please Select User
              </h1>
              <p class="size2 spacebottom3 halfwhite">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc
                vulputate
                libero et velit.
              </p>

              <div class="row col8 col9-md jc-between spacebottom4 jc-evenly-s col12-s">
                <button  class="btn bg-purple size2 white " onClick={obj.deployCreator}>Creator</button>
                <button  class="btn bg-white10 size2 white " onClick={obj.deployBidder}>Bidder</button>
              </div>

              <div class="row jc-between">
                <div class="ta-center">
                  <p class="size3 bold">37k+</p>
                  <p class="size2 halfwhite">Artworks</p>
                </div>
                <div class="ta-center">
                  <p class="size3 bold">20k+</p>
                  <p class="size2 halfwhite">Artist</p>
                </div>
                <div class="ta-center">
                  <p class="size3 bold">99k+</p>
                  <p class="size2 halfwhite">Aucations</p>
                </div>
              </div>
            </div>
            <div class="col6 col12-s spacebottom3-s">
              <img src={heroimage} alt="heroimage" class="img-responsive float" />
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

exports.Loading = (obj) => {
  return (
    <section id="home" class="spacetop15 spacebottom10">
      <div>
        <div className="container">
          <div className="grid md:grid-cols-2 mx-w-[1240px] m-auto">
            <div className="ta-center">
              `<p className="size3 bold">Connecting Wallet...</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

const AppViews = (props) => {
  const { deployBidder, deployCreator, connectWallet } = useContext(MainAppContext);

  return exports[props.view]({ deployBidder, deployCreator, connectWallet });
};

export default AppViews;
