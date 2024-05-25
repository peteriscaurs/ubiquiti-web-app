import styled from 'styled-components'
import { View } from '../Toolbar'
import { Link } from 'react-router-dom'

const StyledActionButton = styled(Link)`
  border: none;
  background-color: white;
  width: 21px;
  height: 20px;
`

interface ActionButtonProps {
  name: View
  activeIcon: string
  defaultIcon: string
  isActive: boolean
}

export default function ActionButton({
  name,
  activeIcon,
  defaultIcon,
  isActive,
}: ActionButtonProps) {
  return (
    <StyledActionButton to={`/devices/${name}`}>
      {isActive ? (
        <img src={activeIcon} alt={`${name} Active`} />
      ) : (
        <img src={defaultIcon} alt={`${name} Default`} />
      )}
    </StyledActionButton>
  )
}
