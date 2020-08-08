import React from 'react'
import { Flex, Box } from 'rebass'
import { BoardRegisted, BoardOnline, BoardStandard } from 'components/Board'
import styled from 'styled-components'
import { Text } from 'components/Text'
import { LocalTime } from 'components/LocalTime'

const Container = styled.div`
  width: 95%;
  height: auto;
  margin: 32px;
`

const Step1 = () => {
  return (
    <Container>
      <Flex alignItems='center' mb='40px' justifyContent='center'>
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
        <Box>
          <LocalTime />
        </Box>
      </Flex>
      <Flex>
        <Box width={1 / 4}>
          <BoardRegisted
            title='12.043'
            subtitle='Registered attendes'
          />
        </Box>
        <Box width={1 / 4}>
          <BoardOnline
            title='6.320'
            subtitle='Attendance online'
            percent='56%'
            subtitlepercent='Attendance'
          />
        </Box>
      </Flex>
      <Flex>
        <Box width={1 / 2}>
          <BoardStandard liveShow={false} title='Active attendees' />
        </Box>
      </Flex>
      <Flex>
        <Box width={1 / 2}>
          <BoardStandard
            liveShow={false}
            title='Live announcements'
            description='This announcement will be visible for all the attendees in the event.'
          >
            hola
          </BoardStandard>
        </Box>
      </Flex>
    </Container>
  )
}

export default Step1
