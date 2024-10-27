import { useState } from 'react'
import Weather from './components/Weather'
import { COORDINATES, TYPES_VARIABLES_FOR_API } from './constants'

import styles from './App.module.css'

const App = () => {
    const [variables, setVariables] = useState(TYPES_VARIABLES_FOR_API)

    const addVariables = (e: React.FormEvent<HTMLInputElement>) => {
        variables.push((e.target as HTMLInputElement).value)
    }

    return (
        <div className={styles.main}>
            <input
                className={styles.main__input}
                type="text"
                placeholder="Введите данные"
                onInput={(e) => addVariables(e)}
            />
            <Weather
                lat={COORDINATES.LAT}
                long={COORDINATES.LONG}
                variables={variables}
            />
        </div>
    )
}

export default App
