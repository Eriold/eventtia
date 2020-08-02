import React from 'react'
import THEME from 'components/theme'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'

export const App = () => {
  const themeMode = useSelector(state => state.ui.mode.mode)
  return (
    <>
      <ThemeProvider theme={THEME[themeMode]}>
        <h1>Live Event Analytics</h1>
      </ThemeProvider>
    </>
  )
}
