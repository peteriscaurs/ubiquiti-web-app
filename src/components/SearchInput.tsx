import styled from 'styled-components'
import searchIcon from '../assets/search_icon.svg'
import { useState } from 'react'
import CrossButton from './CrossButton'

const SearchContainer = styled.span`
  display: inline-flex;
  background-color: rgb(246, 246, 248);
  padding: 0px 8px;
  border-radius: 4px;
  height: 32px;
  width: 270px;
`

const StyledSearchInput = styled.input`
  border: none;
  width: 100%;
  background-color: rgb(246, 246, 248);
  caret-color: rgb(0, 111, 255);
  &:focus {
    outline: none;
  }
`

export default function SearchInput() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <SearchContainer>
      <img src={searchIcon} alt="Search" style={{ padding: '6px 0px' }} />
      <StyledSearchInput
        placeholder="Search"
        onChange={(event) => setSearchQuery(event.target.value)}
        value={searchQuery}
      />
      <CrossButton handleOnClick={() => setSearchQuery('')} color="lightGray" />
    </SearchContainer>
  )
}
