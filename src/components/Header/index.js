import React from 'react'
import styles from './index.module.scss'

const Header = ({ repo, owner }) => {
    return <div className={styles.headerContainer}>
        <div className={styles.headerTitle}>GitHub Issue Viewer</div>

        <a
            className={styles.headerLink}
            href={`https://github.com/${owner}/${repo}/issues`}
            target="_blank"
            rel="noopener noreferrer"
        >
            {`https://github.com/${owner}/${repo}/issues`}
        </a>

    </div>
}

export default Header