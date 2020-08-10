import React from 'react'
import { Flex, Box, Link } from 'rebass'
import { Text } from 'components/Text'
import { LocalTime } from 'components/LocalTime'
import { ArrowLeft } from 'components/Icon'
import { Button } from 'components/Button'
import { NavLink } from 'react-router-dom'

export const Header = ({ back, url }) => {
  return (
    <Flex alignItems='center' mb='40px' justifyContent='center'>
      {back &&
        <Box mr='32px'>
          <Link as={NavLink} to={url}>
            <Button>
              <ArrowLeft size='20px' color='#851486' />
            </Button>
          </Link>
        </Box>}
      <Box>
        <Flex>
          <Text
            fontsize='24px'
            textcolor='#851486'
          >
            Live Event Analytics
          </Text>
        </Flex>
        <Flex>
          <Text
            fontsize='14px'
            textcolor='#555555'
            fontfamily='Lato-Regular'
            mt='5px'
          >
            Ipsum Event 2020
          </Text>
        </Flex>
      </Box>
      <Box mx='auto' />
      <Box mr={!back && '32px'}>
        <LocalTime />
      </Box>
    </Flex>
  )
}
