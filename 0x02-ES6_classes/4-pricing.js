import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /**
   * @param {Number} amount
   */
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a Number');
    }
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  /**
   * @param {Currency} currency
   */
  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('currency must be an instance of Currency');
    }
  }

  get currency() {
    return this._currency;
  }

  /**
   * Displays the full price including the currency information.
   * @returns {String} The formatted price with currency.
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  /**
   * Converts a price using the given conversion rate.
   * @param {Number} amount - The amount to convert.
   * @param {Number} conversionRate - The rate to convert the amount.
   * @returns {Number} The converted price.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }

    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }

    return amount * conversionRate;
  }
}

export default Pricing;

