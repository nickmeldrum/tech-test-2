module.exports = (A, K, L) => {
  if (K + L > A.length) {
    return -1
  }

  const kAnswers = []
  const lAnswers = []

  const getSum = (arr, index, length) => arr.slice(index, index + length).reduce((a, b) => a + b, 0)
  const addSumToAnswers = (answers, arr, index, length) =>
    answers.push({
      index,
      sum: getSum(arr, index, length),
    })

  for (let i = 0; i < A.length; i += 1) {
    if (A.length - i + 1 > K) addSumToAnswers(kAnswers, A, i, K)
    if (A.length - i + 1 > L) addSumToAnswers(lAnswers, A, i, L)
  }

  let answer = 0
  kAnswers.forEach(k => {
    const startingIndex = k.index
    const endingIndex = k.index + K
    // before
    // after
    const lBeforeAnswers = lAnswers.filter(item => item.index + L < startingIndex + 1)
    const lAfterAnswers = lAnswers.filter(item => item.index > endingIndex - 1)
    lBeforeAnswers.forEach(lb => {
      const sum = k.sum + lb.sum
      if (sum > answer) answer = sum
    })
    lAfterAnswers.forEach(la => {
      const sum = k.sum + la.sum
      if (sum > answer) answer = sum
    })
  })

  return answer
}

/*
Alice and Bob work in a beautiful orchard. There are N apple trees in the orchard. The apple trees are arranged in a row and they are numbered from 1 to N.
Alice is planning to collect all the apples from K consecutive trees and Bob is planning to collect all the apples from L consecutive trees. They want to choose two disjoint segments (one consisting of K trees for Alice and the other consisting of L trees for Bob) so as not to disturb each other. What is the maximum number of apples that they can collect?
Write a function:
function solution(A, K, L);
that, given an array A consisting of N integers denoting the number of apples on each apple tree in the row, and integers K and L denoting, respectively, the number of trees that Alice and Bob can choose when collecting, returns the maximum number of apples that can be collected by them, or −1 if there are no such intervals.
For example, given A = [6, 1, 4, 6, 3, 2, 7, 4], K = 3, L = 2, your function should return 24, because Alice can choose trees 3 to 5 and collect 4 + 6 + 3 = 13 apples, and Bob can choose trees 7 to 8 and collect 7 + 4 = 11 apples. Thus, they will collect 13 + 11 = 24 apples in total, and that is the maximum number that can be achieved.
Given A = [10, 19, 15], K = 2, L = 2, your function should return −1, because it is not possible for Alice and Bob to choose two disjoint intervals.
Assume that:
N is an integer within the range [2..600];
K and L are integers within the range [1..N − 1];
each element of array A is an integer within the range [1..500].

In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
*/
