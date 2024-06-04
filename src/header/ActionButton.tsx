import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { View } from './Toolbar'

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
  searchParams: string
}

export default function ActionButton({
  name,
  activeIcon,
  defaultIcon,
  isActive,
  searchParams,
}: ActionButtonProps) {
  return (
    <StyledActionButton
      to={{ pathname: `/devices/${name}`, search: searchParams }}
    >
      {isActive ? (
        <img src={activeIcon} alt={`${name} Active`} />
      ) : (
        <img src={defaultIcon} alt={`${name} Default`} />
      )}
    </StyledActionButton>
  )
}
