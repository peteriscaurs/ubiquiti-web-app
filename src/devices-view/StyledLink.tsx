import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.65);
  &:visited {
    color: rgba(0, 0, 0, 0.65);
  }
  &:hover {
    text-decoration: underline;
  }
`

export default StyledLink
