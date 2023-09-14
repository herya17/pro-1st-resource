import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProductPage from './pages/ProductPage'
import DetailPage from './pages/DetailPage'
import NoPage from './pages/NoPage'

export default function Example() {
  return (
    <div className="bg-white">
      <header>
        <Navigation />
      </header>
      <main className="pt-16">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/product/:id' element={<DetailPage />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
