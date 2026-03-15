import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

export const Modal = styled.div`
  background-color: #E66767;
  color: #FFF;
  max-width: 1024px;
  width: 100%;
  height: 344px;
  padding: 32px;
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    height: auto;
    padding: 16px;
  }
`

export const CloseIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  flex-shrink: 0;
  margin-right: 24px;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    margin-right: 0;
    margin-bottom: 16px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Title = styled.h3`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`

export const Description = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  margin-bottom: 16px;
  max-width: 656px;
`

export const PortionText = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 16px;
`

export const Button = styled.button`
  background-color: #FFEED2;
  color: #E66767;
  border: none;
  padding: 4px 0;
  width: 218px;
  height: 24px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`