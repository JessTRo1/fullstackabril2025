import { useState } from 'react';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [stored, setStored] = useState(null);
  const [operation, setOperation] = useState(null);

  function handleNumber(num) {
    setDisplay(display === '0' ? num : display + num);
  }

  function handleOperation(op) {
    setStored(parseFloat(display));
    setDisplay('0');
    setOperation(op);
  }

  function calculate() {
    const current = parseFloat(display);
    let result = current;
    
    switch(operation) {
      case '+': result = stored + current; 
      break;
      case '-': result = stored - current; 
      break;
      case '*': result = stored * current;
       break;
      case '/': result = stored / current; 
      break;

    }
    
    setDisplay(result.toString());
    setOperation(null);
  }

  function clear() {
    setDisplay('0');
    setStored(null);
    setOperation(null);
  }

  return (
    <div className='calculator'>
      <h1 className='title'>Calculadora</h1>
      <div className='display'>{display}</div>
      
      <div>
        <button className='button' onClick={() => handleNumber('7')}>7</button>
        <button className='button' onClick={() => handleNumber('8')}>8</button>
        <button className='button' onClick={() => handleNumber('9')}>9</button>
        <button className='button' onClick={() => handleOperation('/')}>/</button>
      </div>
      
      <div>
        <button className='button' onClick={() => handleNumber('4')}>4</button>
        <button className='button' onClick={() => handleNumber('5')}>5</button>
        <button className='button' onClick={() => handleNumber('6')}>6</button>
        <button className='button' onClick={() => handleOperation('*')}>*</button>
      </div>
      
      <div>
        <button className='button' onClick={() => handleNumber('1')}>1</button>
        <button className='button' onClick={() => handleNumber('2')}>2</button>
        <button className='button' onClick={() => handleNumber('3')}>3</button>
        <button className='button' onClick={() => handleOperation('-')}>-</button>
      </div>
      
      <div>
        <button className='button' onClick={() => handleNumber('0')}>0</button>
        <button className='button' onClick={clear}>C</button>
        <button className='button' onClick={calculate}>=</button>
        <button className='button' onClick={() => handleOperation('+')}>+</button>
      </div>
    </div>
  );
}

export default Calculator;