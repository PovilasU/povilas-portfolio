import { useState, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Stopwatch from './components/Stopwatch'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import WeatherApp from './components/WeatherApp'

// npm i react-router-dom

function App() {


  return (
    <BrowserRouter>
      <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/weather" element={<WeatherApp />}/>
          </Routes>
        </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
