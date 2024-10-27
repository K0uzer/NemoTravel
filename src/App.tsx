import React, { useState } from 'react'
import './App.css'
import Weather from './components/Weather'

function App() {
    const [variables, setVariables] = useState([
        'rain_sum',
        'snowfall_sum',
        'precipitation_hours',
        'shortwave_radiation_sum',
    ])

    return (
        <div className="main">
            <label>
                <input
                    className="main__input"
                    type="text"
                    placeholder="Введите данные"
                    onInput={(e) => {
                        variables.push((e.target as HTMLInputElement).value)
                    }}
                />
            </label>
            <Weather lat={55.751244} long={37.618423} variables={variables} />
        </div>
    )
}

export default App
