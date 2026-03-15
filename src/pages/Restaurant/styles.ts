import styled from 'styled-components'
import { colors } from '../../styles/colors'

const BANNER_H = 280
const HEADER_H = 186
const CONTENT_MAX_W = 1024 

export const HeaderContainer = styled.header`
  width: 100%;
  height: ${HEADER_H}px;
  display: flex;
  align-items: center;
  background-color: ${colors.background};
  position: relative; 
`

export const HeaderContent = styled.div`
  max-width: ${CONTENT_MAX_W}px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`

export const LinkHeader = styled.a`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 900; 
  color: ${colors.primary}; 
  text-decoration: none;
  z-index: 2; 
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  position: absolute;
  top: 63px; 
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`

export const Banner = styled.div`
  width: 100%;
  height: ${BANNER_H}px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
`

export const BannerContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: ${CONTENT_MAX_W}px;
  height: 100%;
  margin: 0 auto;
  padding: 32px 16px; 
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
`

export const Category = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 100; 
  color: ${colors.white};
`

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 900;
  color: ${colors.white};
  margin: 0;
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 56px auto;
  padding: 0 16px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 32px;           
  list-style: none;
  padding: 0;
  margin: 0;
`