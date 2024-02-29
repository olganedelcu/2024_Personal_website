import avatar from './assets/avatar.png'
import './App.css'

import AboutMe from './components/About.tsx'
import Blog from './components/Blog.tsx'

function App() {

  return (
    <>
            <AboutMe/>
            <a href="#" target="_blank">
                <img src={avatar} className="avatar" alt="Me" />
            </a>
        <Blog />
    </>
  )
}

export default App
