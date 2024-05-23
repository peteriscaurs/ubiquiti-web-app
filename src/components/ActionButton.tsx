import styled from 'styled-components'
import { View } from '../Toolbar'

const StyledActionButton = styled.button`
  border: none;
  background-color: white;
`

interface ActionButtonProps {
  name: View
  isActive: boolean
  handleOnClick: (view: View) => void
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
        handleOnClick(name)
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
