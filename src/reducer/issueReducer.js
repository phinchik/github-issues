import { GET_ISSUES, GET_ISSUES_SUCCESS, GET_ISSUES_FAILED, INPUT_VALUE, ACTIVE_TAB, RESET_STATE } from '../actions/types'
import { ALL_ISSUES } from '../constants/'


const defaultState = {
    allIssues: [],
    loading: false,
    error: false,
    inputValue: '',
    activeTab: ALL_ISSUES,
    owner: '',
    repo: '',
    openIssues: [],
    closedIssues: [],
    pullRequests: [],
    currentPage: 0,
    lastPageNumber: 0

}

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_ISSUES:
            return {
                ...state,
                loading: true
            }
        case GET_ISSUES_SUCCESS:
            const { data, owner, repo, lastPageNumber, currentPage } = action.payload
            const openIssues = [...state.openIssues, ...data].filter((item) => {
                return item.state === 'open'
            })

            const closedIssues = [...state.closedIssues, ...data].filter((item) => {
                return item.state === 'closed'
            })

            const pullRequests = [...state.pullRequests, ...data].filter((item) => {
                return item.state === 'pr'
            })

            const allIssues = [...state.allIssues, ...data]

            return {
                ...state,
                loading: false,
                allIssues,
                owner,
                repo,
                currentPage,
                openIssues,
                closedIssues,
                pullRequests,
                lastPageNumber
            }
        case GET_ISSUES_FAILED:
            return {
                ...state,
                error: true,
                loading: false
            }
        case INPUT_VALUE:
            return {
                ...state,
                error: false
            }
        case ACTIVE_TAB:
            return {
                ...state,
                activeTab: action.payload
            }
        case RESET_STATE:
            return {
                allIssues: [],
                loading: false,
                error: false,
                inputValue: '',
                activeTab: ALL_ISSUES,
                owner: '',
                repo: '',
                openIssues: [],
                closedIssues: [],
                pullRequests: [],
                currentPage: 0,
                lastPageNumber: 0
            }
        default:
            return state
    }
}