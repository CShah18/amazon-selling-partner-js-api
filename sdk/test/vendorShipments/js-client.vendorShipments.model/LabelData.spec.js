/*
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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
    define(['expect.js', '../../../src/vendorShipments/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/vendorShipments/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForRetailProcurementShipments);
  }
}(this, function(expect, SellingPartnerApiForRetailProcurementShipments) {
  'use strict';

  var instance;

  describe('vendorShipments', function() {
    describe('LabelData', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForRetailProcurementShipments.LabelData();
      });

      it('should create an instance of LabelData', function() {
        // TODO: update the code to test LabelData
        expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.LabelData);
      });

      it('should have the property labelSequenceNumber (base name: "labelSequenceNumber")', function() {
        // TODO: update the code to test the property labelSequenceNumber
        expect(instance).to.have.property('labelSequenceNumber');
        // expect(instance.labelSequenceNumber).to.be(expectedValueLiteral);
      });

      it('should have the property labelFormat (base name: "labelFormat")', function() {
        // TODO: update the code to test the property labelFormat
        expect(instance).to.have.property('labelFormat');
        // expect(instance.labelFormat).to.be(expectedValueLiteral);
      });

      it('should have the property carrierCode (base name: "carrierCode")', function() {
        // TODO: update the code to test the property carrierCode
        expect(instance).to.have.property('carrierCode');
        // expect(instance.carrierCode).to.be(expectedValueLiteral);
      });

      it('should have the property trackingId (base name: "trackingId")', function() {
        // TODO: update the code to test the property trackingId
        expect(instance).to.have.property('trackingId');
        // expect(instance.trackingId).to.be(expectedValueLiteral);
      });

      it('should have the property label (base name: "label")', function() {
        // TODO: update the code to test the property label
        expect(instance).to.have.property('label');
        // expect(instance.label).to.be(expectedValueLiteral);
      });

    });
  });

}));
