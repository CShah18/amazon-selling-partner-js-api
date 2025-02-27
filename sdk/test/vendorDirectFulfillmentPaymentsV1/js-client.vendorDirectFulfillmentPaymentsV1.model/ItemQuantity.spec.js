/*
 * Selling Partner API for Direct Fulfillment Payments
 * The Selling Partner API for Direct Fulfillment Payments provides programmatic access to a direct fulfillment vendor's invoice data.
 *
 * OpenAPI spec version: v1
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
    define(['expect.js', '../../../src/vendorDirectFulfillmentPaymentsV1/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/vendorDirectFulfillmentPaymentsV1/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForDirectFulfillmentPayments);
  }
}(this, function(expect, SellingPartnerApiForDirectFulfillmentPayments) {
  'use strict';

  var instance;

  describe('vendorDirectFulfillmentPaymentsV1', function() {
    describe('ItemQuantity', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForDirectFulfillmentPayments.ItemQuantity();
      });

      it('should create an instance of ItemQuantity', function() {
        // TODO: update the code to test ItemQuantity
        expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentPayments.ItemQuantity);
      });

      it('should have the property amount (base name: "amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

      it('should have the property unitOfMeasure (base name: "unitOfMeasure")', function() {
        // TODO: update the code to test the property unitOfMeasure
        expect(instance).to.have.property('unitOfMeasure');
        // expect(instance.unitOfMeasure).to.be(expectedValueLiteral);
      });

    });
  });

}));
