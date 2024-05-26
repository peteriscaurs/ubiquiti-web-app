import { useEffect, useState, createContext } from 'react'
import Header from './header/Header'
import Toolbar from './header/Toolbar'
import axios from 'axios'
import { Device } from './types/api'
import { Navigate, Route, Routes } from 'react-router-dom'
import DevicesView from './devices-view/DevicesView'
import DeviceInfo from './device-info/DeviceInfo'
import ErrorMessage from './ErrorMessage'

interface AppContextType {
  deviceList: Device[]
  error?: string
}

export const AppContext = createContext<AppContextType>({ deviceList: [] })

function App() {
  const [deviceList, setDeviceList] = useState<Device[]>([])
  const [error, setError] = useState()

  useEffect(() => {
    axios
      .get('https://static.ui.com/fingerprint/ui/public.json')
      .then((response) => setDeviceList(response.data.devices))
      .catch((error) => setError(error.message))
  }, [])

  return (
    <AppContext.Provider value={{ deviceList, error }}>
      <Header author="Pēteris Čaurs" />
      <Toolbar />
      <Routes>
        <Route path="/" element={<Navigate to="/devices/list" />} />
        <Route path="/devices/:view" element={<DevicesView />} />
        <Route path="/devices/:view/:id" element={<DeviceInfo />} />
        <Route
          path="*"
          element={
            <ErrorMessage message="The page you are looking for does not exist." />
          }
        />
      </Routes>
    </AppContext.Provider>
  )
}

export default App
