import styled from 'styled-components'
import listDefault from './assets/list_default.svg'
import listActive from './assets/list_active.svg'
import gridDefault from './assets/grid_default.svg'
import gridActive from './assets/grid_active.svg'
import ActionButton from './components/ActionButton'
import SearchInput from './components/SearchInput'
import SelectFilter from './components/SelectFilter'
import { useLocation, useNavigate } from 'react-router-dom'
import backIcon from './assets/back_icon.svg'
import IconButton from './components/IconButton'
import { toolbarHeight } from './constants'
import { useContext } from 'react'
import { AppContext } from './App'

const StyledToolbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${toolbarHeight};
  border-bottom: 1px solid rgb(237, 237, 240);
  padding: 8px 14px;
`

const StyledActions = styled.div`
  display: flex;
  align-items: center;
  padding-left: 14px;
  gap: 8px;
`

const Title = styled.span`
  flex-grow: 1;
  text-align: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
`
export type View = 'list' | 'grid'

export default function Toolbar() {
  const location = useLocation()
  const lastPathSegment = location.pathname.split('/').pop()
  const showFilters = lastPathSegment === 'list' || lastPathSegment === 'grid'

  const navigate = useNavigate()

  const { deviceList } = useContext(AppContext)
  const device = deviceList.find((device) => device.id === lastPathSegment)

  return (
    <StyledToolbar>
      {showFilters ? (
        <>
          <SearchInput />
          <StyledActions>
            <ActionButton
              name="list"
              defaultIcon={listDefault}
              activeIcon={listActive}
              isActive={lastPathSegment === 'list'}
            />
            <ActionButton
              name="grid"
              defaultIcon={gridDefault}
              activeIcon={gridActive}
              isActive={lastPathSegment === 'grid'}
            />
            <SelectFilter />
          </StyledActions>
        </>
      ) : (
        <>
          <IconButton icon={backIcon} handleOnClick={() => navigate(-1)} />
          <Title>{device?.product.name}</Title>
        </>
      )}
    </StyledToolbar>
  )
}
