import React, { useState } from "react";
import { loadStdlib } from "@reach-sh/stdlib";
import '../views/home/css/style.css';
import '../views/home/css/style.css.map';
import {
  InformTimeout,
  SeeOutcome,
  ShowBid,
  IsAuctionOn,
  AwaitingFirstBidder,
} from "./ParticipantViews";

const Reach = loadStdlib("ALGO");

const fmt = (x) => Reach.formatCurrency(x, 4);

const GetBid = ({ price, getBid, nftUri }) => {
  const formatPrice = fmt(price);
  const [bid, setBid] = useState(0);
  const handleSubmit = () => {
    getBid(bid);
  };
  return (
    <div>
      <section id="home" class="spacetop15 spacebottom10">
        <div class="container">
          <div class="row jc-between ai-center col-reverse-s">
            <div class="col5 col6-md col12-s ta-center-s">
              <h1 class="size5 bold spacebottom1">
                Place your bid
              </h1>
              <p class="size2 spacebottom3 halfwhite">Please Place your Bid
              </p>

              <div class="row col8 col9-md jc-between spacebottom4 jc-evenly-s col12-s">
                <form action="" className="flex flex-col space-y-4">
                  <div>
                    <input
                      type="number"
                      placeholder={`> ${formatPrice}`}
                      className="ring-1 ring-gray-500 w-full h-full text-black rounded-md px-4 py-2 outline-none mt-2 focus:ring-2 focus:ring-teal-300"
                      min={formatPrice}
                      step="0.001"
                      onChange={(e) => {
                        setBid(e.target.value);
                      }}
                    />
                  </div>
                </form>
                <button href="#collections" class="btn bg-purple size2 white " onClick={handleSubmit}>Place Bid</button>
                {/* <a href="#banner" class="btn bg-white10 size2 white ">Sell NFT</a> */}
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
              {/* <img src="img/heroimage.png" alt="" class="img-responsive float"/> */}
              <div class="img-responsive float">{nftUri && <img src={`https://gateway.pinata.cloud/ipfs/${nftUri}`} alt="" />}</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

const AttachContract = ({ attachContract }) => {
  const [contractInfo, setContractInfo] = useState("");

  const handleSubmit = () => {
    attachContract(contractInfo);
  };
  return (
    <div>
      <section class="spacer10" id="banner">
        <div class="container spacer5 bg-purple ta-center">
          <div className="  md:space-y-6 space-y-6  ta-center w-full max-w-4xl p-10 mt-6 rounded-xl shadow-lg  items-center">
            <div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                class="ring-1 text-black rounded-md px-4 py-2 mt-2 outline-none "
                onChange={(e) => {
                  setContractInfo(e.target.value);
                }}
              ></textarea>
              <button
                className="flex btn bg-halfwhite size2 started  "
                onClick={handleSubmit}
              >
                Attach
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

const WaitingOtherBidders = ({ nftUri }) => {
  return (
    <div>
      <section id="home" class="spacetop15 spacebottom10">
        <div>
          <div className="container">
            <div className="grid md:grid-cols-2 mx-w-[1240px] m-auto">
              <div className="ta-center">
                `{nftUri && <img src={`https://gateway.pinata.cloud/ipfs/${nftUri}`} alt="" />}
                <p className=" font-bold">Please waiting. Placing bid...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

const AwaitingAution = ({ nftUri }) => {
  return (
    <div>
      <section id="home" class="spacetop15 spacebottom10">
        <div className="container">
          <div className="grid md:grid-cols-2 mx-w-[1240px] m-auto">
            <div className="ta-center">
              <div className="grid md:grid-cols-2 mx-w-[1240px] m-auto">
                {nftUri && <img src={`https://gateway.pinata.cloud/ipfs/${nftUri}`} alt="" />}
                <div>
                  <p className=" font-bold">Waiting for Auction to Begin...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const BidderViews = ({
  appState,
  args,
  getBidReady,
  isAcutionOnReady,
  isAuctionOn,
  attachContract,
  getBid,
}) => {
  console.log("AppView: ", appState);
  switch (appState) {
    case "attachContract":
      return <AttachContract attachContract={attachContract}></AttachContract>;
    case "getBid":
      return <GetBid price={args[0]} getBid={getBid} nftUri={args[1]}></GetBid>;
    case "informTimeout":
      return <InformTimeout />;
    case "seeOutcome":
      return <SeeOutcome price={args[0]} address={args[1]} nftUri={args[2]} />;
    case "showBid":
      return <ShowBid bid={args[0]} nftUri={args[1]} />;
    case "isAuctionOn":
      return <IsAuctionOn isAuctionOn={isAuctionOn} nftUri={args[0]} />;
    case "awaitingFirstBidder":
      return <AwaitingFirstBidder nftUri={args[0]} />;
    case "awatingOtherBidders":
      return <WaitingOtherBidders nftUri={args[0]} />;
    case "awatingAuction":
      return <AwaitingAution nftUri={args[0]} />;
    default:
      return (
        <div>
          <section id="home" class="spacetop15 spacebottom10">
            <div>
              <div className="container">
                <div className="grid md:grid-cols-2 mx-w-[1240px] m-auto">
                  <div className="ta-center">
                    {args[0] && <img src={`https://gateway.pinata.cloud/ipfs/${args[0]}`} alt="" />}
                    <p className=" font-bold">Awating Contract...</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      );
  }
};

export default BidderViews;
