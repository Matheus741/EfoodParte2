import { Container, Logo, Title } from './styles'
import logo from '../../assets/images/logo.svg'

const Banner = () => (
  <Container>
    <Logo src={logo} alt="efood" />
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </Container>
)

export default Banner