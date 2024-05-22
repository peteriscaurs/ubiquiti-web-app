import { useEffect, useState } from 'react'
import DeviceList from './DeviceList'
import Header from './Header'
import Toolbar from './Toolbar'
import axios from 'axios'
import { Device } from './api'

function App() {
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
      <DeviceList devices={deviceList} />
    </>
  )
}

export default App
