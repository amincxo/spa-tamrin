


import { BrowserRouter, Navigate, Route,  Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Courses from './pages/Courses'
import AboutUsPage from './pages/AboutUsPage'
import PageNotFound from './pages/404'
import ProductPage from './pages/ProductPage'
import ProductDetailPage from './pages/ProductDetailPage'
import LandingPage from './pages/LandingPage'

function App() {


  return (
        <BrowserRouter>
            <Routes>
                <Route  index element={ <HomePage /> } />
                <Route  path='courses' element={ <Courses /> } />
                <Route  path='landing' element={ <Navigate to="/" replace /> } />
                <Route  path='about-us' element={ <AboutUsPage /> } />
                <Route  path='landingpage' element={ <LandingPage/> } />
                <Route  path='productspage' element={ <ProductPage /> } />
                <Route  path='productspage/:id' element={ <ProductDetailPage /> } />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
  )
}

export default App
