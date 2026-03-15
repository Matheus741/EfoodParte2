import { Container, Inner, Logo, Socials, SocialIcon, Disclaimer } from './styles'
import logoImg from '../../assets/images/logo.svg'
import instagramImg from '../../assets/images/instagram.svg'
import facebookImg from '../../assets/images/facebook.svg'
import twitterImg from '../../assets/images/twitter.svg'

const Footer = () => {
  return (
    <Container>
      <Inner>
        <Logo src={logoImg} alt="efood" />
        <Socials>
          <a href="https://www.instagram.com" aria-label="Instagram">
            <SocialIcon src={instagramImg} alt="" />
          </a>
          <a href="https://www.facebook.com" aria-label="Facebook">
            <SocialIcon src={facebookImg} alt="" />
          </a>
          <a href="https://www.twitter.com" aria-label="Twitter">
            <SocialIcon src={twitterImg} alt="" />
          </a>
        </Socials>
        <Disclaimer>
          A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela
          entrega, qualidade dos produtos é toda do estabelecimento contratado.
        </Disclaimer>
      </Inner>
    </Container>
  )
}

export default Footer
