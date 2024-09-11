


import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Courses from './pages/Courses'
import AboutUsPage from './pages/AboutUsPage'
import PageNotFound from './pages/404'
import ProductPage from './pages/ProductPage'
import ProductDetailPage from './pages/ProductDetailPage'

function App() {


  return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={ <HomePage /> } />
                <Route  path='courses' element={ <Courses /> } />
                <Route  path='about-us' element={ <AboutUsPage /> } />
                <Route  path='productspage' element={ <ProductPage /> } />
                <Route  path='productspage/:id' element={ <ProductDetailPage /> } />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
  )
}

export default App
