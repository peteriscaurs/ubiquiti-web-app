import styled from 'styled-components'

const StyledActionButton = styled.button`
  border: none;
  background-color: white;
`

interface ActionButtonProps {
  name: string
  isActive: boolean
  handleOnClick: (isActive: boolean) => void
  activeIcon: string
  defaultIcon: string
}

export default function ActionButton({
  name,
  isActive,
  handleOnClick,
  activeIcon,
  defaultIcon,
}: ActionButtonProps) {
  return (
    <StyledActionButton
      onClick={() => {
        handleOnClick(!isActive)
      }}
    >
      {isActive ? (
        <img src={activeIcon} alt={`${name} Active`} />
      ) : (
        <img src={defaultIcon} alt={`${name} Default`} />
      )}
    </StyledActionButton>
  )
}
