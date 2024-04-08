function IncrementDecrement() {

  return (
    <>
        <div className="flex justify-center gap-5 mt-10">
            <button className="border-2 border-red-500 text-5xl h-15 rounded-2xl w-20 hover:bg-red-600 hover:text-white">-</button>
            <span className="text-[64px] text-blue-600">0</span>
            <button className="border-2 border-green-500 text-5xl h-15 rounded-2xl w-20 hover:bg-green-600 hover:text-white">+</button>
        </div>
    </>
  )
}

export default IncrementDecrement
