import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from './App'
import { useContext } from 'react'

const DeviceInfoContainer = styled.div`
  margin-top: 160px;
  display: flex;
  justify-content: center;
`

const StyledProductBody = styled.div`
  display: flex;
  align-items: center;
`

const StyledProductDetails = styled.div`
  width: 400px;
`

const ProductDetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(237, 237, 240);
`

const DetailsText = styled.p`
  color: rgba(0, 0, 0, 0.65);
`

export default function DeviceInfo() {
  const { id } = useParams()

  const { deviceList } = useContext(AppContext)

  const device = deviceList.find((device) => device.id === id)
  console.log(device)

  return (
    <DeviceInfoContainer>
      <StyledProductBody>
        <img
          src={`https://static.ui.com/fingerprint/ui/icons/${device?.icon.id}_${256}x${256}.png`}
          alt={`${id}`}
        />
        <StyledProductDetails>
          <ProductDetailsRow>
            <DetailsText>Product line</DetailsText>
            <DetailsText>{device?.line.name}</DetailsText>
          </ProductDetailsRow>
          <ProductDetailsRow>
            <DetailsText>ID</DetailsText>
            <DetailsText>{device?.line.id}</DetailsText>
          </ProductDetailsRow>
          <ProductDetailsRow>
            <DetailsText>Name</DetailsText>
            <DetailsText>{device?.product.name}</DetailsText>
          </ProductDetailsRow>
          <ProductDetailsRow>
            <DetailsText>Short Name</DetailsText>
            <DetailsText>{device?.shortnames[0]}</DetailsText>
          </ProductDetailsRow>
          <ProductDetailsRow>
            <DetailsText>Max. power</DetailsText>
            <DetailsText>
              {device?.unifi?.network?.radios.na?.maxPower} W
            </DetailsText>
          </ProductDetailsRow>
          <ProductDetailsRow>
            <DetailsText>Speed</DetailsText>
            <DetailsText>
              {device?.unifi?.network?.radios.na?.maxSpeedMegabitsPerSecond}{' '}
              Mbps
            </DetailsText>
          </ProductDetailsRow>
          <ProductDetailsRow>
            <DetailsText>Number of ports</DetailsText>
            <DetailsText>{device?.unifi?.network?.numberOfPorts}</DetailsText>
          </ProductDetailsRow>
        </StyledProductDetails>
      </StyledProductBody>
    </DeviceInfoContainer>
  )
}
