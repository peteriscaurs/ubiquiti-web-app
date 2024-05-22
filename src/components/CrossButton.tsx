import styled from 'styled-components'
import closeIcon from '../assets/close_icon.svg'

const colors = {
  white: 'white',
  lightGray: 'rgb(246, 246, 248)',
}

const StyledButton = styled.button<{ color: keyof typeof colors }>`
  border: none;
  background-color: ${(props) => colors[props.color]};
`

interface CrossButtonProps {
  handleOnClick: () => void
  color?: keyof typeof colors
}

export default function CrossButton({
  handleOnClick,
  color = 'white',
}: CrossButtonProps) {
  return (
    <StyledButton onClick={handleOnClick} color={color}>
      <img src={closeIcon} alt="" />
    </StyledButton>
  )
}
