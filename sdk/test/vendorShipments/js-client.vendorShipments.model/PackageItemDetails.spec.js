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
    describe('PackageItemDetails', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForRetailProcurementShipments.PackageItemDetails();
      });

      it('should create an instance of PackageItemDetails', function() {
        // TODO: update the code to test PackageItemDetails
        expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.PackageItemDetails);
      });

      it('should have the property purchaseOrderNumber (base name: "purchaseOrderNumber")', function() {
        // TODO: update the code to test the property purchaseOrderNumber
        expect(instance).to.have.property('purchaseOrderNumber');
        // expect(instance.purchaseOrderNumber).to.be(expectedValueLiteral);
      });

      it('should have the property lotNumber (base name: "lotNumber")', function() {
        // TODO: update the code to test the property lotNumber
        expect(instance).to.have.property('lotNumber');
        // expect(instance.lotNumber).to.be(expectedValueLiteral);
      });

      it('should have the property expiry (base name: "expiry")', function() {
        // TODO: update the code to test the property expiry
        expect(instance).to.have.property('expiry');
        // expect(instance.expiry).to.be(expectedValueLiteral);
      });

    });
  });

}));
