/*
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * OpenAPI spec version: 2020-07-01
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.29
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../../src/fulfillmentOutbound_2020-07-01/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/fulfillmentOutbound_2020-07-01/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApisForFulfillmentOutbound);
  }
}(this, function(expect, SellingPartnerApisForFulfillmentOutbound) {
  'use strict';

  var instance;

  describe('fulfillmentOutbound_2020-07-01', function() {
    describe('PaymentInformation', function() {
      beforeEach(function() {
        instance = new SellingPartnerApisForFulfillmentOutbound.PaymentInformation();
      });

      it('should create an instance of PaymentInformation', function() {
        // TODO: update the code to test PaymentInformation
        expect(instance).to.be.a(SellingPartnerApisForFulfillmentOutbound.PaymentInformation);
      });

      it('should have the property paymentTransactionId (base name: "paymentTransactionId")', function() {
        // TODO: update the code to test the property paymentTransactionId
        expect(instance).to.have.property('paymentTransactionId');
        // expect(instance.paymentTransactionId).to.be(expectedValueLiteral);
      });

      it('should have the property paymentMode (base name: "paymentMode")', function() {
        // TODO: update the code to test the property paymentMode
        expect(instance).to.have.property('paymentMode');
        // expect(instance.paymentMode).to.be(expectedValueLiteral);
      });

      it('should have the property paymentDate (base name: "paymentDate")', function() {
        // TODO: update the code to test the property paymentDate
        expect(instance).to.have.property('paymentDate');
        // expect(instance.paymentDate).to.be(expectedValueLiteral);
      });

    });
  });

}));
