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
    describe('ShipmentStatusUpdate', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForDirectFulfillmentShipping.ShipmentStatusUpdate();
      });

      it('should create an instance of ShipmentStatusUpdate', function() {
        // TODO: update the code to test ShipmentStatusUpdate
        expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentShipping.ShipmentStatusUpdate);
      });

      it('should have the property purchaseOrderNumber (base name: "purchaseOrderNumber")', function() {
        // TODO: update the code to test the property purchaseOrderNumber
        expect(instance).to.have.property('purchaseOrderNumber');
        // expect(instance.purchaseOrderNumber).to.be(expectedValueLiteral);
      });

      it('should have the property sellingParty (base name: "sellingParty")', function() {
        // TODO: update the code to test the property sellingParty
        expect(instance).to.have.property('sellingParty');
        // expect(instance.sellingParty).to.be(expectedValueLiteral);
      });

      it('should have the property shipFromParty (base name: "shipFromParty")', function() {
        // TODO: update the code to test the property shipFromParty
        expect(instance).to.have.property('shipFromParty');
        // expect(instance.shipFromParty).to.be(expectedValueLiteral);
      });

      it('should have the property statusUpdateDetails (base name: "statusUpdateDetails")', function() {
        // TODO: update the code to test the property statusUpdateDetails
        expect(instance).to.have.property('statusUpdateDetails');
        // expect(instance.statusUpdateDetails).to.be(expectedValueLiteral);
      });

    });
  });

}));
