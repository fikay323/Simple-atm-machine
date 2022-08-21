function minus() {
    let first = parseInt(inp.value)
    let second = parseInt(money.innerText)
    if ( first < second) {
        let ans = second - first
        money.innerText = ans
        text.innerText = 'Transaction Successful'
    }
    else {
        text.innerText = 'Insufficient Funds'
    }
}
function add() {
    let first = parseInt(inp.value)
    let second = parseInt(money.innerText)
    let ans = second + first
    money.innerText = ans
    text.textContent = 'Deposit Successful'

}
function airtime() {
    let first = parseInt(inp.value)
    let second = parseInt(money.innerText)
    if ( first < second) {
        let ans = second - first
        money.innerText = ans
        text.textContent = 'Airtime Successful'
    }
    else {
        text.innerText = 'Insufficient Funds'
    }
}
function payment() {
    let first = parseInt(inp.value)
    let second = parseInt(money.innerText)
    if ( first < second) {
        let ans = second - first
        money.innerText = ans
        text.textContent = 'Payment Successful'
    }
    else {
        text.innerText = 'Insufficient Funds'
    }
}