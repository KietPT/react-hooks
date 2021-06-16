import { useState } from 'react';
import './App.scss';
import Hero from './component/Memo';
import HomePage from './page/HomePage';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
    <HomePage/>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1 )}>Click me</button>
      <Hero name="Esasy frontend"/>
    </div>
  );
}



export default App;
