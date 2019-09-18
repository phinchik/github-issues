import React, { Component } from 'react'
import styles from './index.module.scss'
import searchIcon from '../../assets/icons/search.svg'
import { connect } from 'react-redux';
import { dispatchGetIssue, dispatchInputValue } from '../../actions'

class Search extends Component {
    state = {
        inputVal: '',
    }

    onPasteUrl = (e) => {
        const Url = e.clipboardData.getData('Text').split('/')
        const owner = Url[3]
        const repo = Url[4]
        const str = e.clipboardData.getData('Text')

        this.setState({ inputVal: str }, () => {
            this.props.dispatchGetIssue(owner, repo, 1)
        })
    }

    onHandleKeyDown = (e) => {
        if (e.keyCode === 8) {
            this.setState({
                inputVal: '',
            })
            this.props.dispatchInputValue()
        }
    }

    render() {
        const { loading, error } = this.props
        const { inputVal } = this.state
        return <div className={styles.rootContainer}>
            <div className={styles.searchContainer}>
                <div className={styles.searchTitle}>GitHub Issue Viewer</div>
                <div className={styles.inputContainer}>
                    <img src={searchIcon} alt="search" className={styles.searchIcon} />
                    <input
                        className={styles.searchInput}
                        placeholder="Paste a link to a GitHub repo!"
                        onKeyPress={event => event.preventDefault()}
                        onPaste={(e) => this.onPasteUrl(e)}
                        onKeyDown={(e) => this.onHandleKeyDown(e)}
                        value={inputVal}
                        readOnly
                    />
                </div>
                {loading && <div className={styles.text}>Getting issues...</div>}
                {error && <div className={styles.text}>Repo doesn't exist</div>}
            </div>
        </div>
    }
}



const mapActionToProps = {
    dispatchGetIssue,
    dispatchInputValue
}

const mapStateToProps = (state) => ({
    allIssues: state.issue.allIssues,
    loading: state.issue.loading,
    error: state.issue.error,
    inputValue: state.issue.inputValue
})

export default connect(mapStateToProps, mapActionToProps)(Search);