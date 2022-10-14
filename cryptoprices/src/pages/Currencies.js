import { Link } from "react-router-dom";

export default function Currencies(props) {
  const currencies = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
  ];
  return (
    <div className="currencies">
      {currencies.map((item) => {
        return (
          <Link key={item.symbol} to={`/price/${item.symbol}`}>
            <h2>{item.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
