import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Card = styled.li`
  background-color: ${colors.primary};
  color: ${colors.background}; 
  padding: 8px; 
  display: flex;
  flex-direction: column;
  height: 100%; 
`

export const Image = styled.img`
  width: 100%;
  height: 167px; 
  object-fit: cover;
  display: block;
`

export const Title = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 900;
  margin-top: 8px;
  margin-bottom: 8px;
  margin: 8px 0;
`

export const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  flex: 1; 
`

export const Button = styled.button`
  width: 100%;
  background-color: ${colors.background};
  color: ${colors.primary};
  border: none;
  padding: 4px 0; 
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  display: block;

  &:hover {
    filter: brightness(0.9);
  }
`