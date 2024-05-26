# Ubiquiti Device Explorer

## Overview

Ubiquiti Device Explorer is a web application designed for Ubiquiti employees to explore, find, look up, and share information about all Ubiquiti devices. This application fetches data from Ubiquiti's public device database and displays it in an intuitive and searchable interface.

## Features

- Device List and Grid View: Browse all Ubiquiti devices
- Search: Search for devices by name
- Filter: Filter devices by product line
- Device Details: View detailed information about each device
- URL Parameters: Search queries and filters are stored in URL parameters for easy sharing
- Image lazy loading: Defer the loading of images until they are about to enter the viewport
- Responsive Design: Optimized for various screen sizes
- Error Handling: Graceful handling of API errors and application errors

## Future Enhancements

- Sticky Table Header: Implement a sticky table header for the device list to enhance UX.
- Custom Checkboxes: Implement custom filter checkboxes that match the design specifications, including custom border colors, border-radius and the tick SVG.

## Prerequisites

- Node.js (>=16.x)
- yarn (>=1.x)

## Installation

1. Clone the repository
2. Install dependencies with `yarn install`

## Running the Application

Start the development server with `yarn start`
