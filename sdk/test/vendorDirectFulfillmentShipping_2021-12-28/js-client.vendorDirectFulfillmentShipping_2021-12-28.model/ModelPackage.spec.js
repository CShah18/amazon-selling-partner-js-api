/*
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
 *
 * OpenAPI spec version: 2021-12-28
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
    define(['expect.js', '../../../src/vendorDirectFulfillmentShipping_2021-12-28/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/vendorDirectFulfillmentShipping_2021-12-28/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForDirectFulfillmentShipping);
  }
}(this, function(expect, SellingPartnerApiForDirectFulfillmentShipping) {
  'use strict';

  var instance;

  describe('vendorDirectFulfillmentShipping_2021-12-28', function() {
    describe('ModelPackage', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForDirectFulfillmentShipping.ModelPackage();
      });

      it('should create an instance of ModelPackage', function() {
        // TODO: update the code to test ModelPackage
        expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentShipping.ModelPackage);
      });

      it('should have the property packageTrackingNumber (base name: "packageTrackingNumber")', function() {
        // TODO: update the code to test the property packageTrackingNumber
        expect(instance).to.have.property('packageTrackingNumber');
        // expect(instance.packageTrackingNumber).to.be(expectedValueLiteral);
      });

    });
  });

}));
