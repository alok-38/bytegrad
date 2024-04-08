import { useState } from 'react'

export default function PostUserComments() {
    const [resourceType, setResourceType] = useState('posts');

    return (
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('posts')}>Posts</button>
            </div>
            <h1>{resourceType}</h1>
        </>
    )
}