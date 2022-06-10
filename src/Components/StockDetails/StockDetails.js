import React from 'react';
import {useParams} from 'react-router-dom';


function StockDetails({ stocks }) {
  const { symbol } = useParams();

  let stocksObj = stocks.find( (stock) => stock.symbol === symbol)
  

  return (
		<ul>
			<li>name: {stocksObj.name}</li>
			<li>Symbol: {stocksObj.symbol}</li>
			<li>LastPrice: {stocksObj.lastPrice}</li>
			<li>High: {stocksObj.high}</li>
			<li>Low: {stocksObj.low}</li>
			<li>Open: {stocksObj.open}</li>
			<li>Change: {stocksObj.change}</li>
		</ul>
	);

	
}

export default StockDetails;
