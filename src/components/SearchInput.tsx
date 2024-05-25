import styled from 'styled-components'
import { useSearchParams } from 'react-router-dom'
import searchIcon from '../assets/search_icon.svg'
import closeIcon from '../assets/close_icon.svg'
import IconButton from './IconButton'

const SearchContainer = styled.span`
  display: inline-flex;
  background-color: rgb(246, 246, 248);
  padding: 0px 8px;
  border-radius: 4px;
  height: 32px;
  width: 380px;
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
  const [searchParams, setSearchParams] = useSearchParams({
    query: '',
  })

  const handleSearchOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams((prev) => {
      prev.set('query', event.target.value)
      return prev
    })
  }

  return (
    <SearchContainer>
      <img src={searchIcon} alt="Search" style={{ padding: '6px 0px' }} />
      <StyledSearchInput
        placeholder="Search"
        onChange={handleSearchOnChange}
        value={searchParams.get('query') || ''}
      />
      <IconButton
        icon={closeIcon}
        handleOnClick={() => {
          setSearchParams((prev) => {
            prev.set('query', '')
            return prev
          })
        }}
        color="lightGray"
      />
    </SearchContainer>
  )
}
