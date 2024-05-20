import { useState } from 'react'
import styled from 'styled-components'
import CrossButton from './CrossButton'

const StyledButton = styled.button`
  border: none;
  background-color: white;
`

const DropdownMenu = styled.ul`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  right: 0;
  top: 56px;
  list-style-type: none;
  padding: 0;
  background-color: white;
  min-width: 256px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.15);
  z-index: 1;
`

const DropdownMenuItem = styled.li`
  color: black;
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`

const CloseFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  padding: 0px 14px;
  border-bottom: 1px solid rgb(237, 237, 240);
`

const FilterName = styled.div`
  padding: 14px;
`

export default function SelectFilter() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)
  return (
    <>
      <StyledButton onClick={toggleDropdown}>Filter</StyledButton>
      <DropdownMenu isOpen={isOpen}>
        <CloseFilter>
          <span>Filter</span>
          <CrossButton handleOnClick={toggleDropdown} />
        </CloseFilter>
        <FilterName>
          <strong>Product line</strong>
        </FilterName>
        <DropdownMenuItem>UniFi</DropdownMenuItem>
        <DropdownMenuItem>UniFi LTE</DropdownMenuItem>
      </DropdownMenu>
    </>
  )
}
