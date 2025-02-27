/*
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
 *
 * OpenAPI spec version: v0
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
    define(['expect.js', '../../../src/merchantFulfillmentV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/merchantFulfillmentV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForMerchantFulfillment);
  }
}(this, function(expect, SellingPartnerApiForMerchantFulfillment) {
  'use strict';

  var instance;

  describe('merchantFulfillmentV0', function() {
    describe('ShipmentStatus', function() {
      beforeEach(function() {
        instance = SellingPartnerApiForMerchantFulfillment.ShipmentStatus;
      });

      it('should create an instance of ShipmentStatus', function() {
        // TODO: update the code to test ShipmentStatus
        expect(instance).to.be.a('object');
      });

      it('should have the property purchased', function() {
        expect(instance).to.have.property('purchased');
        expect(instance.purchased).to.be("Purchased");
      });

      it('should have the property refundPending', function() {
        expect(instance).to.have.property('refundPending');
        expect(instance.refundPending).to.be("RefundPending");
      });

      it('should have the property refundRejected', function() {
        expect(instance).to.have.property('refundRejected');
        expect(instance.refundRejected).to.be("RefundRejected");
      });

      it('should have the property refundApplied', function() {
        expect(instance).to.have.property('refundApplied');
        expect(instance.refundApplied).to.be("RefundApplied");
      });

    });
  });

}));
