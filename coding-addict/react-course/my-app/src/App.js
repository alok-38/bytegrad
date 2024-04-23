import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'

function App() {
    return (
        <Router> {/* Keep Router wrapping here */}
            <Header />
            <Main />
            <Footer />
        </Router>
    );
}

export default App;
