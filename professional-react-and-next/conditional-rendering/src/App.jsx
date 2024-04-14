import Greeting from './components/Greeting';
import './App.css';

export default function App() {
  return (
    <Greeting  isLoggedIn={true} username="Alok"/>
  );
}