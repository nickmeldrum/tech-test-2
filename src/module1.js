module.exports = input => input.match(/\d+/g).join('')

// input is a string phone number
// input contains digits, spaces and/or dashes
// input contains at least 2 digits
//
// ignore spaces and dashes
//
// reformat string grouped in blocks of 3 separated by dashes
// the final block OR last 2 blocks can be of length 2!!!
//
// N (length of string) is an integer 2..100
// correctness only not performance
//
