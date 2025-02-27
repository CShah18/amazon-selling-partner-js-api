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
    describe('PurchaseOrderItems', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForRetailProcurementShipments.PurchaseOrderItems();
      });

      it('should create an instance of PurchaseOrderItems', function() {
        // TODO: update the code to test PurchaseOrderItems
        expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.PurchaseOrderItems);
      });

      it('should have the property itemSequenceNumber (base name: "itemSequenceNumber")', function() {
        // TODO: update the code to test the property itemSequenceNumber
        expect(instance).to.have.property('itemSequenceNumber');
        // expect(instance.itemSequenceNumber).to.be(expectedValueLiteral);
      });

      it('should have the property buyerProductIdentifier (base name: "buyerProductIdentifier")', function() {
        // TODO: update the code to test the property buyerProductIdentifier
        expect(instance).to.have.property('buyerProductIdentifier');
        // expect(instance.buyerProductIdentifier).to.be(expectedValueLiteral);
      });

      it('should have the property vendorProductIdentifier (base name: "vendorProductIdentifier")', function() {
        // TODO: update the code to test the property vendorProductIdentifier
        expect(instance).to.have.property('vendorProductIdentifier');
        // expect(instance.vendorProductIdentifier).to.be(expectedValueLiteral);
      });

      it('should have the property shippedQuantity (base name: "shippedQuantity")', function() {
        // TODO: update the code to test the property shippedQuantity
        expect(instance).to.have.property('shippedQuantity');
        // expect(instance.shippedQuantity).to.be(expectedValueLiteral);
      });

      it('should have the property maximumRetailPrice (base name: "maximumRetailPrice")', function() {
        // TODO: update the code to test the property maximumRetailPrice
        expect(instance).to.have.property('maximumRetailPrice');
        // expect(instance.maximumRetailPrice).to.be(expectedValueLiteral);
      });

    });
  });

}));
