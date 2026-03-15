import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Footer from '../../components/Footer'

import sushiImg from '../../assets/images/suschi.png'
import macarraoImg from '../../assets/images/macarrao.png'

import { Container, List } from './styles'

const Home = () => {
  return (
    <>
      <Header />
      <Banner />

      <Container>
        <List>
          <Link to="/restaurant" style={{ textDecoration: 'none' }}>
            <Card
              title="Hioki Sushi"
              description="Peça já o melhor da culinária japonesa no conforto da sua casa!
              Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
              Entrega rápida, embalagens cuidadosas e qualidade garantida.
              Experimente o Japão sem sair do lar com nosso delivery!"
              image={sushiImg}    
              rating={4.9}
              badges={['Destaque da semana', 'Japonesa']}

            />
          </Link>

          <Link to="/restaurant" style={{ textDecoration: 'none' }}>
            <Card
              title="La Dolce Vita Trattoria"
              description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
              Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.
              Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
              image={macarraoImg}
              rating={4.6}
              badges={['italiana']}
              
            />
          </Link>

          <Link to="/restaurant" style={{ textDecoration: 'none' }}>
            <Card
              title="La Dolce Vita Trattoria"
              description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
              Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.
              Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
              image={macarraoImg}
              rating={4.6}
              badges={['italiana']}
            />
          </Link>

          <Link to="/restaurant" style={{ textDecoration: 'none' }}>
            <Card
              title="La Dolce Vita Trattoria"
              description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
              Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.
              Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
              image={macarraoImg}
              rating={4.6}
              badges={['italiana']}
            />
          </Link>

          <Link to="/restaurant" style={{ textDecoration: 'none' }}>
            <Card
              title="La Dolce Vita Trattoria"
              description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
              Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.
              Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
              image={macarraoImg}
              rating={4.6}
              badges={['italiana']}
            />
          </Link>

          <Link to="/restaurant" style={{ textDecoration: 'none' }}>
            <Card
              title="La Dolce Vita Trattoria"
              description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
              Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.
              Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
              image={macarraoImg}
              rating={4.6}
              badges={['italiana']}
            />
          </Link>
        </List>
      </Container>

      <Footer />
    </>
  )
}

export default Home
