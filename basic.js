
console.log('Hello Counter Assignment')

const redux = require('redux')
const createStore = redux.createStore

//initialize state
const initialState = {
    counter: 1000
}
//console.log(initialState)

//reducer
const reduce = (state = initialState, action) => {
    if(action.type == 'INC_COUNTER') {
        return{
            ...state,
            counter: state.counter + 1000
        }
    } else if(action.type == 'MINUS_COUNTER') {
        return{
            ...state,
            counter: state.counter - action.value
        }
    } else if(action.type == 'DEC_COUNTER') {
        return{
            ...state,
            counter: state.counter - 1
        }
    }
}

//create store
const store = createStore(reduce)

//subscription
store.subscribe(() => {
    console.log('Subscription Fired')
})

//dispatch 
store.dispatch({type: 'INC_COUNTER'})
console.log(store.getState())

//subtract counter 
store.dispatch({type: 'MINUS_COUNTER', value: 200})
console.log(store.getState())

//decrement counter 
store.dispatch({type: 'DEC_COUNTER'})
console.log(store.getState())