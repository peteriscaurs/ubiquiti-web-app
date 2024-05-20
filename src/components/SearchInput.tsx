import styled from 'styled-components'
import searchIcon from '../assets/search_icon.svg'

const SearchContainer = styled.span`
  display: inline-flex;
  background-color: rgb(246, 246, 248);
  padding: 0px 8px;
  border-radius: 4px;
`

const StyledSearchInput = styled.input`
  border: none;
  background-color: rgb(246, 246, 248);
  caret-color: rgb(0, 111, 255);
  &:focus {
    outline: none;
  }
`

export default function SearchInput() {
  return (
    <SearchContainer>
      <img src={searchIcon} alt="Search" />
      <StyledSearchInput placeholder="Search" />
    </SearchContainer>
  )
}
