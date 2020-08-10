import styled from 'styled-components'

const StandardButton = styled.button`
  background-color:#22D2B9;
  border-radius: 12px;
  width: 140px;
  height: 30px;
  color: white;
  font-family: 'Lato-Regular';
  font-size: 14px;
  font-weight: 400;
  border: none;
  margin-top: 16px;

  :focus {
    outline: none;
  }
  :hover {
    background-color: #1caa95;
  }
`
export default StandardButton
