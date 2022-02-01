import { useEffect, useState } from "react";

function Coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selected, setSelected] = useState(0);
  const [USD, setUSD] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = (e) => {
    const regex = /([^0-9.])/g;
    setSelected(e.target.value.replace(regex, ""));
  };
  const writeMoney = (e) => {
    setUSD(e.target.value);
  };
  //   console.log(selected);
  return (
    <div>
      <h1>The Coins: {coins.length}</h1>
      <hr />
      <div>
        <input onChange={writeMoney} type="number" placeholder="MONEY" />
        <h4>
          YOU CAN BUY: {USD === 0 || selected === 0 ? "0" : USD / selected}{" "}
          COINS
        </h4>
      </div>
      <hr />
      {loading ? (
        <strong>Loading..</strong>
      ) : (
        <select onChange={onChange}>
          <option>Select Coin</option>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) : $
              {Math.round(coin.quotes.USD.price * 100) / 100}
              (USD)
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
export default Coin;
//  (1/가격)
