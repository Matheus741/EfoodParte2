import Footer from '../../components/Footer'
import DishCard from '../../components/DishCard'
import Checkout from '../../components/Checkout'
import { useCart } from '../../context/CartContext'

import { 
  Banner, Overlay, BannerContent, Category, Title, Container, List, 
  HeaderContainer, HeaderContent, LinkHeader, Logo 
} from './styles'

import logoImg from '../../assets/images/logo.svg' 
import bannerImg from '../../assets/images/macarrao2.png'
import pizzaImg from '../../assets/images/pizza.png'

const Restaurant = () => {
  const { items, isOpen, closeCart } = useCart()

  const restaurant = {
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    banner: bannerImg
  }

  const dishData = {
    id: 1,
    nome: "Pizza Margherita",
    descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    foto: pizzaImg,
    preco: 60.9
  }
  

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <LinkHeader href="/">Restaurantes</LinkHeader>
          <Logo src={logoImg} alt="efood" />
          <LinkHeader as="span">{items.length} produto(s) no carrinho</LinkHeader>
        </HeaderContent>
      </HeaderContainer>

      <Banner style={{ backgroundImage: `url(${restaurant.banner})` }}>
        <Overlay />
        <BannerContent>
          <Category>{restaurant.category}</Category>
          <Title>{restaurant.title}</Title>
        </BannerContent>
      </Banner>

      <Container>
        <List>
          <DishCard dish={dishData} />
          <DishCard dish={dishData} />
          <DishCard dish={dishData} />
          <DishCard dish={dishData} />
          <DishCard dish={dishData} />
          <DishCard dish={dishData} />
        </List>
      </Container>

      <Footer />
      <Checkout isOpen={isOpen} onClose={closeCart} />
    
    </>
  )
}

export default Restaurant