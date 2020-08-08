import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Svg = styled.svg`
  width: ${props => props.width || props.size};
  height: ${props => props.height || props.size};
  fill: ${props => props.color};
`

Svg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string
}

Svg.defaultProps = {
  size: '24px',
  color: '#761D77'
}
