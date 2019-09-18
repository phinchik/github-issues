import { GET_ISSUES, GET_ISSUES_SUCCESS, GET_ISSUES_FAILED, INPUT_VALUE, ACTIVE_TAB, RESET_STATE } from './types'
import axios from 'axios'
import { getLastPageNumber } from '../utils'
import history from '../history'

export const dispatchGetIssue = (owner, repo, currentPage) => {
    return dispatch => {
        dispatch({ type: GET_ISSUES })
        axios.get(`https://api.github.com/repos/${owner}/${repo}/issues?page=${currentPage}&state=all`)
            .then(({ data, headers }) => {
                //delay result because it's coming too fast
                setTimeout(() => {
                    let lastPageNumber;
                    if (headers.link) {
                        lastPageNumber = getLastPageNumber(headers);
                    }

                    dispatch({ type: GET_ISSUES_SUCCESS, payload: { data, owner, repo, currentPage, lastPageNumber } })
                    history.push(
                        `/IssueList?owner=${owner}&repo=${repo}&page=${currentPage}`
                    );
                }, 1500)
            }).catch(error => {
                dispatch({ type: GET_ISSUES_FAILED, payload: error })
            })
    }
}

export const dispatchInputValue = () => ({
    type: INPUT_VALUE
})

export const dispatchActiveTab = (value) => ({
    type: ACTIVE_TAB,
    payload: value
})

export const dispatchResetState = () => ({
    type: RESET_STATE
})
