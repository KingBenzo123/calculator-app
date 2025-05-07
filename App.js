import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  	
  };
 
  function times(e) {
     e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));
    
  }; 
 
  function divide(e) {
     e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value));
    
  };
 
  function resetInput(e) {
     e.preventDefault(); 
    inputRef.current.value = "";
     
  }; 
 
  function resetResult(e) {
     e.preventDefault(); 
    setResult(0);
  	 
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1 className="title">Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef} className="result"> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button className="operation" onClick={plus}>add</button>
        <button className="operation" onClick={minus}>subtract</button>
        <button className="operation" onClick={times}>multiply</button> 
        <button className="operation" onClick={divide}>divide</button>
        <button className="clear" onClick={resetInput}>rest Input</button>
        <button className="equals" onClick={resetResult}>rest Result</button> 

        
      </form> 
    </div> 
  ); 
} 
 
export default App; 
