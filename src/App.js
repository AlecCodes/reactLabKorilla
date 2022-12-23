import React, { useState } from "react";
import "./styles.css";
import receipts from './receiptData'


export default function App() {
  const [receipt, setReceipt] = useState(receipts)
  const [form, setForm] = useState('')

  function handleChange(event){
    setForm(event.target.value)
  }

  function formSearch(event){
    event.preventDefault()
    console.log("submission:"+form)
    const newReceipts = receipt.filter((receipt) => (
      receipt.person === form
    ))
    setReceipt(newReceipts)
  
  }
  return (
    <div className="App">
      <form name="name" onSubmit = {formSearch}>
        <input type="text"
        onChange = {handleChange}
        ></input>
        <input type='submit'></input>
      </form>
 


      <div className ="container">
      {receipt.map((element, index)=>( 
        <div className ='receipt' key = {element.id}>
          <h2>{element.person}</h2>
          <h3>{element.order.main}</h3>
          <span>Protein: {element.order.protein}</span>
          <br></br>
          <span>Rice: {element.order.rice}</span>
          <br></br>
          <span>Sauce: {element.order.sauce}</span>
          <br></br>
          <span>drink: {element.order.drink}</span>
          <br></br>
          <span>cost: {element.order.cost}</span>
          <br></br>
          <span>paid: {element.paid.toString()}</span>
        </div>
      ))}
      </div>
    </div>
  );
}


