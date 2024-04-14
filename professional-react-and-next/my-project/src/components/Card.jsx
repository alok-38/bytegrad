import React from '../assets/react.svg';

export default function Card() {
    return (
        <div className='flex flex-col justify-center text-center '>
            <div className='mt-10 p-10 text-2xl hover:text-white border-solid border-[1px] rounded-2xl hover:bg-indigo-300 border-indigo-600 w-[20%] mx-auto'>
                <img className='w-20 mx-auto mt-10 mb-10' src={React}></img>
                <h2 className='m-5'>Alok</h2>
                <p>I am learning to React!</p>
            </div>
        </div>
    )
}