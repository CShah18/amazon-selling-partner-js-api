/*
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
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
    define(['expect.js', '../../../src/vendorOrders/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/vendorOrders/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForRetailProcurementOrders);
  }
}(this, function(expect, SellingPartnerApiForRetailProcurementOrders) {
  'use strict';

  var instance;

  describe('vendorOrders', function() {
    describe('OrderItemAcknowledgement', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForRetailProcurementOrders.OrderItemAcknowledgement();
      });

      it('should create an instance of OrderItemAcknowledgement', function() {
        // TODO: update the code to test OrderItemAcknowledgement
        expect(instance).to.be.a(SellingPartnerApiForRetailProcurementOrders.OrderItemAcknowledgement);
      });

      it('should have the property acknowledgementCode (base name: "acknowledgementCode")', function() {
        // TODO: update the code to test the property acknowledgementCode
        expect(instance).to.have.property('acknowledgementCode');
        // expect(instance.acknowledgementCode).to.be(expectedValueLiteral);
      });

      it('should have the property acknowledgedQuantity (base name: "acknowledgedQuantity")', function() {
        // TODO: update the code to test the property acknowledgedQuantity
        expect(instance).to.have.property('acknowledgedQuantity');
        // expect(instance.acknowledgedQuantity).to.be(expectedValueLiteral);
      });

      it('should have the property scheduledShipDate (base name: "scheduledShipDate")', function() {
        // TODO: update the code to test the property scheduledShipDate
        expect(instance).to.have.property('scheduledShipDate');
        // expect(instance.scheduledShipDate).to.be(expectedValueLiteral);
      });

      it('should have the property scheduledDeliveryDate (base name: "scheduledDeliveryDate")', function() {
        // TODO: update the code to test the property scheduledDeliveryDate
        expect(instance).to.have.property('scheduledDeliveryDate');
        // expect(instance.scheduledDeliveryDate).to.be(expectedValueLiteral);
      });

      it('should have the property rejectionReason (base name: "rejectionReason")', function() {
        // TODO: update the code to test the property rejectionReason
        expect(instance).to.have.property('rejectionReason');
        // expect(instance.rejectionReason).to.be(expectedValueLiteral);
      });

    });
  });

}));
