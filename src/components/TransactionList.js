import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Transaction } from './Transaction';


export const TransactionList = () => {
  const context = useContext(GlobalContext)
  const {transactions} = context
  
  
  
 
  return (
    <div>
      <h3>History</h3>

      <ul id="list" className="list">
        {transactions.map(transaction =>
        (
          <Transaction key={transaction.id} amount={transaction.amount} text={transaction.text}/>
        ))
      }
      </ul>
    </div>
  );
};
