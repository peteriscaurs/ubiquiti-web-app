import { useEffect, useState, createContext } from 'react'
import Header from './Header'
import Toolbar from './Toolbar'
import axios from 'axios'
import { Device } from './api'
import { Navigate, Route, Routes } from 'react-router-dom'
import DevicesView from './DevicesView'
import DeviceInfo from './DeviceInfo'
import NotFoundView from './NotFoundView'

interface AppContextType {
  deviceList: Device[]
}

export const AppContext = createContext<AppContextType>({})

function App() {
  const [deviceList, setDeviceList] = useState<Device[]>([])

  useEffect(() => {
    axios
      .get('https://static.ui.com/fingerprint/ui/public.json')
      .then((response) => setDeviceList(response.data.devices))
  }, [])

  return (
    <AppContext.Provider value={{ deviceList }}>
      <Header author="Pēteris Čaurs" />
      <Toolbar />
      <Routes>
        <Route path="/" element={<Navigate to="/devices/list" />} />
        <Route path="/devices/:view" element={<DevicesView />} />
        <Route path="/devices/:view/:id" element={<DeviceInfo />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </AppContext.Provider>
  )
}

export default App
