import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/Atoms'

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  const [surveyData, setSurveyData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(null)

  // useEffect(() => {
  //   setDataLoading(true)
  //   fetch(`http://localhost:8000/survey`).then((res) =>
  //     res.json().then(({ surveyData }) => {
  //       setSurveyData(surveyData)
  //       setDataLoading(false)
  //     }),
  //   )
  // }, [])

  useEffect(() => {
    async function fetchSurvey() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/survey`)
        const { surveyData } = await response.json()
        setSurveyData(surveyData)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchSurvey()
  }, [])

  const QuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px;
  `

  const QuestionTitle = styled.h1`
    font-size: 25px;
    text-decoration: underline ${colors.primary};
    margin: 30px;
  `

  const QuestionContent = styled.h2`
    font-size: 20px;
    font-weight: 400;
  `

  const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;
  `
  const StyledLink = styled(Link)`
    font-size: 18px;
    color: black;
    margin: 30px;
  `

  return (
    <QuestionWrapper>
      <QuestionTitle>Question {questionNumber}</QuestionTitle>
      {isDataLoading ? (
        <Loader />
      ) : (
        <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
      )}
      <LinkWrapper>
        <StyledLink to={`/survey/${prevQuestionNumber}`}>Précédent</StyledLink>
        {surveyData[questionNumberInt + 1] ? (
          <StyledLink to={`/survey/${nextQuestionNumber}`}>Suivant</StyledLink>
        ) : (
          <StyledLink to="/results">Résultats</StyledLink>
        )}
      </LinkWrapper>
    </QuestionWrapper>
  )
}

export default Survey
