import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${colors.background};
  display: flex;
  align-items: center;
`

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;
`

export const LeftLink = styled(Link)`
  position: absolute;
  top: 59px;
  left: 171px;
  transform: translateY(-50%);
  font-size: 18px;
  font-weight: 900;
  color: ${colors.primary};
  text-decoration: none;
`

export const CenterLogo = styled.img`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 125px;
  height: 57.5px;
  display: block;
`

export const RightCart = styled.button`
  position: absolute;
  top: 59px;
  right: 171px;
  transform: translateY(-50%);
  background: transparent;
  border: 0;
  color: ${colors.primary};
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
`