/*
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
    define(['expect.js', '../../../src/fulfillmentInboundV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/fulfillmentInboundV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForFulfillmentInbound);
  }
}(this, function(expect, SellingPartnerApiForFulfillmentInbound) {
  'use strict';

  var instance;

  describe('fulfillmentInboundV0', function() {
    describe('ShipmentStatus', function() {
      beforeEach(function() {
        instance = SellingPartnerApiForFulfillmentInbound.ShipmentStatus;
      });

      it('should create an instance of ShipmentStatus', function() {
        // TODO: update the code to test ShipmentStatus
        expect(instance).to.be.a('object');
      });

      it('should have the property WORKING', function() {
        expect(instance).to.have.property('WORKING');
        expect(instance.WORKING).to.be("WORKING");
      });

      it('should have the property SHIPPED', function() {
        expect(instance).to.have.property('SHIPPED');
        expect(instance.SHIPPED).to.be("SHIPPED");
      });

      it('should have the property RECEIVING', function() {
        expect(instance).to.have.property('RECEIVING');
        expect(instance.RECEIVING).to.be("RECEIVING");
      });

      it('should have the property CANCELLED', function() {
        expect(instance).to.have.property('CANCELLED');
        expect(instance.CANCELLED).to.be("CANCELLED");
      });

      it('should have the property DELETED', function() {
        expect(instance).to.have.property('DELETED');
        expect(instance.DELETED).to.be("DELETED");
      });

      it('should have the property CLOSED', function() {
        expect(instance).to.have.property('CLOSED');
        expect(instance.CLOSED).to.be("CLOSED");
      });

      it('should have the property ERROR', function() {
        expect(instance).to.have.property('ERROR');
        expect(instance.ERROR).to.be("ERROR");
      });

      it('should have the property IN_TRANSIT', function() {
        expect(instance).to.have.property('IN_TRANSIT');
        expect(instance.IN_TRANSIT).to.be("IN_TRANSIT");
      });

      it('should have the property DELIVERED', function() {
        expect(instance).to.have.property('DELIVERED');
        expect(instance.DELIVERED).to.be("DELIVERED");
      });

      it('should have the property CHECKED_IN', function() {
        expect(instance).to.have.property('CHECKED_IN');
        expect(instance.CHECKED_IN).to.be("CHECKED_IN");
      });

    });
  });

}));
