import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'

const App = () => {
  return (
    <div className="App text-white">
      <div className="gradient-bg-welcome px-48">
      <Navbar />
      <Welcome />
      </div>
      <Footer />
    </div>
  )
}

export default App
