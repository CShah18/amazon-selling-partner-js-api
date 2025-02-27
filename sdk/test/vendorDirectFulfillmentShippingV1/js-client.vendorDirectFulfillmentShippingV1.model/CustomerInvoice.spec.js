/*
 * Selling Partner API for Direct Fulfillment Shipping
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor's shipping data.
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
    define(['expect.js', '../../../src/vendorDirectFulfillmentShippingV1/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/vendorDirectFulfillmentShippingV1/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForDirectFulfillmentShipping);
  }
}(this, function(expect, SellingPartnerApiForDirectFulfillmentShipping) {
  'use strict';

  var instance;

  describe('vendorDirectFulfillmentShippingV1', function() {
    describe('CustomerInvoice', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForDirectFulfillmentShipping.CustomerInvoice();
      });

      it('should create an instance of CustomerInvoice', function() {
        // TODO: update the code to test CustomerInvoice
        expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentShipping.CustomerInvoice);
      });

      it('should have the property purchaseOrderNumber (base name: "purchaseOrderNumber")', function() {
        // TODO: update the code to test the property purchaseOrderNumber
        expect(instance).to.have.property('purchaseOrderNumber');
        // expect(instance.purchaseOrderNumber).to.be(expectedValueLiteral);
      });

      it('should have the property content (base name: "content")', function() {
        // TODO: update the code to test the property content
        expect(instance).to.have.property('content');
        // expect(instance.content).to.be(expectedValueLiteral);
      });

    });
  });

}));
