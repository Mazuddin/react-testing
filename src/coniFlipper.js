import React, { useState } from "react";

const Coin = ({ side }) => {
  const imageSrc = side === "heads" ? "heads.png" : "tails.png";

  return <img src={imageSrc} alt={side} />;
};

const CoinFlipper = () => {
  const [side, setSide] = useState("");
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);

  const flipCoin = () => {
    const randomSide = Math.random() < 0.5 ? "heads" : "tails";

    setSide(randomSide);

    if (randomSide === "heads") {
      setHeadsCount(headsCount + 1);
    } else {
      setTailsCount(tailsCount + 1);
    }
  };

  return (
    <div>
      <button onClick={flipCoin}>Flip Coin</button>
      {side && <Coin side={side} />}
      <p>Heads: {headsCount}</p>
      <p>Tails: {tailsCount}</p>
    </div>
  );
};

export default CoinFlipper;
