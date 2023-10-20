
import './App.css';
import Greeting from './Greeting';

function App() {
  const userName = 'MANOJ'; 
  return (
    <div>
      <Greeting name={userName} />
    </div>
  );
}

export default App;
