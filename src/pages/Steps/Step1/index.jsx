import React from 'react'
import { Flex, Box } from 'rebass'
import { BoardRegisted, BoardOnline, BoardStandard } from 'components/Board'
import { Header } from 'components/Header'
import { StepContainer as Container } from 'components/Container'

const Step1 = () => {
  return (
    <Container>
      <Header />
      <Flex>
        <Box width={1 / 2}>
          <Flex>
            <Box width={1 / 2}>
              <BoardRegisted
                title='12.043'
                subtitle='Registered attendes'
              />
            </Box>
            <Box width={1 / 2}>
              <BoardOnline
                title='6.320'
                subtitle='Attendance online'
                percent='56%'
                subtitlepercent='Attendance'
              />
            </Box>
          </Flex>
          <Flex>
            <Box width={1}>
              <BoardStandard title='Active attendees' />
            </Box>
          </Flex>
          <Flex>
            <Box width={1}>
              <BoardStandard
                title='Live announcements'
                description='This announcement will be visible for all the attendees in the event.'
                buttonname='Publish'
              />
            </Box>
          </Flex>
        </Box>
        <Box width={1 / 2}>
          <Flex>
            <Box width='100%'>
              <BoardStandard liveShow title='Live activities' />
            </Box>
          </Flex>
          <Flex>
            <Box width={1}>
              <BoardStandard
                title='Networking'
                urlname='View meetings live now'
                url='/step2'
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Container>
  )
}

export default Step1
