/**
 * Rounds parameters and performs arithmetic operations
 * @param {string} type - The type of operation to perform
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number|string} The result of the arithmetic operation or 'Error'
 */
function calculateNumber(type, a, b) {
  let result;
  switch (type) {
    case 'SUM':
      result = Math.round(a) + Math.round(b);
      break;
    case 'SUBTRACT':
      result = Math.round(a) - Math.round(b);
      break;
    case 'DIVIDE':
      if (Math.round(b) === 0) {
        result = 'Error';
      } else {
        result = Math.round(a) / Math.round(b);
      }
      break;
    default:
      result = 'Error';
  }
  return result;
}

module.exports = calculateNumber;
