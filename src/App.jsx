import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import Sidebar from './Components/Sidebar/Sidebar'

const App = () => {
  const [sidebar, setSidebar] = useState(true); // Shared sidebar state
  const [category, setCategory] = useState(0); // Shared category state
  
  // Toggle sidebar function for navbar
  const toggleSidebar = () => {
    setSidebar(prev => !prev);
  };

  return (
    <div className="app-container">
      <Navbar setSidebar={toggleSidebar}/>
      <div className="content-wrapper">
        <Sidebar 
          sidebar={sidebar} 
          category={category} 
          setCategory={setCategory} 
        />
        <Routes>
          <Route path="/" element={<Home sidebar={sidebar} category={category}/>}/>
          <Route path="/video/:categoryId/:videoId" element={
            <Video sidebar={sidebar} category={category} setCategory={setCategory}/>
          }/>
        </Routes>
      </div>
    </div>
  )
}

export default App
