// src/AddNumbers.js
import { useRef, useState } from "react";

export default function AddNumbers() {
  const num1Ref = useRef(null);
  const num2Ref = useRef(null);
  const [sum, setSum] = useState(null);

  const handleAddition = () => {
    const num1 = parseFloat(num1Ref.current.value) || 0;
    const num2 = parseFloat(num2Ref.current.value) || 0;
    setSum(num1 + num2);
  };

  return (
    <div className="container">
      <h2>Add Two Numbers (Uncontrolled)</h2>
      <input ref={num1Ref} type="number" placeholder="Enter first number" />
      <br /><br />
      <input ref={num2Ref} type="number" placeholder="Enter second number" />
      <br /><br />
      <button onClick={handleAddition}>Add</button>
      {sum !== null && <h3>Result: {sum}</h3>}
    </div>
  );
}
