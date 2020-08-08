import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import { Board } from '../Board'
import { Text } from 'components/Text'

const LeftBoard = styled.div`
  height: 89px;
  width: 14px;
  background-color: #22D2B9;
  border-radius: 10px 0px 0px 10px;
`
const Description = styled.h3`
  margin-top:5px;
  color: #736A73;
`
const VerticalLine = styled.span`
  display: inline-block;
  border-left: 1px solid #ccc;
  margin: 0 10px;
  height: 26px;
`

const BoardOnline = ({ title, subtitle, percent, subtitlepercent }) => {
  return (
    <Board padding={false}>
      <Flex alignItems='center'>
        <Box mr='30px'>
          <LeftBoard />
        </Box>
        <Box>
          <Text fontsize='28px' textcolor='#22D2B9'>{title}</Text>
          <Description>{subtitle}</Description>
        </Box>
        <Box mx='5px'>
          <VerticalLine />
        </Box>
        <Box>
          <Text fontsize='28px' textcolor='#22D2B9'>{percent}</Text>
          <Description>{subtitlepercent}</Description>
        </Box>
      </Flex>
    </Board>
  )
}

export default BoardOnline
