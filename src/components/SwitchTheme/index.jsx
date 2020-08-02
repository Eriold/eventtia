import React, { memo } from 'react'
import styled, { withTheme } from 'styled-components'
import { connect } from 'react-redux'
import { changeTheme } from 'state/modules/ui/mode'

const CheckBoxWrapper = styled.div`
  position: relative;
`
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`

const Switch = memo(withTheme(({
  theme,
  changeTheme,
  setContextItem,
  mode
}) => {
  const handleItemSelected = async them => {
    const theme = mode === 'light' ? 'dark' : 'light'
    const themeMode = mode

    switch (them) {
      case 'change_mode':
        changeTheme(theme)
        setContextItem(themeMode === 'dark' ? 'dark' : 'light')
        break
      default:
        break
    }
  }
  return (
    <div>
      <CheckBoxWrapper onClick={() => handleItemSelected('change_mode')}>
        <CheckBox id='checkbox' type='checkbox' />
        <CheckBoxLabel htmlFor='checkbox' />
      </CheckBoxWrapper>
    </div>
  )
}))

const stateToProps = state => ({
  mode: state.ui.mode.mode
})

const actionsToProps = dispatch => ({
  changeTheme: (mode) => dispatch(changeTheme(mode))
})

export const SwitchTheme = connect(stateToProps, actionsToProps)(Switch)
