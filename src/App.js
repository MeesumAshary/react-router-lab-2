import './App.css';
import About from './Components/About/About';
import Dashboard from './Components/Dashboard/Dashboard';
import StockDetails from './Components/StockDetails/StockDetails';
import { Routes, Route, Link } from 'react-router-dom';
import stockData from './data/stock-data.json';
import { useState } from 'react';

// key: process.env.REACT_APP_IEX_KEY
function App() {
	const [stocks, setStocks] = useState(stockData);

	return (
		<div className='App'>
			<nav>
				<ul >
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path='/' element={<Dashboard stocks={stocks} />} />
				<Route path='/stocks' element={<Dashboard stocks={stocks} />} />
				<Route path='/about' element={<About />} />
				<Route
					path='/stocks/:symbol'
					element={<StockDetails stocks={stocks} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
