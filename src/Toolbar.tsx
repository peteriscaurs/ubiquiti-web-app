import styled from 'styled-components'
import listDefault from './assets/list_default.svg'
import listActive from './assets/list_active.svg'
import gridDefault from './assets/grid_default.svg'
import gridActive from './assets/grid_active.svg'
import { useState } from 'react'
import ActionButton from './components/ActionButton'
import SearchInput from './components/SearchInput'
import SelectFilter from './components/SelectFilter'

const StyledToolbar = styled.nav`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(237, 237, 240);
  padding: 8px 14px;
`

const StyledActions = styled.div`
  display: flex;
  gap: 8px;
`

export default function Toolbar() {
  const [isListActive, setIsListActive] = useState(false)
  const [isGridActive, setIsGridActive] = useState(false)

  return (
    <StyledToolbar>
      <SearchInput />
      <StyledActions>
        <ActionButton
          name="List"
          defaultIcon={listDefault}
          activeIcon={listActive}
          isActive={isListActive}
          handleOnClick={setIsListActive}
        />
        <ActionButton
          name="Grid"
          defaultIcon={gridDefault}
          activeIcon={gridActive}
          isActive={isGridActive}
          handleOnClick={setIsGridActive}
        />
        <SelectFilter />
      </StyledActions>
    </StyledToolbar>
  )
}
