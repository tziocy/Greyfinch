import styled from 'styled-components'

import logo from '../assets/logo.png'

const Header = () => (
  <StyledHeader>
    <StyledLogo src={logo} alt="logo" />
    <h1>Find the right Animal</h1>
  </StyledHeader>
)

export default Header

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 24px;
  margin-top: 24px;
  h1 {
    font-size: 28px;
  }
`

const StyledLogo = styled.img`
  height: auto;
  width: 200px;
`
