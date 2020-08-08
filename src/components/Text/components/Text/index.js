import styled from 'styled-components'
import PropTypes from 'prop-types'

const Text = styled.span`
  color: ${props => props.textcolor};
  font-size: ${props => props.fontsize};
  font-weight: ${props => props.weight};
  font-style: ${props => props.fontstyle};
  font-family: ${props => props.fontfamily};
  text-transform: ${props => props.caps};
  text-align: ${props => props.align};
  display: ${props => props.display};
  word-break: ${props => props.wrap};
  cursor: ${props => props.pointer && 'pointer'};
  line-height: ${props => props.lineheight};
  user-select: ${props => props.selectable ? 'all' : 'none'};
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  text-decoration: ${props => props.decoration};
  margin-left: ${props => props.ml};
  margin-right: ${props => props.mr};
  margin-top: ${props => props.mt};
  opacity: ${props => props.opacity}%;
`
Text.propTypes = {
  tag: PropTypes.string,
  caps: PropTypes.string,
  wrap: PropTypes.string,
  fontsize: PropTypes.string,
  textcolor: PropTypes.string,
  weight: PropTypes.number,
  align: PropTypes.string,
  fontfamily: PropTypes.string,
  fontstyle: PropTypes.string,
  display: PropTypes.string,
  pointer: PropTypes.bool,
  selectable: PropTypes.bool,
  lineheight: PropTypes.string,
  decoration: PropTypes.string,
  ml: PropTypes.string,
  mr: PropTypes.string,
  mt: PropTypes.string,
  opacity: PropTypes.number
}

Text.defaultProps = {
  fontfamily: 'Montserrat-Bold',
  tag: 'p',
  fontsize: '0.75em',
  bold: false,
  pointer: false,
  selectable: false,
  opacity: 100
}

export default Text
