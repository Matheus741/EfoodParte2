import styled from 'styled-components'
import { colors } from '../../styles/colors'
import estrela from '../../assets/images/estrela.svg'

// Mantenha suas variáveis
const CARD_W = 472
const CARD_H = 398
const IMG_H = 217

export const CardContainer = styled.li`
  width: ${CARD_W}px;
  height: ${CARD_H}px;
  background-color: ${colors.white};
  border: 1px solid ${colors.primary};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Figure = styled.figure`
  position: relative;
  width: 100%;
  height: ${IMG_H}px;
  margin: 0;
`

export const Cover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

export const Badges = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

type BadgeProps = { $variant?: 'destaque' | 'categoria' }

export const Badge = styled.span<BadgeProps>`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 6px 4px;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  display: inline-block;
  min-width: ${({ $variant }) => ($variant === 'destaque' ? '121px' : '61px')};
`

export const Content = styled.div`
  flex: 1;
  padding: 8px;
  display: flex;
  flex-direction: column;
`

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.primary};
  margin: 0;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const RatingValue = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.primary};
`

export const StarIcon = styled.i`
  width: 21px;
  height: 21px;
  background: url(${estrela}) no-repeat center / contain;
  display: inline-block;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.primary};
  width: 456px; 
  margin-bottom: 16px;
`

export const Cta = styled.button`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  align-self: flex-start;
  margin-top: auto;
`