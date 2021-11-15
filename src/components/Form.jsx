import React, { useState} from 'react'

export const Form = () => {
  const [text, setText] = useState("")
  const [amount, setAmount] = useState(0)

   const handleSubmit = () =>{
     console.log("Item and Amount is submitted")
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text..."
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">
              Amount <br />
              (negative - expense, positive - income)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..."
              required
            />
          </div>
          <button className="btn">Add transaction</button>
        </form>

    </React.Fragment>
  )
}
