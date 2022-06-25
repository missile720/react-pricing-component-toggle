import { useState } from 'react';
import './App.css';
import Bottom from './components/Bottom';
import Top from './components/Top';

const initToggle = [
  {
    bool: false
  }
]

function App() {
  const [toggle, setToggle] = useState(initToggle);

  const saveToggleHandler = (switchedToggle) => {
    setToggle((prevToggle) => {
      return [switchedToggle, ...prevToggle];
    });
  };

  return (
    <div className="App">
      <Top
      toggle = {initToggle[0].bool}
      onSaveToggle = {saveToggleHandler}
      />
      <Bottom
      toggle = {toggle[0].bool}
      />
    </div>
  );
}

export default App;
