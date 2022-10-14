import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Price(props) {
  const apiKey = "3F774E2F-CCF7-4EB8-82F0-01868FED885E";
  const params = useParams();
  const symbol = params.symbol;
  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  //state to hold the coin data
  const [coin, setCoin] = useState("");

  //function to fetch coin data
  const getCoin = async () => {
   try{
    const response = await fetch(url);
    const data = await response.json();
    setCoin(data);
    console.log(data)
   }catch(e){
    console.log(e)
   }
  };
  useEffect(() => {
    getCoin();
  }, []);

    // loaded function for when data is fetched
    const loaded = () => {
        return (
          <div>
            <h1>
              {coin.asset_id_base}/{coin.asset_id_quote}
            </h1>
            <h2>{coin.rate}</h2>
          </div>
        );
      };
    
      // Function for when data doesn't exist
      const loading = () => {
        return <h1>Loading...</h1>;
      };
    
      // if coin has data, run the loaded function, otherwise, run loading
      return coin && coin.rate ? loaded() : loading();
    };
