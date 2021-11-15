import React from 'react'
import { Form } from './Form'

export const AddTransaction = (props) => {
  console.log(props.amount)
 
  return (
    <React.Fragment>
      <h3>Add new transaction</h3>
      <Form amount={props.amount} />
      <p>{ props.amount}</p>
    </React.Fragment>
 );
}
