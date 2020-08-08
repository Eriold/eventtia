import React from 'react'
import styled from 'styled-components'
import { MenuItem } from 'components/Icon'
import { Flex, Box } from 'rebass'
import PropTypes from 'prop-types'
import { Button } from 'components/Button'
import { Board } from '../Board'

const SubTitle = styled.h2`
  color: #736A73;
  font-weight: bold;
  font-size:16px;
`
const Circle = styled.span`
  height: 8px;
  width: 8px;
  background-color: ${props => props.liveColor};
  border-radius: 50%;
  display: inline-block;
  margin-bottom:2px;
`

const BoardEvent = ({ title, liveShow, children }) => {
  return (
    <Board>
      <Flex alignItems='center'>
        {liveShow &&
          <Box mx={2}>
            <Circle liveColor='red' />
          </Box>}
        <Box>
          <SubTitle>{title}</SubTitle>
        </Box>
        <Box mx='auto' />
        <Box>
          <Button>
            <MenuItem size='16px' />
          </Button>
        </Box>
      </Flex>
      <Flex>
        {children}
      </Flex>
    </Board>
  )
}

BoardEvent.propTypes = {
  liveShow: PropTypes.bool
}

BoardEvent.defaultProps = {
  liveShow: true
}

export default BoardEvent
