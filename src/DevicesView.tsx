import { useParams } from 'react-router-dom'
import DeviceList from './DeviceList'
import DeviceGrid from './DeviceGrid'
import { useContext } from 'react'
import { AppContext } from './App'

const DevicesView = () => {
  const { view } = useParams()

  const { deviceList } = useContext(AppContext)

  if (view === 'list') {
    return <DeviceList devices={deviceList} />
  } else if (view === 'grid') {
    return <DeviceGrid devices={deviceList} />
  }

  return null
}

export default DevicesView
