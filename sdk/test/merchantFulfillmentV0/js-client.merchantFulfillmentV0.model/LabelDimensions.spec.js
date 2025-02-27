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
    describe('LabelDimensions', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForMerchantFulfillment.LabelDimensions();
      });

      it('should create an instance of LabelDimensions', function() {
        // TODO: update the code to test LabelDimensions
        expect(instance).to.be.a(SellingPartnerApiForMerchantFulfillment.LabelDimensions);
      });

      it('should have the property length (base name: "Length")', function() {
        // TODO: update the code to test the property length
        expect(instance).to.have.property('length');
        // expect(instance.length).to.be(expectedValueLiteral);
      });

      it('should have the property width (base name: "Width")', function() {
        // TODO: update the code to test the property width
        expect(instance).to.have.property('width');
        // expect(instance.width).to.be(expectedValueLiteral);
      });

      it('should have the property unit (base name: "Unit")', function() {
        // TODO: update the code to test the property unit
        expect(instance).to.have.property('unit');
        // expect(instance.unit).to.be(expectedValueLiteral);
      });

    });
  });

}));
