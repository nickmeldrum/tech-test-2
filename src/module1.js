module.exports = input => {
  const numbers = input.match(/\d+/g).join('')

  let output = ''
  const upperBound = numbers.length
  for (let i = 0; i < upperBound; i += 1) {
    output += numbers[i]
    if (i + 1 < numbers.length && (i + 1) % 3 === 0) output += '-'
  }
  if (numbers.length % 3 === 1) {
    // last triple only has 1 number so move the dash to 1 earlier
    const outputArray = output.split('')
    outputArray.splice(outputArray.length - 2, 1)
    outputArray.splice(outputArray.length - 2, 0, '-')
    return outputArray.join('')
  }
  return output
}

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
//
// Potential edge cases - negative numbers etc. - what are the edge cases of the regex?
// what if it only has 2 numbers - what if 100?
