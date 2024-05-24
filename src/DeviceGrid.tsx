import styled from 'styled-components'
import { Device } from './api'
import { useFilteredDevices } from './useFilteredDevices'

const DeviceGridContainer = styled.div`
  margin: 23px 55px;
`

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 25px;

  @media (max-width: 992px) {
    & {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
`

const DeviceCard = styled.div`
  border: 1px solid rgb(219, 220, 225);
  border-radius: 8px;
`

const ImageContainer = styled.div`
  display: flex;
  place-content: center;
  background-color: rgb(246, 246, 248);
  height: 160px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

const CardBody = styled.div`
  padding: 12px;
  background-color: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`

const StyledDevicesCount = styled.p`
  color: rgb(189, 189, 189);
  margin-bottom: 14px;
`

const StyledProductName = styled.p`
  color: rgba(0, 0, 0, 0.65);
`

const StyledLineName = styled.p`
  color: rgba(0, 0, 0, 0.45);
`

interface DeviceListProps {
  devices: Device[]
}

export default function DeviceGrid({ devices }: DeviceListProps) {
  const { filteredDevices } = useFilteredDevices(devices)

  return (
    <DeviceGridContainer>
      <StyledDevicesCount>{filteredDevices.length} devices</StyledDevicesCount>
      <StyledGrid>
        {filteredDevices.map((device) => (
          <DeviceCard>
            <ImageContainer>
              <img
                src={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_${device.icon.resolutions[7][0]}x${device.icon.resolutions[7][1]}.png`}
                alt={`${device.product.name}`}
                style={{ objectFit: 'cover' }}
              />
            </ImageContainer>
            <CardBody>
              <StyledProductName>{device.product.name}</StyledProductName>
              <StyledLineName>{device.line.name}</StyledLineName>
            </CardBody>
          </DeviceCard>
        ))}
      </StyledGrid>
    </DeviceGridContainer>
  )
}
