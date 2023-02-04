import { legacy_createStore as createStore} from 'redux'

const LOADER = 'LOADER'

export const setLoader = (loading: boolean) => {
    return {
        type : LOADER,
        payload : loading
    }
}

const initialState = {
    isLoading: false
}

const loadingActionReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case LOADER: return {
            ...state,
            isLoading : action.payload
        }
        default: return state
    }
}

export const store = createStore(loadingActionReducer)