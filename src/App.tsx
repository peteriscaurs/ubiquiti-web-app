import { useEffect, useState } from 'react'
import DeviceList from './DeviceList'
import Header from './Header'
import Toolbar from './Toolbar'
import axios from 'axios'
import { Device } from './api'
import { useSearchParams } from 'react-router-dom'
import DeviceGrid from './DeviceGrid'

function App() {
  const [searchParams] = useSearchParams()
  const view = searchParams.get('view')

  const [deviceList, setDeviceList] = useState<Device[]>([])

  useEffect(() => {
    axios
      .get('https://static.ui.com/fingerprint/ui/public.json')
      .then((response) => setDeviceList(response.data.devices))
  }, [])

  return (
    <>
      <Header author="Pēteris Čaurs" />
      <Toolbar />
      {!view || view === 'list' ? (
        <DeviceList devices={deviceList} />
      ) : (
        <DeviceGrid devices={deviceList} />
      )}
    </>
  )
}

export default App
