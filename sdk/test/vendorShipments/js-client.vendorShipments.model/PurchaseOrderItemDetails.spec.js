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
    describe('PurchaseOrderItemDetails', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForRetailProcurementShipments.PurchaseOrderItemDetails();
      });

      it('should create an instance of PurchaseOrderItemDetails', function() {
        // TODO: update the code to test PurchaseOrderItemDetails
        expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.PurchaseOrderItemDetails);
      });

      it('should have the property maximumRetailPrice (base name: "maximumRetailPrice")', function() {
        // TODO: update the code to test the property maximumRetailPrice
        expect(instance).to.have.property('maximumRetailPrice');
        // expect(instance.maximumRetailPrice).to.be(expectedValueLiteral);
      });

    });
  });

}));
