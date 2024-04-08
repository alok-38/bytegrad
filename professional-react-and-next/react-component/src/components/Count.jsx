import { useState } from 'react';
import CountLabel from './CountLabel';

function Count({ initialValue }) {
    // useState hook to manage the count state
    const [count, setCount] = useState(initialValue);

    // Function to increment the count
    const increment = () => {
        setCount(count + 1);
    };

    // Function to decrement the count
    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center text-5xl font-thin gap-3 items-center">
                <button 
                    className="hover:bg-orange-500 border-2 text-black border-orange-400 hover:text-white w-20 h-20 rounded-full flex items-center justify-center"
                    onClick={increment} // Attach onClick event to call increment function
                >
                    <span role="img" aria-label="Up arrow">&#x2B06;</span>
                </button>
                <button 
                    className="hover:bg-red-500 border-2 border-red-400 text-black hover:text-white w-20 h-20 rounded-full flex items-center justify-center"
                    onClick={decrement} // Attach onClick event to call decrement function
                >
                    <span role="img" aria-label="Down arrow">&#x2B07;</span>
                </button>
            </div>
            <CountLabel count={count} />
        </div>
    );
}

export default Count;
