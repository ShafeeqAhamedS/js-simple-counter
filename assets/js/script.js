var counterValue = 0

const incrementFunction = () => {
    counterValue++
    document.getElementById('counter-number').innerText = counterValue
    console.log(`increment logged!`)
}

const decrementFunction = () => {
    counterValue--
    document.getElementById('counter-number').innerText = counterValue
    console.log(`decrement logged!`)
}