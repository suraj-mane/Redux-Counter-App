let store = Redux.createStore(reducer);
let counter = 0;
let step = 0;
let maxValue = 0;

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

function reducer(counter = {value: 0},action){
    
    var step = { value: 1 };
    
    switch(action.type) {
        case "stepFive":
            return { value: step.value = 5 };
        case "stepTen":
            return { value: step.value = 10 };
        case "stepFifteen":
            return { value: step.value = 15 };
        case "increment":
            return { value: counter.value + (step || 1) };
        case "decrement":
            return { value: counter.value - (step || 1) };
        case "reset":
            return { value:0 }; 
        default:
            return { value: 0, step }
    }

    
}


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
})

decrement.addEventListener('click', () => {
    store.dispatch({ type: 'decrement'});
    counterDisplay.innerText = store.getState().value;
})

reset.addEventListener('click', () => {
    store.dispatch({ type: 'reset'});
    counterDisplay.innerText = store.getState().value;
})