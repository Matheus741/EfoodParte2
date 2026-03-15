import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 80px 0; 
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 472px); 
  justify-content: space-between;          
  column-gap: 80px;
  row-gap: 48px;

  list-style: none;
  padding: 0;
  margin: 0;
`