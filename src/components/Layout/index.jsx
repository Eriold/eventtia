import React from 'react'
import styled from 'styled-components'

const MainContent = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Layout = ({ children }) => {
  return (
    <MainContent
      id='Main'
    >
      {children}
    </MainContent>
  )
}
