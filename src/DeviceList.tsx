import styled from 'styled-components'
import { Device } from './api'
import { useFilteredDevices } from './useFilteredDevices'

const DeviceListContainer = styled.div`
  margin: 23px 104px;
`

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`

const TableCell = styled.td`
  padding: 5px;
  border-bottom: 1px solid rgb(237, 237, 240);
  color: rgba(0, 0, 0, 0.65);
`

const TableHeadCell = styled(TableCell)`
  color: rgb(79, 79, 79);
  font-weight: bold;
  font-size: 14px;
`

const IconCell = styled(TableCell)`
  display: flex;
  justify-content: end;
  padding-right: 24px;
`

interface DeviceListProps {
  devices: Device[]
}

export default function DeviceList({ devices }: DeviceListProps) {
  const { filteredDevices } = useFilteredDevices(devices)

  return (
    <DeviceListContainer>
      <StyledTable>
        <thead>
          <tr>
            <IconCell style={{ color: '#BDBDBD' }} colSpan={1}>
              {devices.length} devices
            </IconCell>
            <TableHeadCell colSpan={2}>PRODUCT LINE</TableHeadCell>
            <TableHeadCell colSpan={5}>NAME</TableHeadCell>
          </tr>
        </thead>
        <tbody>
          {filteredDevices.map((device) => (
            <tr>
              <IconCell colSpan={1}>
                <img
                  src={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_${device.icon.resolutions[1][0]}x${device.icon.resolutions[1][1]}.png`}
                  alt={`${device.product.name}`}
                />
              </IconCell>
              <TableCell colSpan={2}>{device.line.name}</TableCell>
              <TableCell colSpan={5}>{device.product.name}</TableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </DeviceListContainer>
  )
}
