import {INC_COUNT} from "./actionTypes.js";
export const incCount = function(data){
    return {type:INC_COUNT,payload:data}
}