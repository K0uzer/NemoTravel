interface Daily {
    rain_sum: number[]
    snowfall_sum: number[]
    time: string[]
    [key: string]: number[] | string[]
}

interface DailyUnits {
    rain_sum: string
    snowfall_sum: string
    time: string
}

export interface DataFromServer {
    daily: Daily
    daily_units: DailyUnits
    elevation: number
    generationtime_ms: number
    latitude: number
    longitude: number
    timezone: string
    timezone_abbreviation: string
    utc_offset_seconds: number
}
