export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
   * @returns {Number} The size of the class.
   */
  get size() {
    return this._size;
  }

  /**
   * @param {Number} value - The size of the class.
   */
  set size(value) {
    this._size = value;
  }

  /**
   * @returns {String} The location of the class.
   */
  get location() {
    return this._location;
  }

  /**
   * @param {String} value - The location of the class.
   */
  set location(value) {
    this._location = value;
  }

  /**
   * Custom method for primitive type conversions.
   * @param {String} hint - The hint for type conversion ('string', 'number', etc.).
   * @returns {String|Number|Object} The appropriate primitive value based on the hint.
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return this;
  }
}
