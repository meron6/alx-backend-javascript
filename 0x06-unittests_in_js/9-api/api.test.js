const request = require('request');
const chai = require('chai');
const { expect } = chai;

describe('Index page', () => {
  it('should respond with the correct body and status code', (done) => {
    request('http://localhost:7865/', (error, response, body) => {
      if (error) return done(error);
      expect(body).to.equal('Welcome to the payment system');
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  describe('Cart', () => {
    it('should return payment methods for a specific cart', (done) => {
      request('http://localhost:7865/cart/7', (error, response, body) => {
        if (error) return done(error);
        expect(body).to.equal('Payment methods for cart 7');
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should handle non-numeric cart IDs with a 404 status', (done) => {
      request('http://localhost:7865/cart/devops', (error, response) => {
        if (error) return done(error);
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});
