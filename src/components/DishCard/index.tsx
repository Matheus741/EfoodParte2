import { useState } from 'react'
import { Dish } from '../../context/CartContext'
import DishModal from '../DishModal'
import { Card, Image, Title, Description, Button } from './styles'

type Props = {
  dish: Dish
}

const DishCard = ({ dish }: Props) => {
  const [modalAberta, setModalAberta] = useState(false)

  const longDescription = "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião."

  return (
    <>
      <Card>
        <Image src={dish.foto} alt={dish.nome} />
        <Title>{dish.nome}</Title>
        <Description>{dish.descricao}</Description>
        <Button onClick={() => setModalAberta(true)}>
          Adicionar ao carrinho
        </Button>
      </Card>

      {modalAberta && (
        <DishModal
          title={dish.nome}
          description={longDescription}
          portion="de 2 a 3 pessoas"
          image={dish.foto}
          price={dish.preco}
          onClose={() => setModalAberta(false)}
        />
      )}
    </>
  )
}

export default DishCard