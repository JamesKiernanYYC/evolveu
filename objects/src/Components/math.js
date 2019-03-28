import React from "react"

function sum(a, b) {
    return (a+b);
}
function mult(a, b) {
    return (a*b);
}
function div(a, b) {
    return (a/b);
}
function remainder(a, b) {
    return (a-b);
}

export default { sum, mult, div, remainder }