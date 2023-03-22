import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Login from './components/Login'
import blogService from './services/blogs'

const App = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  const blogForm = () => {
    return (
      <div>
        <h2>blogs</h2>
        <div>{user.username} logged in</div>
        <br />
        {
          blogs.map(blog => 
            <Blog key={blog._id} blog={blog} />
          )
        }
      </div>
    )
  }

  return (
    <div>
      { user === null &&
        <Login onUserChange={setUser} setErrorMessage={setErrorMessage} /> 
      }
      { user !== null &&
        blogForm() 
      }
    </div>
  )
}

export default App
