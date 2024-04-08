import { useState } from 'react';

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
        <div className="flex justify-center text-5xl font-thin gap-3 items-center">
            <button 
                className="hover:bg-orange-500 border-2 text-black border-orange-400 hover:text-white w-20 h-10 rounded-full flex items-center justify-center"
                onClick={increment} // Attach onClick event to call increment function
            >
                +
            </button>
            <span className="text-5xl">{count}</span> {/* Display the count */}
            <button 
                className="hover:bg-red-500 border-2 border-red-400 text-black hover:text-white w-20 h-10 rounded-full flex items-center justify-center"
                onClick={decrement} // Attach onClick event to call decrement function
            >
                -
            </button>
        </div>
    );
}

export default Count;
