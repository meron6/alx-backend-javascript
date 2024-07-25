// 6-sky_high.js
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Assign sqft to the parent class
    this._validateFloors(floors);

    this._floors = floors;
  }

  // Floors validation
  _validateFloors(floors) {
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
