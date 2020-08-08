import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import { Board } from '../Board'

// const Content = styled.div`
// height: 89px;
// width: 500px;
// background-color: #FFFFFF;
// box-shadow: 0px 3px 6px #00000029;
// border-radius: 10px;
// margin: 32px;
// `
const LeftBoard = styled.div`
height: 89px;
width: 14px;
background-color: purple;
border-radius: 10px 0px 0px 10px;
`

const Title = styled.h2`
  color: purple;
  font-weight: bold;
  font-size:28px;
`
const Description = styled.h3`
  color: #736A73;
`

const BoardRegisted = ({ title }) => {
  return (
    <Board padding={false}>
      <Flex alignItems='center'>
        <Box mr='30px'>
          <LeftBoard />
        </Box>
        <Box>
          <Title>12.043</Title>
          <Description>Registered attendes</Description>
        </Box>
      </Flex>
    </Board>
  )
}

export default BoardRegisted
