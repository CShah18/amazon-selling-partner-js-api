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
    describe('ShipmentSchedule', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForDirectFulfillmentShipping.ShipmentSchedule();
      });

      it('should create an instance of ShipmentSchedule', function() {
        // TODO: update the code to test ShipmentSchedule
        expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentShipping.ShipmentSchedule);
      });

      it('should have the property estimatedDeliveryDateTime (base name: "estimatedDeliveryDateTime")', function() {
        // TODO: update the code to test the property estimatedDeliveryDateTime
        expect(instance).to.have.property('estimatedDeliveryDateTime');
        // expect(instance.estimatedDeliveryDateTime).to.be(expectedValueLiteral);
      });

      it('should have the property apptWindowStartDateTime (base name: "apptWindowStartDateTime")', function() {
        // TODO: update the code to test the property apptWindowStartDateTime
        expect(instance).to.have.property('apptWindowStartDateTime');
        // expect(instance.apptWindowStartDateTime).to.be(expectedValueLiteral);
      });

      it('should have the property apptWindowEndDateTime (base name: "apptWindowEndDateTime")', function() {
        // TODO: update the code to test the property apptWindowEndDateTime
        expect(instance).to.have.property('apptWindowEndDateTime');
        // expect(instance.apptWindowEndDateTime).to.be(expectedValueLiteral);
      });

    });
  });

}));
