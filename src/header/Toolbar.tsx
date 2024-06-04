import { useContext } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from '../App'
import backIcon from '../assets/back_icon.svg'
import gridActive from '../assets/grid_active.svg'
import gridDefault from '../assets/grid_default.svg'
import listActive from '../assets/list_active.svg'
import listDefault from '../assets/list_default.svg'
import { toolbarHeight } from '../constants'
import ActionButton from './ActionButton'
import IconButton from './IconButton'
import SearchInput from './SearchInput'
import SelectFilter from './SelectFilter'

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

const Title = styled.h2`
  flex-grow: 1;
  text-align: center;
  font-size: 14px;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.45);
`
export type View = 'list' | 'grid'

export default function Toolbar() {
  const [searchParams] = useSearchParams()

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
              searchParams={searchParams.toString()}
            />
            <ActionButton
              name="grid"
              defaultIcon={gridDefault}
              activeIcon={gridActive}
              isActive={lastPathSegment === 'grid'}
              searchParams={searchParams.toString()}
            />
            <SelectFilter />
          </StyledActions>
        </>
      ) : (
        <>
          <IconButton
            icon={backIcon}
            handleOnClick={() => {
              if (window.history.length > 1) {
                navigate(-1)
              } else {
                navigate('/')
              }
            }}
          />
          <Title>{device?.product.name}</Title>
        </>
      )}
    </StyledToolbar>
  )
}
