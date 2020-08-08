import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import { Board } from '../Board'
import { Text } from 'components/Text'

const LeftBoard = styled.div`
height: 89px;
width: 14px;
background-color: #851486;
border-radius: 10px 0px 0px 10px;
`
const Description = styled.h3`
  margin-top:5px;
  color: #736A73;
`

const BoardRegisted = ({ title, subtitle }) => {
  return (
    <Board padding={false}>
      <Flex alignItems='center'>
        <Box mr='30px'>
          <LeftBoard />
        </Box>
        <Box>
          <Text fontsize='28px' textcolor='#851486'>{title}</Text>
          <Description>{subtitle}</Description>
        </Box>
      </Flex>
    </Board>
  )
}

export default BoardRegisted
