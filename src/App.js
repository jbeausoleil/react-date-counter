import "./index.css";
import { useState } from "react";
import button from 'react-bootstrap/button';

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date() // Today's date
  const calculatedDate = new Date(date.setDate(date.getDate() + count)).toDateString()

  function handlePreviousStep() {
    if (step > 0) setStep((s) => s - 1);
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <>
      <div>
        <input type="range" min="0" max="10" value={step} onChange={e=> setStep(Number(e.target.value))}/>
        <span>{step}</span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <button className="reset" onClick={handleReset}>Reset</button>
      <p>
        <span>
          {count === 0
            ? `Today is ${date.toDateString()}`
            : count > 0
            ? `${count} days from today is ${calculatedDate}`
            : `${Math.abs(count)} days ago was ${calculatedDate}`}
        </span>
      </p>
    </>
  );
}
