import React, { useEffect, useState } from 'react'

import { getContent } from '../api'
import { DataFromServer } from '../types'
import Loader from './Loader'

import styles from './Weather.module.css'

interface WeatherProps {
    lat: number
    long: number
    variables: string[]
}

const Weather: React.FC<WeatherProps> = ({ lat, long, variables }) => {
    const [weather, setWeather] = useState<DataFromServer>()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                setIsLoading(true)
                const data = await getContent({ lat, long, variables })
                setWeather(data)
            } catch (err) {
                setError(
                    err instanceof Error
                        ? err.message
                        : 'Error fetching weather data',
                )
            } finally {
                setIsLoading(false)
            }
        }
        fetchWeather()
    }, [lat, long, variables])

    return (
        <>
            {error && (
                <div className={styles.error}>
                    <p>{error}</p>
                    <button onClick={() => window.location.reload()}>
                        Перезагрузить страницу
                    </button>
                </div>
            )}
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <td>date</td>
                                {variables.map((variable) => (
                                    <td key={variable}>{variable}</td>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {weather &&
                                weather.daily.time.map((item) => (
                                    <tr key={item}>
                                        <td>{item}</td>
                                        {variables.map((variable, index) => (
                                            <td key={variable}>
                                                {weather.daily[variable][index]}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </>
            )}
        </>
    )
}

export default Weather
