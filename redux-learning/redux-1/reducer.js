 export const reducer =(state,{type,payload}) =>{ // {type,payload} destructured from action
    // if(action.type === "INC_COUNT"){
    //     return {...state,count:state.count+action.payload}
    // }
    // return state;
    switch(type){
        case "INC_COUNT":
            return {...state,count:state.count+payload};
        case "DEC_COUNT":
            return {...state,count:state.count-payload};
        case "ADD_TODO":
            return {...state,todo:[...state.todo,payload]}
        default:return state;
    }
}
