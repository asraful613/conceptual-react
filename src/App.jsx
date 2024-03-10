import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './conceptual.css'
import Conceptual from './conceptual/Conceptual'
function App() {
  const [post,setPost]=useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
         setPost(data)
      })
  }, [])
  
  console.log(post);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Conceptual React</h1>
      {
        post.map(post => (
          // <Conceptual post={post}></Conceptual>
          <div className="card">
            <p>UserId: {post.userId}</p>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div> 
        ))
      }
    </>
  )
}

export default App
