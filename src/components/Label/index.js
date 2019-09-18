import React from 'react'
import styles from './index.module.scss'

const Label = ({ name }) => {
    return <div className={styles.LabelContainer}>
        ● {name}
    </div>
}

export default Label