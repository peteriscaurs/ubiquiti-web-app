import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Device } from './api'
import { useFilteredDevices } from './useFilteredDevices'
import StyledLink from './components/StyledLink'

import 'react-lazy-load-image-component/src/effects/opacity.css'

const DeviceListContainer = styled.div`
  margin: 23px 104px;

  @media (max-width: 992px) {
    & {
      margin: 23px 14px;
    }
  }
`

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`

const StyledRow = styled.tr`
  &:hover {
    background-color: rgb(251, 251, 251);
  }
`

const TableCell = styled.td`
  padding: 5px;
  border-bottom: 1px solid rgb(237, 237, 240);
  color: rgba(0, 0, 0, 0.45);
`

const TableHeadCell = styled(TableCell)`
  color: rgb(79, 79, 79);
  font-weight: bold;
  font-size: 14px;
`

const IconCell = styled(TableCell)`
  text-align: end;
  padding-right: 24px;
  font-size: 14px;
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
            <IconCell style={{ color: 'rgb(189, 189, 189)' }} colSpan={1}>
              {filteredDevices.length} devices
            </IconCell>
            <TableHeadCell colSpan={2}>PRODUCT LINE</TableHeadCell>
            <TableHeadCell colSpan={5}>NAME</TableHeadCell>
          </tr>
        </thead>
        <tbody>
          {filteredDevices.map((device) => (
            <StyledRow key={device.id}>
              <IconCell colSpan={1}>
                <div style={{ display: 'flex', justifyContent: 'end' }}>
                  <LazyLoadImage
                    src={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_${32}x${32}.png`}
                    alt={`${device.product.name}`}
                    width={32}
                    height={32}
                    effect="opacity"
                  />
                  <img />
                </div>
              </IconCell>
              <TableCell colSpan={2}>{device.line.name}</TableCell>
              <TableCell colSpan={5}>
                <StyledLink to={`/devices/list/${device.id}`}>
                  {device.product.name}
                </StyledLink>
              </TableCell>
            </StyledRow>
          ))}
        </tbody>
      </StyledTable>
    </DeviceListContainer>
  )
}
