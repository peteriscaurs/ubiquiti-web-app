import styled from 'styled-components'
import { Device } from './api'

const DeviceGridContainer = styled.div`
  margin: 23px 55px;
`

interface DeviceListProps {
  devices: Device[]
}

export default function DeviceGrid({ devices }: DeviceListProps) {
  return (
    <DeviceGridContainer>
      {<span>{devices.length} devices</span>}
    </DeviceGridContainer>
  )
}
