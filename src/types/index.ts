export enum ACTIONS {
    ChangeState = '@CHANGE_STATE'
}

interface PayLoad {
    value:string,
    field:string
}

export type ActionType = {
    type:ACTIONS,
    payload: PayLoad,
}

export type FormLoginType = {
    email:string,
    password:string
}
