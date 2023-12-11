// import DefaultPicture from '../../assets/profile.jpeg'
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useEffect, useState } from 'react'
import { Loader } from '../../utils/Atoms'

// const freelanceProfiles = [
//   {
//     name: 'Jane Doe',
//     jobTitle: 'Devops',
//     picture: DefaultPicture,
//   },
//   {
//     name: 'John Doe',
//     jobTitle: 'Developpeur frontend',
//     picture: DefaultPicture,
//   },
//   {
//     name: 'Jeanne Biche',
//     jobTitle: 'Développeuse Fullstack',
//     picture: DefaultPicture,
//   },
// ]

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
  const [freelancesList, setFreelancesList] = useState([])
  const [error, setError] = useState(null)
  const [isDataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    async function fetchFreelances() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/freelances`)
        const { freelancersList } = await response.json()
        setFreelancesList(freelancersList)
      } catch (err) {
        console.log('===== error =====', err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchFreelances()
  }, [])

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <FreelanceWrapper>
      <FreelanceTitle>Trouvez votre prestataire</FreelanceTitle>
      <FreelanceText>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </FreelanceText>
      {isDataLoading ? (
        <Loader />
      ) : (
        <CardsContainer>
          {freelancesList.map((profile) => (
            <Card
              key={`${profile.name}-${profile.id}`}
              label={profile.job}
              picture={profile.picture}
              title={profile.name}
            />
          ))}
        </CardsContainer>
      )}
    </FreelanceWrapper>
  )
}

export default Freelances
