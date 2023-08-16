import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from './pages/Home.tsx'
import Movie from './pages/Movie.tsx'
import Search from './pages/Search.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="movie/:id" element={<Movie/>}/>
          <Route path="search" element={<Search/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
