import styled from 'styled-components'
import { colors } from '../../styles/colors'

const FOOTER_H = 298
const LOGO_W = 125
const LOGO_H = 57.5
const LOGO_TOP = 40
const SOCIALS_W = 88
const SOCIALS_H = 24
const SOCIALS_TOP = 130
const ICON_SIZE = 24
const ICON_GAP = 8
const DISCLAIMER_W = 480
const DISCLAIMER_H = 24
const DISCLAIMER_TOP = 234

export const Container = styled.footer`
  width: 100%;
  height: ${FOOTER_H}px;
  background-color: ${colors.secondary};
  display: block;
`

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;
`

export const Logo = styled.img`
  position: absolute;
  top: ${LOGO_TOP}px;
  left: 50%;
  transform: translateX(-50%);
  width: ${LOGO_W}px;
  height: ${LOGO_H}px;
  display: block;
`

export const Socials = styled.div`
  position: absolute;
  top: ${SOCIALS_TOP}px;
  left: 50%;
  transform: translateX(-50%);
  width: ${SOCIALS_W}px;
  height: ${SOCIALS_H}px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${ICON_GAP}px;

  a {
    display: inline-flex;
    width: ${ICON_SIZE}px;
    height: ${ICON_SIZE}px;
  }
`

export const SocialIcon = styled.img`
  width: ${ICON_SIZE}px;
  height: ${ICON_SIZE}px;
  display: block;
`

export const Disclaimer = styled.p`
  position: absolute;
  top: ${DISCLAIMER_TOP}px;
  left: 50%;
  transform: translateX(-50%);
  width: ${DISCLAIMER_W}px;
  height: ${DISCLAIMER_H}px;
  margin: 0;
  text-align: center;
  color: ${colors.primary};
  font-size: 10px;
  line-height: 14px;
`