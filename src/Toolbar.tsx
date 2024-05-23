import styled from 'styled-components'
import listDefault from './assets/list_default.svg'
import listActive from './assets/list_active.svg'
import gridDefault from './assets/grid_default.svg'
import gridActive from './assets/grid_active.svg'
import ActionButton from './components/ActionButton'
import SearchInput from './components/SearchInput'
import SelectFilter from './components/SelectFilter'
import { useSearchParams } from 'react-router-dom'

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
export type View = 'list' | 'grid'

export default function Toolbar() {
  const [searchParams, setSearchParams] = useSearchParams({
    view: 'list',
  })

  const view = searchParams.get('view')

  const handleViewOnClick = (view: View) => {
    setSearchParams((prev) => {
      prev.set('view', view)
      return prev
    })
  }

  return (
    <StyledToolbar>
      <SearchInput />
      <StyledActions>
        <ActionButton
          name="list"
          defaultIcon={listDefault}
          activeIcon={listActive}
          isActive={view === 'list'}
          handleOnClick={handleViewOnClick}
        />
        <ActionButton
          name="grid"
          defaultIcon={gridDefault}
          activeIcon={gridActive}
          isActive={view === 'grid'}
          handleOnClick={handleViewOnClick}
        />
        <SelectFilter />
      </StyledActions>
    </StyledToolbar>
  )
}
