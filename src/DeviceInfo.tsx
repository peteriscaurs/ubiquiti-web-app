import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styled from 'styled-components'
import { AppContext } from './App'

import 'react-lazy-load-image-component/src/effects/opacity.css'

const DeviceInfoContainer = styled.div`
  margin-top: 160px;
  display: flex;
  justify-content: center;
`

const StyledProductBody = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    & {
      flex-direction: column;
    }
  }
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

  return (
    <DeviceInfoContainer>
      <StyledProductBody>
        <LazyLoadImage
          src={`https://static.ui.com/fingerprint/ui/icons/${device?.icon.id}_${256}x${256}.png`}
          alt={`${id}`}
          style={{ objectFit: 'cover' }}
          width={256}
          height={256}
          effect="opacity"
        />
        <StyledProductDetails>
          {device?.line.name && (
            <ProductDetailsRow>
              <DetailsText>Product line</DetailsText>
              <DetailsText>{device.line.name}</DetailsText>
            </ProductDetailsRow>
          )}
          {device?.line.id && (
            <ProductDetailsRow>
              <DetailsText>ID</DetailsText>
              <DetailsText>{device.line.id}</DetailsText>
            </ProductDetailsRow>
          )}
          {device?.product.name && (
            <ProductDetailsRow>
              <DetailsText>Name</DetailsText>
              <DetailsText>{device.product.name}</DetailsText>
            </ProductDetailsRow>
          )}
          {device?.shortnames[0] && (
            <ProductDetailsRow>
              <DetailsText>Short Name</DetailsText>
              <DetailsText>{device.shortnames[0]}</DetailsText>
            </ProductDetailsRow>
          )}
          {device?.unifi?.network?.radios.na?.maxPower && (
            <ProductDetailsRow>
              <DetailsText>Max. power</DetailsText>
              <DetailsText>
                {device.unifi.network.radios.na.maxPower} W
              </DetailsText>
            </ProductDetailsRow>
          )}
          {device?.unifi?.network?.radios.na?.maxSpeedMegabitsPerSecond && (
            <ProductDetailsRow>
              <DetailsText>Speed</DetailsText>
              <DetailsText>
                {device.unifi.network.radios.na.maxSpeedMegabitsPerSecond} Mbps
              </DetailsText>
            </ProductDetailsRow>
          )}
          {device?.unifi?.network?.numberOfPorts && (
            <ProductDetailsRow>
              <DetailsText>Number of ports</DetailsText>
              <DetailsText>{device.unifi.network.numberOfPorts}</DetailsText>
            </ProductDetailsRow>
          )}
        </StyledProductDetails>
      </StyledProductBody>
    </DeviceInfoContainer>
  )
}
