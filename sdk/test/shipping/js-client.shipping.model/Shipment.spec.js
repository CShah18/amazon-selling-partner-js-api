/*
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.   **Note:** If you are new to the Amazon Shipping API, refer to the latest version of <a href=\"https://developer-docs.amazon.com/amazon-shipping/docs/shipping-api-v2-reference\">Amazon Shipping API (v2)</a> on the <a href=\"https://developer-docs.amazon.com/amazon-shipping/\">Amazon Shipping Developer Documentation</a> site.
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
    define(['expect.js', '../../../src/shipping/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/shipping/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForShipping);
  }
}(this, function(expect, SellingPartnerApiForShipping) {
  'use strict';

  var instance;

  describe('shipping', function() {
    describe('Shipment', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForShipping.Shipment();
      });

      it('should create an instance of Shipment', function() {
        // TODO: update the code to test Shipment
        expect(instance).to.be.a(SellingPartnerApiForShipping.Shipment);
      });

      it('should have the property shipmentId (base name: "shipmentId")', function() {
        // TODO: update the code to test the property shipmentId
        expect(instance).to.have.property('shipmentId');
        // expect(instance.shipmentId).to.be(expectedValueLiteral);
      });

      it('should have the property clientReferenceId (base name: "clientReferenceId")', function() {
        // TODO: update the code to test the property clientReferenceId
        expect(instance).to.have.property('clientReferenceId');
        // expect(instance.clientReferenceId).to.be(expectedValueLiteral);
      });

      it('should have the property shipFrom (base name: "shipFrom")', function() {
        // TODO: update the code to test the property shipFrom
        expect(instance).to.have.property('shipFrom');
        // expect(instance.shipFrom).to.be(expectedValueLiteral);
      });

      it('should have the property shipTo (base name: "shipTo")', function() {
        // TODO: update the code to test the property shipTo
        expect(instance).to.have.property('shipTo');
        // expect(instance.shipTo).to.be(expectedValueLiteral);
      });

      it('should have the property acceptedRate (base name: "acceptedRate")', function() {
        // TODO: update the code to test the property acceptedRate
        expect(instance).to.have.property('acceptedRate');
        // expect(instance.acceptedRate).to.be(expectedValueLiteral);
      });

      it('should have the property shipper (base name: "shipper")', function() {
        // TODO: update the code to test the property shipper
        expect(instance).to.have.property('shipper');
        // expect(instance.shipper).to.be(expectedValueLiteral);
      });

      it('should have the property containers (base name: "containers")', function() {
        // TODO: update the code to test the property containers
        expect(instance).to.have.property('containers');
        // expect(instance.containers).to.be(expectedValueLiteral);
      });

    });
  });

}));
