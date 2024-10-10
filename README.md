# Landmark API Wrapper

A TypeScript wrapper for the [Landmark API](https://api.landmark-api.com/api/v1). This library simplifies interaction with the Landmark API, providing easy-to-use methods for fetching landmark data based on various criteria.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Methods](#api-methods)
  - [getLandmarks](#getlandmarks)
  - [getLandmarkById](#getlandmarkbyid)
  - [getLandmarksByCountry](#getlandmarksbycountry)
  - [searchLandmarksByName](#searchlandmarksbyname)
  - [searchLandmarksByCoordinates](#searchlandmarksbycoordinates)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Easy Authentication**: Pass your API key and authentication token to the client.
- **Comprehensive Landmark Data**: Fetch detailed information about landmarks worldwide.
- **Advanced Querying**: Get landmarks by ID, country, name, or coordinates.

## Installation

You can install the Landmark API Wrapper via npm:

```bash
npm install landmark-api-wrapper
```

## Usage

Here's a basic example of how to use the Landmark API Wrapper:

```typescript
import LandmarkAPI from 'landmark-api-wrapper';

const api = new LandmarkAPI('your_api_key', 'your_auth_token');

(async () => {
    try {
        const landmarks = await api.getLandmarks();
        console.log(landmarks);
    } catch (error) {
        console.error('Error fetching landmarks:', error);
    }
})();
```

## API Methods

### getLandmarks

Fetch all landmarks with optional query parameters.

```typescript
async getLandmarks(params?: { limit?: number; offset?: number; sort?: string }): Promise<any>
```

- **Parameters**:
  - `limit`: Number of landmarks to return (default: 10).
  - `offset`: The starting point for results (default: 0).
  - `sort`: Field to sort by (e.g., "-name" for descending order).

### getLandmarkById

Fetch a landmark by its ID.

```typescript
async getLandmarkById(id: string): Promise<any>
```

- **Parameters**:
  - `id`: The ID of the landmark.

### getLandmarksByCountry

Fetch landmarks from a specific country.

```typescript
async getLandmarksByCountry(country: string): Promise<any>
```

- **Parameters**:
  - `country`: The name of the country.

### searchLandmarksByName

Search for landmarks by name.

```typescript
async searchLandmarksByName(name: string): Promise<any>
```

- **Parameters**:
  - `name`: The name of the landmark.

### searchLandmarksByCoordinates

Search for landmarks based on latitude and longitude.

```typescript
async searchLandmarksByCoordinates(lat: number, long: number): Promise<any>
```

- **Parameters**:
  - `lat`: Latitude of the search location.
  - `long`: Longitude of the search location.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any changes you'd like to propose.

## License

This project is licensed under the MIT License.

## Contact

Marceli Borowczak - marceliborowczak@example.com
Project Link: https://github.com/Gravgor/landmark-api-wrapper



### Tips for Customization

- Replace `your_api_key` and `your_auth_token` with actual usage instructions or examples.
- Feel free to expand the documentation based on any additional features or configuration options your wrapper may have.
- Consider adding example outputs or error handling scenarios to help users understand what to expect. 

This `README.md` serves as a comprehensive guide for users interested in your package, making it easy for them to get started and understand how to use your Landmark API wrapper effectively.
