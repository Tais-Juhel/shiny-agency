import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import homeImg from '../../assets/undraw.svg'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.background};
  padding: 90px;
  margin: 60px;
  margin-bottom: 0;
`

const HomeText = styled.p`
  font-size: 50px;
  line-height: 80px;
`

const HomeLink = styled(Link)`
  padding: 10px 60px;
  font-family: 'Comfortaa';
  color: white;
  font-size: 20px;
  background-color: ${colors.primary};
  border-radius: 30px;
  text-decoration: none;
`

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  margin-right: 30px;
  ${HomeLink} {
    max-width: 125px;
  }
`

const HomeImg = styled.img`
  flex: 1;
`

function Home() {
  return (
    <HomeWrapper>
      <HomeContainer>
        <LeftCol>
          <HomeText>
            Repérez vos besoins, on s'occupe du reste, avec les meilleurs
            talents
          </HomeText>
          <HomeLink to="/survey/1">Faire le test</HomeLink>
        </LeftCol>
        <HomeImg src={homeImg} alt="homeImg" />
      </HomeContainer>
    </HomeWrapper>
  )
}

export default Home
