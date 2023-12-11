import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logo from '../../assets/shiny-logo.png'

function Header() {
  return (
    <NavWrapper>
      <NavLogo src={logo} alt="shiny-logo" />
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavLogo = styled.img`
  height: 70px;
`

const StyledLink = styled(Link)`
  margin-right: 30px;
  color: #8186a0;
  text-decoration: none;
  font-size: 20px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius:30px; background-color: ${colors.primary}; padding: 10px 30px;`}
`

export default Header
