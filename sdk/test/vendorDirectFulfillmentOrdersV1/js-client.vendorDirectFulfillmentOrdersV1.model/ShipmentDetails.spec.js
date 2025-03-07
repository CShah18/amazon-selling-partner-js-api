/*
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
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
    define(['expect.js', '../../../src/vendorDirectFulfillmentOrdersV1/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/vendorDirectFulfillmentOrdersV1/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForDirectFulfillmentOrders);
  }
}(this, function(expect, SellingPartnerApiForDirectFulfillmentOrders) {
  'use strict';

  var instance;

  describe('vendorDirectFulfillmentOrdersV1', function() {
    describe('ShipmentDetails', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForDirectFulfillmentOrders.ShipmentDetails();
      });

      it('should create an instance of ShipmentDetails', function() {
        // TODO: update the code to test ShipmentDetails
        expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentOrders.ShipmentDetails);
      });

      it('should have the property isPriorityShipment (base name: "isPriorityShipment")', function() {
        // TODO: update the code to test the property isPriorityShipment
        expect(instance).to.have.property('isPriorityShipment');
        // expect(instance.isPriorityShipment).to.be(expectedValueLiteral);
      });

      it('should have the property isScheduledDeliveryShipment (base name: "isScheduledDeliveryShipment")', function() {
        // TODO: update the code to test the property isScheduledDeliveryShipment
        expect(instance).to.have.property('isScheduledDeliveryShipment');
        // expect(instance.isScheduledDeliveryShipment).to.be(expectedValueLiteral);
      });

      it('should have the property isPslipRequired (base name: "isPslipRequired")', function() {
        // TODO: update the code to test the property isPslipRequired
        expect(instance).to.have.property('isPslipRequired');
        // expect(instance.isPslipRequired).to.be(expectedValueLiteral);
      });

      it('should have the property isGift (base name: "isGift")', function() {
        // TODO: update the code to test the property isGift
        expect(instance).to.have.property('isGift');
        // expect(instance.isGift).to.be(expectedValueLiteral);
      });

      it('should have the property shipMethod (base name: "shipMethod")', function() {
        // TODO: update the code to test the property shipMethod
        expect(instance).to.have.property('shipMethod');
        // expect(instance.shipMethod).to.be(expectedValueLiteral);
      });

      it('should have the property shipmentDates (base name: "shipmentDates")', function() {
        // TODO: update the code to test the property shipmentDates
        expect(instance).to.have.property('shipmentDates');
        // expect(instance.shipmentDates).to.be(expectedValueLiteral);
      });

      it('should have the property messageToCustomer (base name: "messageToCustomer")', function() {
        // TODO: update the code to test the property messageToCustomer
        expect(instance).to.have.property('messageToCustomer');
        // expect(instance.messageToCustomer).to.be(expectedValueLiteral);
      });

    });
  });

}));
