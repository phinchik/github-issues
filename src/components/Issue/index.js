import React from 'react'
import styles from './index.module.scss'
import Label from '../Label'
import pullRequest from '../../assets/icons/pull-request.svg'
import issueClosed from '../../assets/icons/issue-closed.svg'

const Issue = ({ issue }) => {
    const { title, body, labels, state } = issue
    let icon = state === 'pr' ? pullRequest : state === 'closed' ? issueClosed : ''

    let description = body
    if (body.length === 0) description = 'No description provided'
    if (body.length > 250) description = `${body.substr(0, 250)}...`

    return (
        <div className={styles.issueContainer} >
            <div className={styles.issueTitleContainer} >
                <img className={styles.icon} src={icon} alt="" />
                <h4 className={styles.issueTitle}>{title}</h4>
            </div>

            <div className={styles.issueBodyContainer} >
                {body.length === 0
                    ? <div className={styles.issueNoDescription}>{description}</div>
                    : <div className={styles.issueBody}>{description}</div>
                }
            </div>
            <div className={styles.issueLabelContainer} >
                <div className={styles.issueLabel}>
                    {labels && labels.map((label, i) => {
                        return <Label key={i} name={label.name} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Issue