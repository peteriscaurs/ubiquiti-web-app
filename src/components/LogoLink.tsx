import { useState } from 'react'
import { Link } from 'react-router-dom'
import defaultLogo from '/Ubiquiti_logo.svg'
import hoverLogo from '../assets/hover_logo.svg'
import styled from 'styled-components'

const StyledLink = styled(Link)``

export default function LogoLink() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <StyledLink
      to="/devices/list"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <img src={hoverLogo} alt="Ubiquiti Logo" width={55} />
      ) : (
        <img src={defaultLogo} alt="Ubiquiti Logo" />
      )}
    </StyledLink>
  )
}
