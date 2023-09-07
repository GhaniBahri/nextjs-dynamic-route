import Link from 'next/link'
// import React from 'react'
import { useEffect, useState } from 'react'

function Posts() {
    const [posts, setPosts]= useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data=>{
                setPosts(data)
            })
    }, [])
  return (
    <div>
        <ul>{
            posts.map((post)=>{
                return (<li key={post.id}>
                    <Link  href={`/posts/${post.id}`}>{post.title}</Link>
                    </li> )
            })
        }</ul>
    </div>
  )
}

export default Posts