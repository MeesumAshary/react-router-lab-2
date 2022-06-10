import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function StockDetails({ stocks }) {
  const [stock,setStock]= useState(null);
  
  const { symbol } = useParams();
	useEffect(() => {
		let url = `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${process.env.REACT_APP_IEX_KEY}`;

		axios.get(url)
			.then((data) => {
				setStock(data.data);
        console.log(data.data)
			})
			.catch(console.error);
	}, []);
  
  if (!stock) {
    return;
  }

  return (
		<ul>
			<li>name: {stock.companyName}</li>
			<li>Symbol: {stock.symbol}</li>
			<li>LastPrice: {stock.lastPrice}</li>
			<li>High: {stock.high}</li>
			<li>Low: {stock.low}</li>
			<li>Open: {stock.open}</li>
			<li>Change: {stock.change}</li>
			<li>Change: {stock.previousClose}</li>
		</ul>
	);

	
}

export default StockDetails;
