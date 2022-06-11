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
				<ul>
					<li>
						<Link to='/react-router-lab-2/'>Home</Link>
					</li>
					<li>
						<Link to='/react-router-lab-2/about'>About</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route
					path='/react-router-lab-2/'
					element={<Dashboard stocks={stocks} />}
				/>
				<Route
					path='/react-router-lab-2/stocks'
					element={<Dashboard stocks={stocks} />}
				/>
				<Route path='/about' element={<About />} />
				<Route
					path='/react-router-lab-2/stocks/:symbol'
					element={<StockDetails stocks={stocks} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
