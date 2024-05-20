import styled from 'styled-components'
import closeIcon from '../assets/close_icon.svg'

const StyledButton = styled.button`
  border: none;
  background-color: white;
`

interface CrossButtonProps {
  handleOnClick: () => void
}

export default function CrossButton({ handleOnClick }: CrossButtonProps) {
  return (
    <StyledButton onClick={handleOnClick}>
      <img src={closeIcon} alt="" />
    </StyledButton>
  )
}
