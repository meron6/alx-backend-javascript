// 7-airport.js
export default class Airport {
  constructor(name, code) {
    this._validateName(name);
    this._validateCode(code);

    this._name = name;
    this._code = code;
  }

  // Name validation
  _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  // Code validation
  _validateCode(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Custom toString method
  toString() {
    return `[object ${this._code}]`;
  }

  // Optional: To match the example output format
  toStringVerbose() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
}
