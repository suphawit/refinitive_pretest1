import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [numberValue, setNumberValue] = useState(1);
  const [func, setFunc] = useState("isPrime");
  const [status, setStatus] = useState("false");

  const isPrimeNumber = () => {
    for (let i = 2; i < numberValue; i++)
      if (numberValue % i === 0) return "false";
    return "true";
  };

  const isFibonacci = (count = 1, last = 0) => {
    if (count < numberValue) {
      return isFibonacci(count + last, count);
    }
    if (count === numberValue) {
      return "true";
    }
    return "false";
  };

  const calculateResult = () => {
    if (func === "isPrime") setStatus(isPrimeNumber());
    else setStatus(isFibonacci());
  };

  useEffect(() => {
    calculateResult();
  }, [numberValue, func]);
  return (
    <div className="app">
      <div className="num">
        <input
          type="number"
          id="input"
          name="input"
          value={numberValue}
          onChange={(e) => {
            const { value } = e.target;
            if (value >= 1) {
              if ((value * 10) % 10 >= 5) setNumberValue(Math.ceil(value));
              else setNumberValue(Math.floor(value));
            } else setNumberValue(1);
          }}
        />
      </div>
      <div className="func">
        <select
          id="function"
          onChange={(e) => {
            setFunc(e.target.value);
          }}
        >
          <option value="isPrime">isPrime</option>
          <option value="isFibonacci">isFibonacci</option>
        </select>
      </div>
      <div className="status">{status}</div>
    </div>
  );
}

export default App;
