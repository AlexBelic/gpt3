import React from 'react'
import './App.css'
import { Header, Blog, Footer, Features, Possibility, WhatGPT3 } from './containers'
import { CTA, Brend, Navbar } from './components'

function App() {

  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brend />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
