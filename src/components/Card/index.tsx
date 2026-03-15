import {
  CardContainer,
  Figure,
  Cover,
  Badges,
  Badge,
  Content,
  HeaderRow,
  Title,
  Rating,
  RatingValue,
  StarIcon,
  Description,
  Cta
} from './styles'

type Props = {
  title: string
  description: string
  image: string
  rating?: number
  badges?: string[]
}

const Card = ({ title, description, image, rating = 4.6, badges = [] }: Props) => {
  const toVariant = (text: string) =>
    text.trim().toLowerCase() === 'destaque da semana' ? 'destaque' : 'categoria' as const

  return (
    <CardContainer>
      <Figure>
        <Cover src={image} alt={title} />
        {badges.length > 0 && (
          <Badges>
            {badges.map((b) => (
              <Badge key={b} $variant={toVariant(b)}>
                {b}
              </Badge>
            ))}
          </Badges>
        )}
      </Figure>

      <Content>
        <HeaderRow>
          <Title>{title}</Title>
          <Rating>
            <RatingValue>{rating.toFixed(1)}</RatingValue>
            <StarIcon aria-hidden />
          </Rating>
        </HeaderRow>

        <Description>{description}</Description>
        <Cta>Saiba mais</Cta>
      </Content>
    </CardContainer>
  )
}

export default Card