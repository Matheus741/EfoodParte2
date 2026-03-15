import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Container = styled.section`
  width: 100%;
  height: 384px;                
  background-color: ${colors.secondary};
  position: relative;
  display: flex; 
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  width: 125px;                  
  height: 57.5px;               
  margin-top: 40px; 
  display: block;
`

export const Title = styled.h1`
  width: 539px;                  
  height: 84px;                 
  margin-top: 138.5px; 
  text-align: center;

  font-size: 36px;               
  line-height: 42px;
  font-weight: 900;
  color: ${colors.primary};
`