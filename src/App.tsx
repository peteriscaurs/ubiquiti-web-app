import { useEffect, useState, createContext } from 'react'
import Header from './header/Header'
import Toolbar from './header/Toolbar'
import axios from 'axios'
import { Device } from './types/api'
import { Navigate, Route, Routes } from 'react-router-dom'
import DevicesView from './devices-view/DevicesView'
import DeviceInfo from './device-info/DeviceInfo'
import NotFoundView from './NotFoundView'

interface AppContextType {
  deviceList: Device[]
}

export const AppContext = createContext<AppContextType>({ deviceList: [] })

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
