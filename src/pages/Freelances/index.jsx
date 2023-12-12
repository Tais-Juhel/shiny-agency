import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/Atoms'
import { useFetch } from '../../utils/hooks'
import { Link } from 'react-router-dom'

const FreelanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`

const FreelanceTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const FreelanceText = styled.p`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

function Freelances() {
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/freelances`,
  )
  const freelancersList = data?.freelancersList

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <FreelanceWrapper>
      <FreelanceTitle>Trouvez votre prestataire</FreelanceTitle>
      <FreelanceText>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </FreelanceText>
      {isLoading ? (
        <Loader />
      ) : (
        <CardsContainer>
          {freelancersList.map((profile) => (
            <Link key={`freelance-${profile.id}`} to={`/profile/${profile.id}`}>
              <Card
                key={`${profile.name}-${profile.id}`}
                label={profile.job}
                picture={profile.picture}
                title={profile.name}
              />
            </Link>
          ))}
        </CardsContainer>
      )}
    </FreelanceWrapper>
  )
}

export default Freelances
