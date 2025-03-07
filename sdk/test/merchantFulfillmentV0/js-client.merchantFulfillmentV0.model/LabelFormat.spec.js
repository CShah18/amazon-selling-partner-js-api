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
    describe('LabelFormat', function() {
      beforeEach(function() {
        instance = SellingPartnerApiForMerchantFulfillment.LabelFormat;
      });

      it('should create an instance of LabelFormat', function() {
        // TODO: update the code to test LabelFormat
        expect(instance).to.be.a('object');
      });

      it('should have the property PDF', function() {
        expect(instance).to.have.property('PDF');
        expect(instance.PDF).to.be("PDF");
      });

      it('should have the property PNG', function() {
        expect(instance).to.have.property('PNG');
        expect(instance.PNG).to.be("PNG");
      });

      it('should have the property zPL203', function() {
        expect(instance).to.have.property('zPL203');
        expect(instance.zPL203).to.be("ZPL203");
      });

      it('should have the property zPL300', function() {
        expect(instance).to.have.property('zPL300');
        expect(instance.zPL300).to.be("ZPL300");
      });

      it('should have the property shippingServiceDefault', function() {
        expect(instance).to.have.property('shippingServiceDefault');
        expect(instance.shippingServiceDefault).to.be("ShippingServiceDefault");
      });

    });
  });

}));
