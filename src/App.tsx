import { GlobalStyle } from './styles/GlobalStyle'
import AppRoutes from './routes'
import Checkout from './components/Checkout'
import { useCart } from './context/CartContext'

function App() {
  const { isOpen, closeCart } = useCart()

  return (
    <>
      <GlobalStyle />
      <AppRoutes />
      <Checkout isOpen={isOpen} onClose={closeCart} />
    </>
  )
}

export default App