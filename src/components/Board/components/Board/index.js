import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Board = styled.div`
background-color: #FFFFFF;
box-shadow: 0px 3px 6px #00000029;
border-radius: 10px;
margin: 32px;
padding: ${props => props.padding ? '16px 32px 16px 32px' : '0'};
`
Board.propTypes = {
  padding: PropTypes.bool
}

Board.defaultProps = {
  padding: true
}
