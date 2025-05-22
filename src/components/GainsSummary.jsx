import React from 'react';
import { calculateGains } from '../utils/calculations';

const GainsSummary = ({ holdings, selectedAssets }) => {
  const pre = calculateGains(holdings);
  const post = calculateGains(
    holdings.filter((h) => selectedAssets.includes(h.asset))
  );

  const formatCurrency = (value) => `$${value.toFixed(2)}`;

  return (
    <div className="summary-container">
      <div className="summary">
        <div className="summary-box">
          <h3>Pre Harvesting</h3>
          <table className="summary-table">
            <thead>
              <tr>
                <th></th>
                <th>Short-Term</th>
                <th>Long-Term</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Profit</td>
                <td>{formatCurrency(pre.shortTerm.profit)}</td>
                <td>{formatCurrency(pre.longTerm.profit)}</td>
              </tr>
              <tr>
                <td>Loss</td>
                <td>{formatCurrency(pre.shortTerm.loss)}</td>
                <td>{formatCurrency(pre.longTerm.loss)}</td>
              </tr>
              <tr>
                <td><strong>Net Capital Gain</strong></td>
                <td colSpan="2"><strong>{formatCurrency(pre.net)}</strong></td>
              </tr>
              <tr>
                <td><strong>Effective Capital Gain</strong></td>
                <td colSpan="2"><strong>{formatCurrency(pre.effective)}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="summary-box blue">
          <h3>After Harvesting</h3>
          <table className="summary-table">
            <thead>
              <tr>
                <th></th>
                <th>Short-Term</th>
                <th>Long-Term</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Profit</td>
                <td>{formatCurrency(post.shortTerm.profit)}</td>
                <td>{formatCurrency(post.longTerm.profit)}</td>
              </tr>
              <tr>
                <td>Loss</td>
                <td>{formatCurrency(post.shortTerm.loss)}</td>
                <td>{formatCurrency(post.longTerm.loss)}</td>
              </tr>
              <tr>
                <td><strong>Net Capital Gain</strong></td>
                <td colSpan="2"><strong>{formatCurrency(post.net)}</strong></td>
              </tr>
              <tr>
                <td><strong>Effective Capital Gain</strong></td>
                <td colSpan="2"><strong>{formatCurrency(post.effective)}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GainsSummary;


