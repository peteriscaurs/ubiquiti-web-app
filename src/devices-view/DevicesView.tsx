import { useParams } from 'react-router-dom'
import DeviceList from './views/DeviceList'
import DeviceGrid from './views/DeviceGrid'
import { useContext } from 'react'
import { AppContext } from '../App'
import { useFilteredDevices } from '../hooks/useFilteredDevices'
import ErrorMessage from '../ErrorMessage'

const DevicesView = () => {
  const { view } = useParams()

  const { deviceList } = useContext(AppContext)

  const { filteredDevices } = useFilteredDevices(deviceList)

  if (!filteredDevices.length) {
    return <ErrorMessage message="No results found for your search query." />
  }

  if (view === 'list') {
    return <DeviceList devices={filteredDevices} />
  } else if (view === 'grid') {
    return <DeviceGrid devices={filteredDevices} />
  }

  return null
}

export default DevicesView
