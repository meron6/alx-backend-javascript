// 8-hbtn_class.js
export default class HolbertonClass {
  constructor(size, location) {
    this._validateSize(size);
    this._validateLocation(location);

    this._size = size;
    this._location = location;
  }

  // Size validation
  _validateSize(size) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
  }

  // Location validation
  _validateLocation(location) {
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // Override valueOf to handle casting to Number
  valueOf() {
    return this._size;
  }

  // Override toString to handle casting to String
  toString() {
    return this._location;
  }
}

