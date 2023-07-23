function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`

}


function mondayWork(duty = "go to the office") {
    return `This Monday, I will ${duty}.`

}


function wrapAdjective(symbol) {
    const result = function (adjective) {
        return `You are ${symbol}${adjective}${symbol}!`

    }
    return result

}
