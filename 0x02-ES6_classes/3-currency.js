// 3-currency.js
export default class Currency {
  constructor(code, name) {
    this._validateCode(code);
    this._validateName(name);

    this._code = code;
    this._name = name;
  }

  // Code validation
  _validateCode(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
  }

  // Name validation
  _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  // Getter and setter for code
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._validateCode(newCode);
    this._code = newCode;
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._validateName(newName);
    this._name = newName;
  }

  // Method to display full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

