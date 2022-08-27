import React from "react";
import { loadStdlib } from "@reach-sh/stdlib";

import heroimage from "../views/home/img/collection5.png";

const Reach = loadStdlib("ALGO");

const fmt = (x) => Reach.formatCurrency(x, 4);

export const InformTimeout = () => {
  return (
    // <div>Timeout was observed</div>
    <div className="w-full h-screen bg-zinc-100 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 mx-w-[1240px] m-auto">
        <p className=" font-bold">Timeout was observed</p>
      </div>
    </div>
  );
};

export const SeeOutcome = ({ price, address, nftUri }) => {
  const formatAddress = Reach.formatAddress(address);
  const formatPrice = fmt(price);
  return (
    <section id="home" class="spacetop15 spacebottom10">
      
      <div class="container">
        <div class="row jc-between ai-center col-reverse-s">
          <div class="col5 col6-md col12-s ta-center-s">
            <h1 class="size5 bold spacebottom1">
              The Winner of the auction is:
            </h1>

            <div class="size1">{formatAddress}{" "}</div>
            <p class="size2 spacebottom3 halfwhite">
              They Paid
            </p>

            <h1 class="size5 bold spacebottom1">{formatPrice}{" "}<span className=" font-bold">ALGO. </span></h1>

            <p class="size2 spacebottom3 halfwhite">
              Watchout for the next aution to begin..
            </p>

           
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
            <div class="img-responsive float">{nftUri && <img src={`https://gateway.pinata.cloud/ipfs/${nftUri}`} alt="" />}</div>
          </div>
        </div>
      </div>
    </section>

  );
};

export const ShowBid = ({ bid, nftUri }) => {
  const formatBid = fmt(bid);
  return (
    <div>

      <section id="home" class="spacetop15 spacebottom10">
        <div class="container">
          <div class="row jc-between ai-center col-reverse-s">
            <div class="col5 col6-md col12-s ta-center-s">
              <h1 class="size5 bold spacebottom1">
                Current leading bid is
              </h1>
              <p class="size2 spacebottom3 halfwhite">
                Current leading bid is
              </p>
              {formatBid}{" "}<span className=" font-bold">ALGO. </span>
              <p class="size2 spacebottom3 halfwhite">
                Waiting for next bidder...
              </p>

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
              <div class="img-responsive float">{nftUri && <img src={`https://gateway.pinata.cloud/ipfs/${nftUri}`} alt="" />}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const IsAuctionOn = ({ isAuctionOn, nftUri }) => {
  const handleReject = () => {
    return isAuctionOn(false);
  };
  const handleAccept = () => {
    return isAuctionOn(true);
  };

  return (
    <div>
      <section id="home" class="spacetop15 spacebottom10">
        <div class="container">
          <div class="row jc-between ai-center col-reverse-s">
            <div class="col5 col6-md col12-s ta-center-s">
              <h1 class="size5 bold spacebottom1">
                Wanna Start the Bid?
              </h1>
              {/* <p class="size2 spacebottom3 halfwhite">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc
                vulputate
                libero et velit.
              </p> */}

              <div class="row col8 col9-md jc-between spacebottom4 jc-evenly-s col12-s">
                <button class="btn bg-purple size2 white " onClick={handleAccept}>Yes</button>
                <button class="btn bg-white10 size2 white " onClick={handleReject}>No</button>
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

export const AwaitingFirstBidder = ({ nftUri }) => {
  return (
   <div>
     <section id="home" class="spacetop15 spacebottom10">
            <div>
              <div className="container">
                <div className="grid md:grid-cols-2 mx-w-[1240px] m-auto">
                  <div className="ta-center">
                  {nftUri && <img src={`https://gateway.pinata.cloud/ipfs/${nftUri}`} alt="" />}
                  <p className=" font-bold">Waiting for the First Bidder...</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
   </div>
  );
};
