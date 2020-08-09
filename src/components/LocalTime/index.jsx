import React from 'react'
import { Clock } from 'components/Icon/'
import { Flex, Box } from 'rebass'
import { Text } from 'components/Text'

export const LocalTime = () => {
  const newTime = new Date()
  const hour = newTime.getHours() > 12 ? newTime.getHours() - 12 : newTime.getHours()
  const minute = (newTime.getMinutes() < 10 ? '0' : '') + newTime.getMinutes()
  const meridiem = newTime.getHours() < 12 ? 'am' : 'pm'
  const hourLocal = `${hour}:${minute} ${meridiem}`
  return (
    <Flex>
      <Box mx='5px'>
        <Clock size='16px' color='#736A73' />
      </Box>
      <Box>
        <Text
          fontsize='14px'
          textcolor='#736A73'
          fontfamily='Lato-Regular'
        >
        Local time is {hourLocal} EST
        </Text>
      </Box>
    </Flex>
  )
}
