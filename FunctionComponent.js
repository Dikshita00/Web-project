import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Factorial({ number }) {
  const getFactorial = (num) => {
    if (num < 0) return 'Invalid';
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  return (
    <div>
      <h1>Function Component: Factorial</h1>
      <p>Factorial of {number} is: {getFactorial(number)}</p>
    </div>
  );
}

function Calculator({ num1, num2 }) {
  return (
    <div>
      <h2>Function Component: Calculator</h2>
      <p>Addition: {num1 + num2}</p>
      <p>Subtraction: {num1 - num2}</p>
      <p>Multiplication: {num1 * num2}</p>
      <p>Division: {num2 !== 0 ? num1 / num2 : 'Cannot divide by zero'}</p>
    </div>
  );
}

function SmartCalculator({ num1, num2, operation }) {
  const calculate = () => {
    switch (operation) {
      case 'add': return num1 + num2;
      case 'subtract': return num1 - num2;
      case 'multiply': return num1 * num2;
      case 'divide': return num2 !== 0 ? num1 / num2 : 'Cannot divide by 0';
      default: return 'Invalid operation';
    }
  };

  return (
    <div>
      <h2>Function Component: Smart Calculator</h2>
      <p>{operation} of {num1} and {num2} is: {calculate()}</p>
    </div>
  );
}

class FactorialClass extends React.Component {
  getFactorial(num) {
    if (num < 0) return 'Invalid';
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }

  render() {
    const { number } = this.props;
    return (
      <div>
        <h2>Class Component: Factorial</h2>
        <p>Factorial of {number} is: {this.getFactorial(number)}</p>
      </div>
    );
  }
}

function EventCalculator() {
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(5);
  const [result, setResult] = useState(null);

  const handleClick = () => {
    setResult(num1 + num2);
  };

  return (
    <div>
      <h2>Event Handling: Add Numbers</h2>
      <button onClick={handleClick}>Add {num1} + {num2}</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'serif' }}>
      <Factorial number={5} />
      <Calculator num1={10} num2={5} />
      <SmartCalculator num1={10} num2={5} operation="multiply" />
      <FactorialClass number={6} />
      <EventCalculator />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
