const URL_API = 'https://api.open-meteo.com/'

const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
}

const TYPES_VARIABLES_FOR_API = [
    'rain_sum',
    'snowfall_sum',
    'precipitation_hours',
    'shortwave_radiation_sum',
]

const COORDINATES = {
    LAT: 55.751244,
    LONG: 37.618423
}

export { URL_API, METHODS, COORDINATES, TYPES_VARIABLES_FOR_API }
