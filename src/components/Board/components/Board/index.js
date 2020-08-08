import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Board = styled.div`
width: ${props => props.width}%;
background-color: #FFFFFF;
box-shadow: 0px 3px 6px #00000029;
border-radius: 10px;
padding: ${props => props.padding ? '16px 32px 16px 32px' : '0'};
margin-bottom:16px;
`
Board.propTypes = {
  padding: PropTypes.bool,
  width: PropTypes.number
}

Board.defaultProps = {
  padding: true,
  width: 90
}
