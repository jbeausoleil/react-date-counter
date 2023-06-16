import "./index.css";
import { useState } from "react";
import Button from 'react-bootstrap/Button';

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

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
        <button onClick={handlePreviousStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <Button onClick={() => setCount((c) => c - step)}>-</Button>
        <span>Count: {count}</span>
        <Button onClick={() => setCount((c) => c + step)}>+</Button>
      </div>
      <button onClick={handleReset}>Reset</button>
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
