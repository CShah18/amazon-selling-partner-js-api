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
    describe('StatusUpdateDetails', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForDirectFulfillmentShipping.StatusUpdateDetails();
      });

      it('should create an instance of StatusUpdateDetails', function() {
        // TODO: update the code to test StatusUpdateDetails
        expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentShipping.StatusUpdateDetails);
      });

      it('should have the property trackingNumber (base name: "trackingNumber")', function() {
        // TODO: update the code to test the property trackingNumber
        expect(instance).to.have.property('trackingNumber');
        // expect(instance.trackingNumber).to.be(expectedValueLiteral);
      });

      it('should have the property statusCode (base name: "statusCode")', function() {
        // TODO: update the code to test the property statusCode
        expect(instance).to.have.property('statusCode');
        // expect(instance.statusCode).to.be(expectedValueLiteral);
      });

      it('should have the property reasonCode (base name: "reasonCode")', function() {
        // TODO: update the code to test the property reasonCode
        expect(instance).to.have.property('reasonCode');
        // expect(instance.reasonCode).to.be(expectedValueLiteral);
      });

      it('should have the property statusDateTime (base name: "statusDateTime")', function() {
        // TODO: update the code to test the property statusDateTime
        expect(instance).to.have.property('statusDateTime');
        // expect(instance.statusDateTime).to.be(expectedValueLiteral);
      });

      it('should have the property statusLocationAddress (base name: "statusLocationAddress")', function() {
        // TODO: update the code to test the property statusLocationAddress
        expect(instance).to.have.property('statusLocationAddress');
        // expect(instance.statusLocationAddress).to.be(expectedValueLiteral);
      });

      it('should have the property shipmentSchedule (base name: "shipmentSchedule")', function() {
        // TODO: update the code to test the property shipmentSchedule
        expect(instance).to.have.property('shipmentSchedule');
        // expect(instance.shipmentSchedule).to.be(expectedValueLiteral);
      });

    });
  });

}));
