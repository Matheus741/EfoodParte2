import { useState, FormEvent, useEffect } from 'react'
import { useCart } from '../../context/CartContext'
import lixeira from '../../assets/images/lixeira.svg'

import {
  Overlay,
  Sidebar,
  Items,
  Item,
  ItemImage,
  ItemInfo,
  ItemTitle,
  ItemPrice,
  RemoveButton,
  Title,
  TotalContainer,
  PrimaryAction,
  DeliveryForm,
  Field,
  TwoColumns,
  Actions,
  SecondaryAction,
  PaymentRowCvv,
  SuccessText
} from './styles'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const Checkout = ({ isOpen, onClose }: Props) => {
  const { items, removeItem, clearCart } = useCart()
  const [step, setStep] = useState<'cart' | 'delivery' | 'payment' | 'success'>('cart')

  useEffect(() => {
    if (!isOpen) {
      setStep('cart')
    }
  }, [isOpen])

  if (!isOpen) return null

  const totalValue = items.reduce((acc, item) => acc + item.preco, 0)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const handleFinish = (e: FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setStep('success')
  }

  const handleClose = () => {
    clearCart()
    setStep('cart')
    onClose()
  }

  return (
    <Overlay onClick={handleClose}>
      <Sidebar onClick={(e) => e.stopPropagation()}>
        {step === 'cart' && (
          <>
            <Title>Carrinho</Title>
            {items.length > 0 ? (
              <>
                <Items>
                  {items.map((item) => (
                    <Item key={item.id}>
                      <ItemImage src={item.foto} alt={item.nome} />
                      <ItemInfo>
                        <ItemTitle>{item.nome}</ItemTitle>
                        <ItemPrice>{formatPrice(item.preco)}</ItemPrice>
                      </ItemInfo>
                      <RemoveButton type="button" onClick={() => removeItem(item.id)}>
                        <img src={lixeira} alt="Remover" />
                      </RemoveButton>
                    </Item>
                  ))}
                </Items>
                <TotalContainer>
                  <span>Valor total</span>
                  <span>{formatPrice(totalValue)}</span>
                </TotalContainer>
                <PrimaryAction type="button" onClick={() => setStep('delivery')}>
                  Continuar com a entrega
                </PrimaryAction>
              </>
            ) : (
              <div style={{ textAlign: 'center', marginTop: '24px' }}>
                <SuccessText>Seu carrinho está vazio.</SuccessText>
              </div>
            )}
          </>
        )}

        {step === 'delivery' && (
          <>
            <Title>Entrega</Title>
            <DeliveryForm onSubmit={(e) => { e.preventDefault(); setStep('payment') }}>
              <Field>
                <label htmlFor="receiver">Quem irá receber</label>
                <input id="receiver" type="text" required />
              </Field>
              <Field>
                <label htmlFor="address">Endereço</label>
                <input id="address" type="text" required />
              </Field>
              <Field>
                <label htmlFor="city">Cidade</label>
                <input id="city" type="text" required />
              </Field>
              <TwoColumns>
                <Field>
                  <label htmlFor="cep">CEP</label>
                  <input id="cep" type="text" required />
                </Field>
                <Field>
                  <label htmlFor="number">Número</label>
                  <input id="number" type="text" required />
                </Field>
              </TwoColumns>
              <Field>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input id="complement" type="text" />
              </Field>
              <Actions>
                <PrimaryAction type="submit">Continuar com o pagamento</PrimaryAction>
                <SecondaryAction type="button" onClick={() => setStep('cart')}>
                  Voltar para o carrinho
                </SecondaryAction>
              </Actions>
            </DeliveryForm>
          </>
        )}

        {step === 'payment' && (
          <>
            <Title>Pagamento - Valor a pagar {formatPrice(totalValue)}</Title>
            <DeliveryForm onSubmit={handleFinish}>
              <Field>
                <label htmlFor="cardName">Nome no cartão</label>
                <input id="cardName" type="text" required />
              </Field>
              <PaymentRowCvv>
                <Field>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input id="cardNumber" type="text" required />
                </Field>
                <Field>
                  <label htmlFor="cvv">CVV</label>
                  <input id="cvv" type="text" required />
                </Field>
              </PaymentRowCvv>
              <TwoColumns>
                <Field>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <input id="expiresMonth" type="text" required />
                </Field>
                <Field>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <input id="expiresYear" type="text" required />
                </Field>
              </TwoColumns>
              <Actions>
                <PrimaryAction type="submit">Finalizar pagamento</PrimaryAction>
                <SecondaryAction type="button" onClick={() => setStep('delivery')}>
                  Voltar para a entrega
                </SecondaryAction>
              </Actions>
            </DeliveryForm>
          </>
        )}

        {step === 'success' && (
          <>
            <Title>Pedido realizado - ORDER_ID</Title>
            <SuccessText>
              Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
              <br /><br />
              Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
              <br /><br />
              Lembre-se da importância de higienizar as mãos após o recebimento do seu pedido, garantindo assim sua segurança e bem-estar.
              <br /><br />
              Esperamos que desfrute de uma ótima experiência gastronômica. Bom apetite!
            </SuccessText>
            <PrimaryAction type="button" onClick={handleClose}>
              Concluir
            </PrimaryAction>
          </>
        )}
      </Sidebar>
    </Overlay>
  )
}

export default Checkout
