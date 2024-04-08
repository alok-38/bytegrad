import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className='flex flex-col mt-10'>
                <button className='border-solid border-2 border-orange-600 w-10 mx-auto rounded-3xl	 h-15 hover:bg-orange-400 hover:text-white font-thin text-5xl' onClick={() => setCount((count) => count + 1)}>
                     +
                </button>
                        <span className='text-[100px] text-green-500'>{count}</span>
                        <button className='border-solid border-2 border-red-600 w-10 mx-auto rounded-3xl h-15 hover:bg-red-400 hover:text-white font-thin text-5xl'  onClick={() => setCount((count) => count -1)}>
                     -
                </button>
            </div>
        </>
    );
}

export default Counter;