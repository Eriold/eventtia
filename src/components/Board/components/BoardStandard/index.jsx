import React from 'react'
import styled from 'styled-components'
import { MenuItem } from 'components/Icon'
import { Flex, Box } from 'rebass'
import PropTypes from 'prop-types'
import { Button } from 'components/Button'
import { Board } from '../Board'
import { Text } from 'components/Text'

const Circle = styled.span`
  height: 8px;
  width: 8px;
  background-color: ${props => props.liveColor};
  border-radius: 50%;
  display: inline-block;
  margin-bottom:2px;
`

const BoardStandard = ({ title, liveShow, description, children }) => {
  return (
    <Board width='95'>
      <Flex alignItems='center'>
        {liveShow &&
          <Box mx={2}>
            <Circle liveColor='red' />
          </Box>}
        <Box>
          <Text
            fontfamily='Lato-Bold'
            fontsize='16px'
          >{title}
          </Text>
        </Box>
        <Box mx='auto' />
        <Box>
          <Button>
            <MenuItem size='16px' />
          </Button>
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Text
            fontfamily='Lato-Regular'
            fontsize='12px'
            textcolor='#736A73'
            opacity={60}
            mt='50px'
          >
            {description}
          </Text>
        </Box>
      </Flex>
      <Flex>
        {children}
      </Flex>
    </Board>
  )
}

BoardStandard.propTypes = {
  liveShow: PropTypes.bool
}

BoardStandard.defaultProps = {
  liveShow: true
}

export default BoardStandard
