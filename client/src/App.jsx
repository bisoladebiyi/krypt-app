import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Transactions from './components/Transactions'
import Welcome from './components/Welcome'

const App = () => {
  return (
    <div className="App text-white">
      <div className="gradient-bg-welcome px-10 sm:px-20 lg:px-48">
      <Navbar />
      <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
