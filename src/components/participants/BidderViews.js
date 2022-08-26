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
      {/* <div className="antaliased">
        <div className="flex w-full min-h-screen justify-center items-center">
          <div className="flex flex-col space-y-6  w-50% maw-w-4xl p-8 rounded-xl shadow-lg teal-white">
            <div className="flex flex-col justify-between">
              {nftUri && <img src={`https://gateway.pinata.cloud/ipfs/${nftUri}`} alt="" />}
              <div>
                <h1 className="font-bold text-4xl tracking-wide">
                  Place your bid
                </h1>
                <p className="pt-2 text-black text-sm">
                  Price to beat, {formatPrice} ALGO
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 ">
                <form action="" className="flex flex-col space-y-4">
                  <div>
                    <label htmlFor="" className="tet-sm">
                      Bid
                    </label>
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder={`> ${formatPrice}`}
                      className="ring-1 ring-gray-500 w-full rounded-md px-4 py-2 outline-none mt-2 focus:ring-2 focus:ring-teal-300"
                      min={formatPrice}
                      step="0.001"
                      onChange={(e) => {
                        setBid(e.target.value);
                      }}
                    />
                  </div>
                </form>
                <div>
                  <button
                    className="inline-blovk self-end bg-cyan-700 text-black font-bold rounded-lg px-6 py-2 uppercase text-sm"
                    onClick={handleSubmit}
                  >
                    Place Bid
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
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
      {/* <div className="antialised bg-zinc-200 ">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col  md:space-y-6 space-y-6 md:space-x-0  bg-cyan-600 w-full max-w-4xl p-10 mt-6 rounded-xl shadow-lg text-white items-center">
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              class="ring-1 ring-gray-300 rounded-md px-4 py-2 mt-2 outline-none text-black"
              onChange={(e) => {
                setContractInfo(e.target.value);
              }}
            ></textarea>
            <button
              className="py-3 px-6 sm:w-[50%] my-4 flex bg-cyan-700 text-white font-bold rounded-lg "
              onClick={handleSubmit}
            >
              Attach
            </button>
          </div>
        </div>
      </div>
    </div> */}
      <section class="spacer10" id="banner">
        <div class="container spacer5 bg-purple ta-center">
          {/* <h1 class="size5 bold spacebottom2 size4-xs">Get ready to collect<br />our NFT</h1>
          <a class="btn bg-halfwhite size2 started ">Get started</a> */}
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
      {/* <div className="w-full h-screen bg-zinc-100 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 mx-w-[1240px] m-auto">
        <div>
          {nftUri && <img src={`https://gateway.pinata.cloud/ipfs/${nftUri}`} alt="" />}
          <p className=" font-bold">Please waiting. Placing bid...</p>
        </div>
      </div>
    </div> */}
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
      {/* <div className="w-full h-screen bg-zinc-100 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 mx-w-[1240px] m-auto">
        {nftUri && <img src={`https://gateway.pinata.cloud/ipfs/${nftUri}`} alt="" />}
        <div>
          <p className=" font-bold">Waiting for Auction to Begin...</p>
        </div>
      </div>
    </div> */}
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
          {/* // <div className="w-full h-screen bg-zinc-100 flex flex-col justify-between">
        //   <div className="grid md:grid-cols-2 mx-w-[1240px] m-auto">
        //     <div>
        //       {args[0] && <img src={`https://gateway.pinata.cloud/ipfs/${args[0]}`} alt="" />}
        //       <p className=" font-bold">Awating Contract...</p>
        //     </div>
        //   </div>
        // </div> */}
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
