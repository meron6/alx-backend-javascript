/**
 * Rounds parameters to the nearest integer and sums them.
 * @param {number} a - The first number to round and sum.
 * @param {number} b - The second number to round and sum.
 * @returns {number} The sum of the rounded numbers.
 */
function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
