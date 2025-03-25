const initState = {
    themeId: 1,
}

type InitStateType = {
    themeId: number
}

export const themeReducer = (state: InitStateType = initState, action: Action): InitStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.payload.id}
        default:
            return state
    }
}

export const changeThemeId = (payload: { id: number }): any => {
    return {type: 'SET_THEME_ID', payload} as const
} // fix any

export type changeThemeIdAction = ReturnType<typeof changeThemeId>

type Action = changeThemeIdAction