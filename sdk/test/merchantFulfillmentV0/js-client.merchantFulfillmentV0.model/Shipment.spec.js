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
    describe('Shipment', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForMerchantFulfillment.Shipment();
      });

      it('should create an instance of Shipment', function() {
        // TODO: update the code to test Shipment
        expect(instance).to.be.a(SellingPartnerApiForMerchantFulfillment.Shipment);
      });

      it('should have the property shipmentId (base name: "ShipmentId")', function() {
        // TODO: update the code to test the property shipmentId
        expect(instance).to.have.property('shipmentId');
        // expect(instance.shipmentId).to.be(expectedValueLiteral);
      });

      it('should have the property amazonOrderId (base name: "AmazonOrderId")', function() {
        // TODO: update the code to test the property amazonOrderId
        expect(instance).to.have.property('amazonOrderId');
        // expect(instance.amazonOrderId).to.be(expectedValueLiteral);
      });

      it('should have the property sellerOrderId (base name: "SellerOrderId")', function() {
        // TODO: update the code to test the property sellerOrderId
        expect(instance).to.have.property('sellerOrderId');
        // expect(instance.sellerOrderId).to.be(expectedValueLiteral);
      });

      it('should have the property itemList (base name: "ItemList")', function() {
        // TODO: update the code to test the property itemList
        expect(instance).to.have.property('itemList');
        // expect(instance.itemList).to.be(expectedValueLiteral);
      });

      it('should have the property shipFromAddress (base name: "ShipFromAddress")', function() {
        // TODO: update the code to test the property shipFromAddress
        expect(instance).to.have.property('shipFromAddress');
        // expect(instance.shipFromAddress).to.be(expectedValueLiteral);
      });

      it('should have the property shipToAddress (base name: "ShipToAddress")', function() {
        // TODO: update the code to test the property shipToAddress
        expect(instance).to.have.property('shipToAddress');
        // expect(instance.shipToAddress).to.be(expectedValueLiteral);
      });

      it('should have the property packageDimensions (base name: "PackageDimensions")', function() {
        // TODO: update the code to test the property packageDimensions
        expect(instance).to.have.property('packageDimensions');
        // expect(instance.packageDimensions).to.be(expectedValueLiteral);
      });

      it('should have the property weight (base name: "Weight")', function() {
        // TODO: update the code to test the property weight
        expect(instance).to.have.property('weight');
        // expect(instance.weight).to.be(expectedValueLiteral);
      });

      it('should have the property insurance (base name: "Insurance")', function() {
        // TODO: update the code to test the property insurance
        expect(instance).to.have.property('insurance');
        // expect(instance.insurance).to.be(expectedValueLiteral);
      });

      it('should have the property shippingService (base name: "ShippingService")', function() {
        // TODO: update the code to test the property shippingService
        expect(instance).to.have.property('shippingService');
        // expect(instance.shippingService).to.be(expectedValueLiteral);
      });

      it('should have the property label (base name: "Label")', function() {
        // TODO: update the code to test the property label
        expect(instance).to.have.property('label');
        // expect(instance.label).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "Status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property trackingId (base name: "TrackingId")', function() {
        // TODO: update the code to test the property trackingId
        expect(instance).to.have.property('trackingId');
        // expect(instance.trackingId).to.be(expectedValueLiteral);
      });

      it('should have the property createdDate (base name: "CreatedDate")', function() {
        // TODO: update the code to test the property createdDate
        expect(instance).to.have.property('createdDate');
        // expect(instance.createdDate).to.be(expectedValueLiteral);
      });

      it('should have the property lastUpdatedDate (base name: "LastUpdatedDate")', function() {
        // TODO: update the code to test the property lastUpdatedDate
        expect(instance).to.have.property('lastUpdatedDate');
        // expect(instance.lastUpdatedDate).to.be(expectedValueLiteral);
      });

    });
  });

}));
