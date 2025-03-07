/*
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
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
    define(['expect.js', '../../../src/fulfillmentInbound_2024-03-20/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/fulfillmentInbound_2024-03-20/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TheSellingPartnerApiForFbaInboundOperations);
  }
}(this, function(expect, TheSellingPartnerApiForFbaInboundOperations) {
  'use strict';

  var instance;

  describe('fulfillmentInbound_2024-03-20', function() {
    describe('DeliveryWindowOption', function() {
      beforeEach(function() {
        instance = new TheSellingPartnerApiForFbaInboundOperations.DeliveryWindowOption();
      });

      it('should create an instance of DeliveryWindowOption', function() {
        // TODO: update the code to test DeliveryWindowOption
        expect(instance).to.be.a(TheSellingPartnerApiForFbaInboundOperations.DeliveryWindowOption);
      });

      it('should have the property availabilityType (base name: "availabilityType")', function() {
        // TODO: update the code to test the property availabilityType
        expect(instance).to.have.property('availabilityType');
        // expect(instance.availabilityType).to.be(expectedValueLiteral);
      });

      it('should have the property deliveryWindowOptionId (base name: "deliveryWindowOptionId")', function() {
        // TODO: update the code to test the property deliveryWindowOptionId
        expect(instance).to.have.property('deliveryWindowOptionId');
        // expect(instance.deliveryWindowOptionId).to.be(expectedValueLiteral);
      });

      it('should have the property endDate (base name: "endDate")', function() {
        // TODO: update the code to test the property endDate
        expect(instance).to.have.property('endDate');
        // expect(instance.endDate).to.be(expectedValueLiteral);
      });

      it('should have the property startDate (base name: "startDate")', function() {
        // TODO: update the code to test the property startDate
        expect(instance).to.have.property('startDate');
        // expect(instance.startDate).to.be(expectedValueLiteral);
      });

      it('should have the property validUntil (base name: "validUntil")', function() {
        // TODO: update the code to test the property validUntil
        expect(instance).to.have.property('validUntil');
        // expect(instance.validUntil).to.be(expectedValueLiteral);
      });

    });
  });

}));
