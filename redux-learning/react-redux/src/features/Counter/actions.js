import {INC_COUNT,DEC_COUNT} from"./actionType.js"
export const incCount =(count) => {
return{
    type:INC_COUNT,
    payload:count,
}
}
export const decCount =(count) => {
    return{
        type:DEC_COUNT,
        payload:count,
    }
}