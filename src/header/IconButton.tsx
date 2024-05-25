import styled from 'styled-components'

const colors = {
  white: 'white',
  lightGray: 'rgb(246, 246, 248)',
}

const StyledButton = styled.button<{ color: keyof typeof colors }>`
  border: none;
  background-color: ${(props) => colors[props.color]};
`

interface IconButtonProps {
  handleOnClick: () => void
  color?: keyof typeof colors
  icon: string
}

export default function IconButton({
  handleOnClick,
  color = 'white',
  icon,
}: IconButtonProps) {
  return (
    <StyledButton onClick={handleOnClick} color={color}>
      <img src={icon} alt="" />
    </StyledButton>
  )
}
