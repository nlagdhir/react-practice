import {useState, useEffect} from 'react';
import './App.css';

function Stopwatch() {

  const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
      if(running) {
        const timerId = setTimeout(() => {
          setCounter(prevCounter => prevCounter + 1);
        },1000);
  
        return function clearCounter() {
          clearTimeout(timerId);
        }  
      } 
  });

  function handleStartStopClick(e) {
    
    if(document.querySelector('#label-start-stop').textContent == 'START'){
      document.querySelector('#label-start-stop').textContent = 'STOP';
    }else{
      document.querySelector('#label-start-stop').textContent = 'START';
    }
    
    setRunning(prevState => !prevState);
  }

  function handleResetClick() {
    setCounter(0);

    if(running) {
      setRunning(prevState => !prevState);
    }

   document.querySelector('#label-start-stop').textContent = 'START';
    
  }

  return (
    <>
    <div className="wrapper">
  <div className="container">
    <div className="icons" onClick={handleStartStopClick} id="btn-start-stop">
        <span className="stop-watch">
          <span className="sw-parts">
            <span className="sw-parts2" id="icn-clock-line"></span>
          </span>
        </span>
        <span className="label" id="label-start-stop">START</span>
      </div>
    <div className="clock">
      <p>{counter}</p>
    </div>
    <ul className="clockline" id="clockline">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div className="btn btn-reset" style={{opacity: (counter)? '1' : '0.5'}} onClick={handleResetClick} id="btn-reset">
      <span className="bl-parts"></span>
      <span className="bl-parts"></span>
      <span className="btn-label">RESET</span>
    </div>
  </div>
</div>
    </>
  );
}

export default Stopwatch;
