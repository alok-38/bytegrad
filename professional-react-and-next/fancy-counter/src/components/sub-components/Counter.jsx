function Counter({ increment, decrement }) {
    return (
        <div className="flex justify-evenly">
            <button onClick={decrement} className="text-5xl m-3 text-white hover:text-red-600">-</button>
            <button onClick={increment} className="text-5xl text-white hover:text-green-600">+</button>
        </div>
    );
}

export default Counter;