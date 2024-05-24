import styled from 'styled-components'

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 220px);
  text-align: center;
`

const NotFoundMessage = styled.p`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.65);
`

const NotFoundView = () => {
  return (
    <NotFoundContainer>
      <NotFoundMessage>
        The page you are looking for does not exist.
      </NotFoundMessage>
    </NotFoundContainer>
  )
}

export default NotFoundView
