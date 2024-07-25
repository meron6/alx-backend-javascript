// 5-building.js
export default class Building {
  constructor(sqft) {
    this._validateSqft(sqft);

    this._sqft = sqft;

    if (new.target === Building) {
      throw new TypeError('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Sqft validation
  _validateSqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method check
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
