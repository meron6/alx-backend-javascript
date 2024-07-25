export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
   * @returns {String} The name of the airport.
   */
  get name() {
    return this._name;
  }

  /**
   * @param {String} value - The name of the airport.
   */
  set name(value) {
    this._name = value;
  }

  /**
   * @returns {String} The code of the airport.
   */
  get code() {
    return this._code;
  }

  /**
   * @param {String} value - The code of the airport.
   */
  set code(value) {
    this._code = value;
  }

  /**
   * Custom toStringTag for the airport object.
   * @returns {String} The code of the airport.
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
