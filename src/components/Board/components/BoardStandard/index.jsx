import React from 'react'
import styled from 'styled-components'
import { MenuItem, ArrowRight } from 'components/Icon'
import { Flex, Box, Link } from 'rebass'
import { Button, StandardButton } from 'components/Button'
import { Board } from '../Board'
import { Text, Textarea } from 'components/Text'
import { NavLink } from 'react-router-dom'

const Circle = styled.span`
  height: 8px;
  width: 8px;
  background-color: ${props => props.liveColor};
  border-radius: 50%;
  display: inline-block;
  margin-bottom:2px;
`

const BoardStandard = ({
  title,
  liveShow,
  description,
  buttonname,
  children,
  url,
  urlname
}) => {
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
      {description &&
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
        </Flex>}
      {buttonname &&
        <Box>
          <Flex>
            <Textarea />
          </Flex>
          <Flex>
            <Box mx='auto' />
            <Box>
              <StandardButton>
                {buttonname}
              </StandardButton>
            </Box>
          </Flex>
        </Box>}
      <Flex>
        {children}
      </Flex>
      {urlname &&
        <Flex my='5px'>
          <Box mx='auto' />
          <Box>
            <Link as={NavLink} to={url}>
              <Button>
                <Text
                  textcolor='#611862'
                  fontfamily='Lato-Regular'
                  fontsize='16px'
                >
                  {urlname} <ArrowRight size='10px' />
                </Text>
              </Button>
            </Link>
          </Box>
        </Flex>}
    </Board>
  )
}

export default BoardStandard
