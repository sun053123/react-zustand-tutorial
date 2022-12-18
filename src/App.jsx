import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Todo from './pages/Todo'
import Blog from './pages/Blog'
import Market from './pages/Market'
import Navbar from './components/navbar/Navbar'
import NoPage from './pages/NoPage'
import XoGame from './pages/XoGame'
import SlidePuzzle from './pages/SlidePuzzle'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route index element={<Home />} />
          <Route path="todo" element={<Todo />} />
          <Route path="blog" element={<Blog />} />
          <Route path="market" element={<Market />} />
          <Route path="xogame" element={<XoGame />} />
          <Route path="slide-puzzle" element={<SlidePuzzle />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </>
  )
}

export default App
