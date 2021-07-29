import {FormLoginType,ActionType,ACTIONS} from '../types'

const formReducer = (state:FormLoginType,action:ActionType) => {
    switch(action.type) {
        case ACTIONS.ChangeState: {
            return {
                ...state,
                [action.payload.field]:action.payload.value
            }
        }
    }
}

export {
    formReducer
}