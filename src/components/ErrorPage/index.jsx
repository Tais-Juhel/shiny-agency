import styled from 'styled-components'
import colors from '../../utils/style/colors'
import ErrorImg from '../../assets/404-error.svg'

const ErrorWrapper = styled.div`
  margin: 60px;
  padding: 90px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  align-items: center;
`

const ErrorTitle = styled.h1`
  font-weight: 300;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
`

const Illustration = styled.img`
  max-width: 800px;
  margin: 60px;
`

function ErrorPage() {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oups...</ErrorTitle>
      <Illustration src={ErrorImg} />
      <ErrorSubtitle>
        Il semblerait que la page que vous cherchez n’existe pas
      </ErrorSubtitle>
    </ErrorWrapper>
  )
}

export default ErrorPage
