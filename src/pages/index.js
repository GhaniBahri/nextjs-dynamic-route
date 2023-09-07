import Image from 'next/image'
import { Inter } from 'next/font/google'
import Posts from './posts'
import { useState, useEffect } from 'react'

export default function Home() {
  const [posts, setPosts]= useState([])
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      {/* <Posts posts={posts} setPosts={setPosts}/> */}
    </main>
  )
}
