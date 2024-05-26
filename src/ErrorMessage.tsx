import styled from 'styled-components'

const ErrorMessageContainer = styled.div`
  text-align: center;
  margin-top: 250px;
`

const StyledMessage = styled.p`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.65);
`

interface ErrorMessageProps {
  message: string
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <ErrorMessageContainer>
      <StyledMessage>{message}</StyledMessage>
    </ErrorMessageContainer>
  )
}

export default ErrorMessage
