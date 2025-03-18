
export type initStateType = {
    isLoading: boolean
}

const initState: initStateType = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType): initStateType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING':
            return {isLoading: action.isLoading}
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
