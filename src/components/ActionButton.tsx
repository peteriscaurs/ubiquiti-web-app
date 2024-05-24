import styled from 'styled-components'
import { View } from '../Toolbar'
import { Link, useLocation } from 'react-router-dom'

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
}

export default function ActionButton({
  name,
  activeIcon,
  defaultIcon,
}: ActionButtonProps) {
  const location = useLocation()
  const view = location.pathname.split('/').pop()

  const isActive = view === name

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
