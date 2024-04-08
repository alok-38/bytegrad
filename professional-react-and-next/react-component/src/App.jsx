import './App.css';
import Header from './components/Header';
import Count from './components/Count'

function App() {
  return (
    <div>
      <Header />
      <Count initialValue={0}/>
    </div>
  );
}

export default App;
