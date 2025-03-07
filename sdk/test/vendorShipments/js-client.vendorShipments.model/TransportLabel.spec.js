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
    describe('TransportLabel', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForRetailProcurementShipments.TransportLabel();
      });

      it('should create an instance of TransportLabel', function() {
        // TODO: update the code to test TransportLabel
        expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.TransportLabel);
      });

      it('should have the property labelCreateDateTime (base name: "labelCreateDateTime")', function() {
        // TODO: update the code to test the property labelCreateDateTime
        expect(instance).to.have.property('labelCreateDateTime');
        // expect(instance.labelCreateDateTime).to.be(expectedValueLiteral);
      });

      it('should have the property shipmentInformation (base name: "shipmentInformation")', function() {
        // TODO: update the code to test the property shipmentInformation
        expect(instance).to.have.property('shipmentInformation');
        // expect(instance.shipmentInformation).to.be(expectedValueLiteral);
      });

      it('should have the property labelData (base name: "labelData")', function() {
        // TODO: update the code to test the property labelData
        expect(instance).to.have.property('labelData');
        // expect(instance.labelData).to.be(expectedValueLiteral);
      });

    });
  });

}));
