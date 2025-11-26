import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './assets/Header'
import Home from './assets/Home'
import About from './assets/About'
import Product from './assets/Product'
import Blog from './assets/Blog'
import Singlepost from './assets/Singlepost'
import User from './assets/User'
import Contact from './assets/Contact'
import Cart from './assets/Cart'
import Footer from './assets/Footer'


function App() {
  
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/singlepost' element={<Singlepost/>}/>
        <Route path='/User/:name' element={<User/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
