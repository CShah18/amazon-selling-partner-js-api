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
    describe('ShippingLabelList', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForDirectFulfillmentShipping.ShippingLabelList();
      });

      it('should create an instance of ShippingLabelList', function() {
        // TODO: update the code to test ShippingLabelList
        expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentShipping.ShippingLabelList);
      });

      it('should have the property pagination (base name: "pagination")', function() {
        // TODO: update the code to test the property pagination
        expect(instance).to.have.property('pagination');
        // expect(instance.pagination).to.be(expectedValueLiteral);
      });

      it('should have the property shippingLabels (base name: "shippingLabels")', function() {
        // TODO: update the code to test the property shippingLabels
        expect(instance).to.have.property('shippingLabels');
        // expect(instance.shippingLabels).to.be(expectedValueLiteral);
      });

    });
  });

}));
