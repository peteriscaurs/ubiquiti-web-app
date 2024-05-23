import { useContext, useState } from 'react'
import styled from 'styled-components'
import CrossButton from './CrossButton'
import { AppContext } from '../App'
import { Device } from '../api'
import { useSearchParams } from 'react-router-dom'

const serialize = (selectedIds: string[]) => selectedIds.join(',')

const deserialize = (serializedString: string) => serializedString.split(',')

const StyledButton = styled.button`
  border: none;
  background-color: white;
`

const DropdownMenu = styled.ul<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  right: 0;
  top: 56px;
  list-style-type: none;
  padding: 0;
  background-color: white;
  min-width: 256px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.15);
  z-index: 1;
`

const DropdownMenuItem = styled.li`
  display: flex;
  align-items: center;
  color: black;
  padding: 4px 16px;
  cursor: pointer;

  &:hover {
    background-color: rgb(251, 251, 251);
  }
`

const StyledCheckbox = styled.input`
  margin-right: 8px;
  width: 16px;
  height: 16px;

  accent-color: rgb(0, 111, 255);
`

const CloseFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 49px;
  padding: 0px 14px;
  border-bottom: 1px solid rgb(237, 237, 240);
`

const FilterName = styled.div`
  padding: 14px;
`

const uniqueLines = (devices: Device[]) => {
  return devices.reduce((acc: Device[], device) => {
    const found = acc.find((item) => item.line.id === device.line.id)
    if (!found) {
      acc.push(device)
    }

    return acc
  }, [])
}

export default function SelectFilter() {
  const { deviceList } = useContext(AppContext)

  const productLines = uniqueLines(deviceList)

  const [isOpen, setIsOpen] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams({
    lines: [],
  })

  const checkedItems = searchParams.get('lines') || ''

  const toggleDropdown = () => setIsOpen(!isOpen)
  return (
    <>
      <StyledButton onClick={toggleDropdown}>Filter</StyledButton>
      <DropdownMenu isOpen={isOpen}>
        <CloseFilter>
          <span>Filter</span>
          <CrossButton handleOnClick={toggleDropdown} />
        </CloseFilter>
        <FilterName>
          <strong>Product line</strong>
        </FilterName>
        {productLines.map((device) => (
          <DropdownMenuItem>
            <StyledCheckbox
              type="checkbox"
              checked={checkedItems.includes(device.line.name)}
              onChange={() => {
                setSearchParams((prev) => {
                  const prevLines = deserialize(prev.get('lines') || '')
                  prevLines.includes(device.line.name)
                    ? prev.set(
                        'lines',
                        serialize(
                          prevLines.filter((item) => item !== device.line.name),
                        ),
                      )
                    : prev.set(
                        'lines',
                        serialize([...prevLines, device.line.name]),
                      )
                  return prev
                })
              }}
            />
            {device.line.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenu>
    </>
  )
}
