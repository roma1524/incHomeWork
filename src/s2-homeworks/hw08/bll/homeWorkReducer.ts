import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortArr = [...state].sort((a, b) => a.name > b.name ? 1 : -1)
            const sortArrR = [...state].sort((a, b) => b.name > a.name ? 1 : -1)

            return action.payload === 'up' ? sortArr : sortArrR

        }
        case 'check': {
            return state.filter(el => el.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
