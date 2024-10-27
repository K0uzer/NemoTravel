import React from 'react'
import styles from './Loader.module.css'

const Loader: React.FC = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>Загрузка данных...</p>
        </div>
    )
}

export default Loader
