import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainNav from './common/MainNav'
import Tienda from './pages/Tienda'
import ProductoDetalle from './pages/ProductoDetalle'
import Carrito from './pages/Carrito'
import MainFooter from './common/MainFooter'
import Inicio from './pages/Inicio'

function App() {
  return (
    <>
      <BrowserRouter>
        <MainNav />
        <main>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/tienda' element={<Tienda />} />
            <Route path='/productodetalle/:idproducto' element={<ProductoDetalle />} />
            <Route path='/carrito' element={<Carrito />} />
          </Routes>
        </main>
        <MainFooter />
      </BrowserRouter>
    </>
  )
}

export default App
