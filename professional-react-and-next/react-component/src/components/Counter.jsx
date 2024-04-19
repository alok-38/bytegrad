import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className='flex flex-col items-center'> {/* Container with flex column layout and center alignment */}
            <div className='flex flex-row mb-10 gap-10 text-white'> {/* Button container with flex row layout */}
                <button onClick={increment} className='border-solid border-[1px] border-green-600 hover:bg-green-600 w-32 rounded-full leading-10'> {/* Margin right to separate buttons */}
                    Increment 
                </button>
                <button onClick={decrement} className='border-solid border-[1px] border-red-600 hover:bg-red-600 w-32 rounded-full leading-10'>
                    Decrement  
                </button>
            </div>
            <span className='font-semi text-zinc-700 text-[7em]'>{count}</span>
        </div>
    );
}
