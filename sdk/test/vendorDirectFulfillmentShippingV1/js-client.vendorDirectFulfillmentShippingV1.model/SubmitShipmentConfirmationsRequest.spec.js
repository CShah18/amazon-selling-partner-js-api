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
    describe('SubmitShipmentConfirmationsRequest', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForDirectFulfillmentShipping.SubmitShipmentConfirmationsRequest();
      });

      it('should create an instance of SubmitShipmentConfirmationsRequest', function() {
        // TODO: update the code to test SubmitShipmentConfirmationsRequest
        expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentShipping.SubmitShipmentConfirmationsRequest);
      });

      it('should have the property shipmentConfirmations (base name: "shipmentConfirmations")', function() {
        // TODO: update the code to test the property shipmentConfirmations
        expect(instance).to.have.property('shipmentConfirmations');
        // expect(instance.shipmentConfirmations).to.be(expectedValueLiteral);
      });

    });
  });

}));
