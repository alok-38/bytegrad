import { useState } from "react";

function IncrementDecrement() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <>
            <div className="flex justify-center gap-5 mt-10">
                <button onClick={decrement} className="border-2 border-red-500 text-5xl h-15 rounded-2xl w-20 hover:bg-red-600 hover:text-white">-</button>
                <span className="text-[64px] text-blue-600">{count}</span>
                <button onClick={increment} className="border-2 border-green-500 text-5xl h-15 rounded-2xl w-20 hover:bg-green-600 hover:text-white">+</button>
            </div>
        </>
    );
}

export default IncrementDecrement;
