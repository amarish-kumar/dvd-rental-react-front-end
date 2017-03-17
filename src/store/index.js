import {createStore} from 'redux';
let state = {
    auth:{
        token:""
    }
}
function initial(state, action){
    return state;
}
export default createStore(initial, state);