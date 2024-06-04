import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../App'
import ErrorMessage from '../ErrorMessage'
import { useFilteredDevices } from '../hooks/useFilteredDevices'
import DeviceGrid from './views/DeviceGrid'
import DeviceList from './views/DeviceList'

const DevicesView = () => {
  const { view } = useParams()

  const { deviceList, error } = useContext(AppContext)

  const { filteredDevices } = useFilteredDevices(deviceList)

  if (error) {
    return <ErrorMessage message={error} />
  }

  if (!filteredDevices.length && !error) {
    return <ErrorMessage message="Loading..." />
  }

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
