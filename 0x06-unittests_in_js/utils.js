/**
 * Utility functions definition
 */
const Utils = {
  calculateNumber(type, a, b) {
    let result;
    switch (type) {
      case 'SUM':
        result = Math.round(a) + Math.round(b);
        break;
      case 'SUBTRACT':
        result = Math.round(a) - Math.round(b);
        break;
      case 'DIVIDE':
        result = Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
        break;
    }
    return result;
  },
};

module.exports = Utils;
