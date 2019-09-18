import React, { Component } from 'react'
import styles from './index.module.scss'
import { connect } from 'react-redux';
import { dispatchActiveTab, dispatchGetIssue, dispatchResetState } from '../../actions'
import history from '../../history'
import Header from '../../components/Header'
import Issue from '../../components/Issue'
import closeSvg from '../../assets/icons/close.svg'
import loadingSpinner from '../../assets/icons/loadingSpinner.svg'
import qs from "querystringify";
import { ALL_ISSUES, OPEN_ISSUES, CLOSED_ISSUES, PULL_REQUESTS } from '../../constants'

class IssueList extends Component {

    componentWillMount() {
        window.addEventListener('scroll', this.handleOnScroll, false);
        const { owner, repo, page } = qs.parse(this.props.location.search);

        if (owner && repo && page) {
            this.props.dispatchGetIssue(owner, repo, Number(page));
        }

    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleOnScroll, false);
        this.props.dispatchResetState()
    }

    handleOnScroll = (e) => {
        const { owner, repo, currentPage, lastPageNumber } = this.props
        window.onscroll = () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && currentPage <= lastPageNumber) {
                this.props.dispatchGetIssue(owner, repo, currentPage + 1)
            }
        };
    }

    onHandleClose = () => {
        history.push('/')
    }


    render() {
        const { dispatchActiveTab, activeTab, allIssues, openIssues, closedIssues, pullRequests, repo, owner, loading } = this.props

        let listToRender;
        switch (activeTab) {
            case ALL_ISSUES:
                listToRender = allIssues
                break;
            case OPEN_ISSUES:
                listToRender = openIssues
                break;
            case CLOSED_ISSUES:
                listToRender = closedIssues
                break;
            case PULL_REQUESTS:
                listToRender = pullRequests
                break;
            default:
        }

        return <div>
            <Header repo={repo} owner={owner} />
            <div className={styles.tabContainer}>
                <div onClick={() => dispatchActiveTab(ALL_ISSUES)} className={activeTab === ALL_ISSUES && allIssues.length !== 0 ? styles.activeTab : styles.tab}>{ALL_ISSUES}</div>
                <div onClick={() => dispatchActiveTab(OPEN_ISSUES)} className={activeTab === OPEN_ISSUES ? styles.activeTab : styles.tab}>{OPEN_ISSUES}</div>
                <div onClick={() => dispatchActiveTab(CLOSED_ISSUES)} className={activeTab === CLOSED_ISSUES ? styles.activeTab : styles.tab}>{CLOSED_ISSUES}</div>
                <div onClick={() => dispatchActiveTab(PULL_REQUESTS)} className={activeTab === PULL_REQUESTS ? styles.activeTab : styles.tab}>{PULL_REQUESTS}</div>
            </div>
            <img onClick={this.onHandleClose} src={closeSvg} alt="close" className={styles.close} />
            {allIssues.length === 0 && <div className={styles.emptyIssueText}>There is no issue in this repo.</div>}
            <div className={styles.issueContainer}>
                {listToRender && listToRender.map((issue, index) => {
                    return <Issue key={index} issue={issue} />

                })}
            </div>
            {loading && <div className={styles.loadingSpinnerContainer}><img src={loadingSpinner} alt="" className={styles.loadingSpinner} /></div>}



        </div>
    }
}

const mapActionToProps = {
    dispatchActiveTab,
    dispatchGetIssue,
    dispatchResetState
}

const mapStateToProps = (state) => ({
    allIssues: state.issue.allIssues,
    loading: state.issue.loading,
    error: state.issue.error,
    inputValue: state.issue.inputValue,
    activeTab: state.issue.activeTab,
    owner: state.issue.owner,
    repo: state.issue.repo,
    openIssues: state.issue.openIssues,
    closedIssues: state.issue.closedIssues,
    pullRequests: state.issue.pullRequests,
    currentPage: state.issue.currentPage,
    lastPageNumber: state.issue.lastPageNumber
})

export default connect(mapStateToProps, mapActionToProps)(IssueList);