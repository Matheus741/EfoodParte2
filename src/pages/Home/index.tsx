import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Footer from '../../components/Footer'

import { Container, List } from './styles'

type ApiRestaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<ApiRestaurant[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const loadRestaurants = async () => {
      try {
        const response = await fetch('https://api-ebac.vercel.app/api/efood/restaurantes')

        if (!response.ok) {
          throw new Error('Falha ao carregar restaurantes')
        }

        const data = (await response.json()) as ApiRestaurant[]
        setRestaurants(data)
      } catch (error) {
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }

    loadRestaurants()
  }, [])

  return (
    <>
      <Header />
      <Banner />

      <Container>
        {isLoading && <p>Carregando restaurantes...</p>}
        {hasError && <p>Não foi possível carregar os restaurantes.</p>}

        {!isLoading && !hasError && (
          <List>
            {restaurants.map((restaurant) => (
              <Link
                key={restaurant.id}
                to={`/restaurant/${restaurant.id}`}
                style={{ textDecoration: 'none' }}
              >
                <Card
                  title={restaurant.titulo}
                  description={restaurant.descricao}
                  image={restaurant.capa}
                  rating={restaurant.avaliacao}
                  badges={[
                    ...(restaurant.destacado ? ['Destaque da semana'] : []),
                    restaurant.tipo
                  ]}
                />
              </Link>
            ))}
          </List>
        )}
      </Container>

      <Footer />
    </>
  )
}

export default Home