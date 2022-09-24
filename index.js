
let counterDisplay = document.getElementById("counterDisplay");
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let reset = document.getElementById("reset");
let stepFive = document.getElementById('stepFive');
let stepTen = document.getElementById('stepTen');
let stepFifteen = document.getElementById('stepFifteen');
let maxFiteen = document.getElementById('maxFifteen');
let maxHundred = document.getElementById('maxHundred');
let maxTwoHundred = document.getElementById('maxTwoHundred');

const instialState = {
    value:0,
    step:1,
}

function reducer( state=instialState,action ){
    
    switch(action.type) {
        case "stepFive":
            state.step = 5;
            return state;
        case "stepTen":
            state.step = 10;
            return state;
        case "stepFifteen":
            state.step = 15;
            return state;
        case "increment":
            state.value = state.value + state.step;
            return state;
        case "decrement":
            state.value = state.value - state.step;
            return state;
        case "reset":
            state.value = 0;
            return state; 
        default:
            return state;
        }      
}

let store = Redux.createStore(reducer);
console.log(store.getState());

maxFiteen.addEventListener('click', () => {
    counter = 15;
    return counter;
})

maxHundred.addEventListener('click', () => {
    counter = 100;
    return counter;
})

maxTwoHundred.addEventListener('click', () => {
    counter = 200;
    return counter;
})

stepFive.addEventListener('click', () => {
    store.dispatch({ type: 'stepFive' });
})

stepTen.addEventListener('click', () => {
    store.dispatch({ type: 'stepTen' });
})

stepFifteen.addEventListener('click', () => {
    store.dispatch({ type: 'stepFifteen' });
})

increment.addEventListener('click', () => {
    store.dispatch({ type: 'increment'});
    counterDisplay.innerText = store.getState().value;
    console.log(store.getState());
})

decrement.addEventListener('click', () => {
    store.dispatch({ type: 'decrement'});
    counterDisplay.innerText = store.getState().value;
    console.log(store.getState());
})

reset.addEventListener('click', () => {
    store.dispatch({ type: 'reset'});
    counterDisplay.innerText = store.getState().value;
    console.log(store.getState());
})
