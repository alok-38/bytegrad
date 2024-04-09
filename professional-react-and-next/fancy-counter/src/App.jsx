import { useState } from 'react';
import Header from './components/Header';
import DisplayCounter from './components/DisplayCounter';
import Counter from './components/sub-components/Counter';
import Reset from './components/Reset';
import Footer from './components/Footer';

function App() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <>
            <div className='flex justify-center min-h-96 bg-lime-400 max-w-sm mx-auto rounded-t-xl mt-52'>
                <div className='flex flex-col'>
                    <Header />
                    <DisplayCounter count={count} />
                    <Reset reset={reset} />
                </div>
            </div>
            <div className='bg-lime-950 max-w-sm mx-auto'>
            <Counter increment={increment} decrement={decrement} />
            </div>
        </>
    );
}

export default App;