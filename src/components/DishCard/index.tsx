import { useState } from 'react'
import { Dish } from '../../context/CartContext'
import DishModal from '../DishModal'
import { Card, Image, Title, Description, Button } from './styles'

type DishWithPortion = Dish & {
  porcao: string
}

type Props = {
  dish: DishWithPortion
}

const DishCard = ({ dish }: Props) => {
  const [modalAberta, setModalAberta] = useState(false)

  return (
    <>
      <Card>
        <Image src={dish.foto} alt={dish.nome} />
        <Title>{dish.nome}</Title>
        <Description>{dish.descricao}</Description>
        <Button onClick={() => setModalAberta(true)}>Comprar</Button>
      </Card>

      {modalAberta && (
        <DishModal
          title={dish.nome}
          description={dish.descricao}
          portion={dish.porcao}
          image={dish.foto}
          price={dish.preco}
          onClose={() => setModalAberta(false)}
        />
      )}
    </>
  )
}

export default DishCard