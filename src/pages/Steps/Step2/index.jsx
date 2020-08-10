import React from 'react'
import { Flex, Box } from 'rebass'
import { Header } from 'components/Header'
import { StepContainer as Container } from 'components/Container'

const Step2 = () => {
  return (
    <Container>
      <Header back url='/' />
      <Flex>
        <Box width={1} bg='orange'>
          hola
        </Box>
        <Box width={1 / 2} bg='red'>
          hola
        </Box>
      </Flex>
    </Container>
  )
}

export default Step2
