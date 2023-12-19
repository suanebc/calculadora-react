
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

// LIMPA VISOR
  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

// MOSTRA NO VISOR
  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)//mostra no visor o valor o botão clicado

  }

// SOMA
  const handleSumNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

// SUBTRAÇÃO
  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub))
      setOperation('')
    }

  }
// ---------------- Meu código --------------------------------
  const handleMultiplyNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('x')
    }else {
      const multiply = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiply))
      setOperation('')
    }

  }

  const handleDivisionNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
    }else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
      setOperation('')
    }

  }

// RESULTADO
  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case 'x':
            handleMultiplyNumbers();
            break;
            case '/':
              handleDivisionNumbers();
              break;
          default: 
            break;
        }
    }

  }

  return (
    <Container>
    <h2>Calculadora Virtual</h2>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="c" onClick={handleOnClear}/>
          <Button label="%" onClick={() => handleAddNumber('1')}/>
          <Button label="/" onClick={handleDivisionNumbers}/>
          <Button label="+/-" onClick={() => handleAddNumber('2')}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="x" onClick={handleMultiplyNumbers}/>
          
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="."/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="b" />
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
