import styled from 'styled-components'
import ubiquitiLogo from '/Ubiquiti_logo.svg'
import { headerHeight } from './constants'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(246, 246, 248);
  border-bottom: 1px solid rgb(237, 237, 240);
  height: ${headerHeight};
`

const StyledAppName = styled.div`
  display: flex;
  align-items: center;
  & > h1 {
    font-weight: normal;
    margin-left: 14px;
    font-size: 20px;
    color: rgb(131, 134, 145);
  }
`

const StyledAuthorName = styled.label`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  margin-right: 14px;
`

interface HeaderProps {
  author: string
}

export default function Header({ author }: HeaderProps) {
  return (
    <StyledHeader>
      <StyledAppName>
        <img src={ubiquitiLogo} alt="Ubiquiti Logo" />
        <h1>Devices</h1>
      </StyledAppName>
      <StyledAuthorName>Author/{author}</StyledAuthorName>
    </StyledHeader>
  )
}
