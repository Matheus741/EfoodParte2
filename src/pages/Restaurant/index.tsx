import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Footer from '../../components/Footer'
import DishCard from '../../components/DishCard'
import Checkout from '../../components/Checkout'
import { Dish, useCart } from '../../context/CartContext'

import {
  Banner,
  Overlay,
  BannerContent,
  Category,
  Title,
  Container,
  List,
  HeaderContainer,
  HeaderContent,
  LinkHeader,
  Logo
} from './styles'

import logoImg from '../../assets/images/logo.svg'

type RestaurantData = {
  id: number
  titulo: string
  tipo: string
  capa: string
  cardapio: Array<Dish & { porcao: string }>
}

const Restaurant = () => {
  const { id } = useParams()
  const { items, isOpen, closeCart, openCart } = useCart()

  const [restaurants, setRestaurants] = useState<RestaurantData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const loadRestaurants = async () => {
      try {
        const response = await fetch('https://api-ebac.vercel.app/api/efood/restaurantes')

        if (!response.ok) {
          throw new Error('Falha ao carregar restaurante')
        }

        const data = (await response.json()) as RestaurantData[]
        setRestaurants(data)
      } catch (error) {
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }

    loadRestaurants()
  }, [])

  const selectedRestaurant = useMemo(
    () => restaurants.find((restaurant) => restaurant.id === Number(id)),
    [restaurants, id]
  )

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <LinkHeader as={Link} to="/">
            Restaurantes
          </LinkHeader>
          <Logo src={logoImg} alt="efood" />
          <LinkHeader as="button" type="button" onClick={openCart}>
            {items.length} produto(s) no carrinho
          </LinkHeader>
        </HeaderContent>
      </HeaderContainer>

      {isLoading && <Container>Carregando restaurante...</Container>}
      {hasError && <Container>Não foi possível carregar o restaurante.</Container>}

      {!isLoading && !hasError && selectedRestaurant && (
        <>
          <Banner style={{ backgroundImage: `url(${selectedRestaurant.capa})` }}>
            <Overlay />
            <BannerContent>
              <Category>{selectedRestaurant.tipo}</Category>
              <Title>{selectedRestaurant.titulo}</Title>
            </BannerContent>
          </Banner>

          <Container>
            <List>
              {selectedRestaurant.cardapio.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </List>
          </Container>
        </>
      )}

      {!isLoading && !hasError && !selectedRestaurant && (
        <Container>Restaurante não encontrado.</Container>
      )}

      <Footer />
      <Checkout isOpen={isOpen} onClose={closeCart} />
    </>
  )
}

export default Restaurant