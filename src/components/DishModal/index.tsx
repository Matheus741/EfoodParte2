import { useCart } from '../../context/CartContext'
import closeBtn from '../../assets/images/close.svg'
import { Overlay, Modal, Image, Content, Title, Description, PortionText, Button, CloseIcon } from './styles'

type Props = {
  title: string
  description: string
  portion: string
  image: string
  price: number
  onClose: () => void
}

const DishModal = ({ title, description, portion, image, price, onClose }: Props) => {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: Math.random(),
      nome: title,
      descricao: description,
      foto: image,
      preco: price
    })
    onClose()
  }

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <CloseIcon src={closeBtn} alt="Fechar" onClick={onClose} />
        <Image src={image} alt={title} />
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <PortionText>Serve: {portion}</PortionText>
          <Button onClick={handleAddToCart}>
            Adicionar ao carrinho - {formattedPrice}
          </Button>
        </Content>
      </Modal>
    </Overlay>
  )
}

export default DishModal