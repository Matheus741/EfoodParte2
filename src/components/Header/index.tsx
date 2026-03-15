import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Container, Inner, LeftLink, CenterLogo, RightCart } from './styles'
import logo from '../../assets/images/logo.svg'
import Checkout from '../Checkout'
import { useCart } from '../../context/CartContext'

const Header = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const { items } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  if (isHome) return null

  return (
    <>
      <Container>
        <Inner>
          <LeftLink to="/">Restaurantes</LeftLink>
          <CenterLogo src={logo} alt="efood" />
          <RightCart onClick={() => setIsCheckoutOpen(true)}>
            {items.length} produto(s) no carrinho
          </RightCart>
        </Inner>
      </Container>

      <Checkout isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </>
  )
}

export default Header