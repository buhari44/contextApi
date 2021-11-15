 import React from 'react'

export const Transaction = (transaction) => {
  const { text, amount } = transaction
  const sign = transaction.amount > 0? "+":"-"
  
  return (
    <React.Fragment>
      <li className="minus">
        {text} <span> { sign } {Math.abs(amount)}</span>
        <button className="delete-btn">x</button>
      </li>
    </React.Fragment>
  );
}
