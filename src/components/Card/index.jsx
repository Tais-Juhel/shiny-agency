import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useState } from 'react'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: ${colors.background};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
`

const CardTitle = styled.span`
  color: black;
  font-size: 22px;
  font-weight: normal;
  align-self: center;
`

function Card({ label, title, picture }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const star = isFavorite ? '⭐️' : ''

  return (
    <CardWrapper onClick={() => setIsFavorite(!isFavorite)}>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardTitle>
        {star} {title} {star}
      </CardTitle>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string,
}

Card.defaultProps = {
  title: 'Mon titre par default',
}

export default Card
