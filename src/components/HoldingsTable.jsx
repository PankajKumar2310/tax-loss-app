import React from 'react';
import './styles.css';

// Helper function to format number in Indian format
const toIndianFormat = (num) => {
  if (num == null) return '';
  const x = num.toString().split('.');
  let integerPart = x[0];
  const decimalPart = x.length > 1 ? '.' + x[1] : '';

  let lastThree = integerPart.substring(integerPart.length - 3);
  const otherNumbers = integerPart.substring(0, integerPart.length - 3);

  if (otherNumbers !== '') {
    lastThree = ',' + lastThree;
  }

  const formattedOtherNumbers = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
  return formattedOtherNumbers + lastThree + decimalPart;
};

const HoldingsTable = ({ holdings, selectedAssets, setSelectedAssets }) => {
  const toggleSelect = (asset) => {
    setSelectedAssets((prev) =>
      prev.includes(asset)
        ? prev.filter((a) => a !== asset)
        : [...prev, asset]
    );
  };

  return (
    <div className="holdings-table">
      <h3 style={{ width: '80%', margin: '0 auto', textAlign: 'left', marginBottom: '10px' }}>
        Holdings
      </h3>

      <table style={{ width: '80%', margin: '0 auto' }}>
        <thead>
          <tr>
            <th></th>
            <th>Asset</th>
            <th>Holdings</th>
            <th>Current Price</th>
            <th>Short-Term Gain</th>
            <th>Long-Term Gain</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((h) => {
            const holdingText =
              h.symbol === '$'
                ? `${toIndianFormat(h.amount)} hours`
                : h.symbol.toLowerCase() === 'rs'
                  ? `${toIndianFormat(h.amount)} Rs`
                  : `${h.amount} ${h.symbol}`;

            return (
              <tr key={h.asset}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedAssets.includes(h.asset)}
                    onChange={() => toggleSelect(h.asset)}
                  />
                </td>
                <td>{h.asset}</td>
                <td title={holdingText}>{holdingText}</td>
                <td>${h.currentPrice.toLocaleString()}</td>
                <td>${h.shortTermGain.toFixed(2)}</td>
                <td>${h.longTermGain.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HoldingsTable;




/*
import React from 'react';
import './styles.css';

const HoldingsTable = ({ holdings, selectedAssets, setSelectedAssets }) => {
  const toggleSelect = (asset) => {
    setSelectedAssets((prev) =>
      prev.includes(asset)
        ? prev.filter((a) => a !== asset)
        : [...prev, asset]
    );
  };

  return (
    <div className="holdings-table">
      <h3 style={{ width: '80%', margin: '0 auto', textAlign: 'left', marginBottom: '10px' }}>
        Holdings
      </h3>

      <table style={{ width: '80%', margin: '0 auto' }}>
        <thead>
          <tr>
            <th></th>
            <th>Asset</th>
            <th>Holdings</th>
            <th>Current Price</th>
            <th>Short-Term Gain</th>
            <th>Long-Term Gain</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((h) => (
            <tr key={h.asset}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedAssets.includes(h.asset)}
                  onChange={() => toggleSelect(h.asset)}
                />
              </td>
              <td>{h.asset}</td>
              <td>{h.amount} {h.symbol}</td>
              <td>${h.currentPrice.toLocaleString()}</td>
              <td>${h.shortTermGain.toFixed(2)}</td>
              <td>${h.longTermGain.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HoldingsTable;

*/


