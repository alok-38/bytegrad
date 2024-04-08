import { useState } from 'react'

export default function PostUserComments() {
    const [resourceType, setResourceType] = useState('posts');

    return (
        <>
            <div className='flex justify-center gap-5 mb-10 mt-10 text-3xl'>
                <button className='w-[100px] border-2 hover:bg-slate-400 hover:text-white px-1.5 py-1.5' onClick={() => setResourceType('posts')}>Posts</button>
                <button className='w-[100px] border-2 hover:bg-slate-400 hover:text-white px-1.5 py-1.5' onClick={() => setResourceType('posts')}>Users</button>
                <button className='w-[150px] border-2 hover:bg-slate-400 hover:text-white px-15  py-1.5' onClick={() => setResourceType('posts')}>Comments</button>
            </div>
            <h1 className='text-5xl'>{resourceType}</h1>
        </>
    )
}