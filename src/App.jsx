import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import Purchases from './pages/Purchases'
import NavBar from './components/NavBar'
import { LoadingScreen } from './components'
import { useSelector } from 'react-redux'
import './App.css'
import ProtectedRoutes from './components/ProtectRoutes'

function App() {

  const isLoading = useSelector((state) => state.isLoading);


  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        {isLoading && <LoadingScreen />}
        {/* <Container className="mt-5"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/shop/:id' element={<ProductDetails />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/purchases" element={<Purchases />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </HashRouter>

    </div>
  )
};

export default App;
