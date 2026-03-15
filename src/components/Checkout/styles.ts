import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`

export const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100vh;
  background-color: #E66767;
  padding: 32px 8px;
  display: flex;
  flex-direction: column;
  z-index: 1001;
  font-family: Roboto, sans-serif;
  overflow-y: auto;
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: #FFEBD9;
  margin-bottom: 16px;
`

export const Items = styled.ul`
  list-style: none;
`

export const Item = styled.li`
  background-color: #FFEBD9;
  padding: 8px;
  margin-bottom: 16px;
  display: flex;
  position: relative;
  width: 344px;
`

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 8px;
`

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ItemTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: #E66767;
  margin-bottom: 16px;
`

export const ItemPrice = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #E66767;
`

export const RemoveButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 16px;
    height: 16px;
  }
`

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 344px;
  color: #FFEBD9;
  font-weight: 700;
  font-size: 14px;
  margin-top: 24px;
  margin-bottom: 16px;
`

export const Button = styled.button`
  width: 344px;
  height: 24px;
  background-color: #FFEBD9;
  color: #E66767;
  border: none;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PrimaryAction = styled(Button)``
export const SecondaryAction = styled(Button)``

export const DeliveryForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 344px;
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  label {
    font-size: 14px;
    font-weight: 700;
    color: #FFEBD9;
    margin-bottom: 8px; 
  }

  input {
    width: 100%;
    height: 32px;
    padding: 0 8px;
    border: none;
    background-color: #FFEBD9;
    color: #4B4B4B;
    font-size: 14px;
    font-weight: 700;
  }
`

export const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 34px; 
`

export const PaymentRowCvv = styled.div`
  display: grid;
  grid-template-columns: 228px 87px; 
  gap: 30px;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
`

export const SuccessText = styled.p`
  color: #FFEBD9;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  margin-bottom: 24px;
  width: 344px;
`