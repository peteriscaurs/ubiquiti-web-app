import styled from 'styled-components'
import listDefault from './assets/list_default.svg'
import listActive from './assets/list_active.svg'
import gridDefault from './assets/grid_default.svg'
import gridActive from './assets/grid_active.svg'
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
  align-items: center;
  padding-left: 14px;
  gap: 8px;
`
export type View = 'list' | 'grid'

export default function Toolbar() {
  return (
    <StyledToolbar>
      <SearchInput />
      <StyledActions>
        <ActionButton
          name="list"
          defaultIcon={listDefault}
          activeIcon={listActive}
        />
        <ActionButton
          name="grid"
          defaultIcon={gridDefault}
          activeIcon={gridActive}
        />
        <SelectFilter />
      </StyledActions>
    </StyledToolbar>
  )
}
