import React, { useState } from 'react';
import HoldingsTable from './components/HoldingsTable';
import GainsSummary from './components/GainsSummary';
import './components/styles.css';

const sampleHoldings = [
  {
    asset: 'Wrapped Bitcoin',
    symbol: 'WBTC',
    amount: 2218.81,
    avgBuyPrice: 92980.19,
    currentPrice: 111438.00,
    shortTermGain: 25310000,
    longTermGain: 0,
  },
  {
    asset: 'Bitcoin',
    symbol: 'BTC',
    amount: 1184.12,
    avgBuyPrice: 93072.64,
    currentPrice: 111510.00,
    shortTermGain: 13240000,
    longTermGain: 0,
  },
  {
    asset: 'Ethereum',
    symbol: 'ETH',
    amount: 20028.05,
    avgBuyPrice: 3367.78,
    currentPrice: 2624.47,
    shortTermGain: -16760000,
    longTermGain: 0,
  },
  {
    asset: 'Cardano',
    symbol: 'ADA',
    amount: 50000,
    avgBuyPrice: 1.20,
    currentPrice: 1.35,
    shortTermGain: 7500,
    longTermGain: 0,
  },
  {
    asset: 'Solana',
    symbol: 'SOL',
    amount: 1000,
    avgBuyPrice: 25.00,
    currentPrice: 30.00,
    shortTermGain: 5000,
    longTermGain: 0,
  },
  {
    asset: 'Polkadot',
    symbol: 'DOT',
    amount: 1500,
    avgBuyPrice: 10.00,
    currentPrice: 12.50,
    shortTermGain: 3750,
    longTermGain: 0,
  },
  {
    asset: 'Chainlink',
    symbol: 'LINK',
    amount: 800,
    avgBuyPrice: 15.00,
    currentPrice: 18.00,
    shortTermGain: 2400,
    longTermGain: 0,
  },
  {
    asset: 'Litecoin',
    symbol: 'LTC',
    amount: 300,
    avgBuyPrice: 100.00,
    currentPrice: 120.00,
    shortTermGain: 6000,
    longTermGain: 0,
  },
  {
    asset: 'Uniswap',
    symbol: 'UNI',
    amount: 1000,
    avgBuyPrice: 20.00,
    currentPrice: 22.00,
    shortTermGain: 2000,
    longTermGain: 0,
  },
  {
    asset: 'Avalanche',
    symbol: 'AVAX',
    amount: 500,
    avgBuyPrice: 40.00,
    currentPrice: 45.00,
    shortTermGain: 2500,
    longTermGain: 0,
  },
];

function App() {
  const [selectedAssets, setSelectedAssets] = useState([]);

  return (
    <div className="App">
      <h1>Tax Harvesting Dashboard</h1>
      <GainsSummary
        holdings={sampleHoldings}
        selectedAssets={selectedAssets}
      />
      <HoldingsTable
        holdings={sampleHoldings}
        selectedAssets={selectedAssets}
        setSelectedAssets={setSelectedAssets}
      />
    </div>
  );
}

export default App;







/*
import React, { useState } from 'react';
import Header from './components/Header';
import GainsSummary from './components/GainsSummary';
import HoldingsTable from './components/HoldingsTable';
import holdingsData from './data/holdings';

function App() {
  const [selectedAssets, setSelectedAssets] = useState([]);

  return (
    <div className="app">
      <Header />
      <GainsSummary holdings={holdingsData} selectedAssets={selectedAssets} />
      <HoldingsTable
        holdings={holdingsData}
        selectedAssets={selectedAssets}
        setSelectedAssets={setSelectedAssets}
      />
    </div>
  );
}

export default App;

*/







/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/