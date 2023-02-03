import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { createPortal } from 'react-dom';
import './App.css'

const discounts ={
  "SUMMER10": {type:"percentage", value:0.1},
 
}

function App() {

  function readDiscountCode(code) {
    if (discounts[code]) {
      setfeatchedDiscount(discounts[code]);
    } else {
      return 0;
    }
  }

  const generateDiscountCode =(type, value) =>{
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let discountCode = '';
    for (let i = 0; i < 8; i++) {
      discountCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setDiscountCode(discountCode)
    discounts[discountCode] = {type,value}

  }
  
  const [discountType, setDiscountType] = useState("");
  const [discountValue, setDiscountValue] = useState("");

  const [discountCode, setDiscountCode] = useState("");
  const [userDiscountCode, setUserDiscountCode] = useState();
  

  const [featchedDiscount, setfeatchedDiscount] = useState();

  return (
    <div>
      <label>Type</label>
      <input value={discountType} onChange={(e)=>setDiscountType(e.target.value)}/>
      <label>Value</label>
      <input value={discountValue} onChange={(e)=>setDiscountValue(e.target.value)}/>
      <button onClick={() => generateDiscountCode(discountType, discountValue)}>
        Generate Discount Code
      </button>
      <h1 style={{background:"black", text:"black"}}> {discountCode}</h1>
      <input value={userDiscountCode} onChange={(e)=>setUserDiscountCode(e.target.value)}/>
      <button onClick={()=>readDiscountCode(userDiscountCode)}>Read Discount Code</button>
  {
    featchedDiscount && <h1>The read discount code has a type of {featchedDiscount.type} with value {featchedDiscount.value}</h1>
  }
      {/* { showModal && createPortal(
        <div className="modal">
            <div>I'm a modal dialog</div>
            <button onClick={onClose}>Close</button>
        </div>,document.body)
      } */}
    </div>
  );
}

export default App
