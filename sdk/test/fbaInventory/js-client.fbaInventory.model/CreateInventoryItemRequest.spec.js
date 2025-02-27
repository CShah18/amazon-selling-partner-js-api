/*
 * Selling Partner API for FBA Inventory
 * The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon's fulfillment network.
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
    define(['expect.js', '../../../src/fbaInventory/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/fbaInventory/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForFbaInventory);
  }
}(this, function(expect, SellingPartnerApiForFbaInventory) {
  'use strict';

  var instance;

  describe('fbaInventory', function() {
    describe('CreateInventoryItemRequest', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForFbaInventory.CreateInventoryItemRequest();
      });

      it('should create an instance of CreateInventoryItemRequest', function() {
        // TODO: update the code to test CreateInventoryItemRequest
        expect(instance).to.be.a(SellingPartnerApiForFbaInventory.CreateInventoryItemRequest);
      });

      it('should have the property sellerSku (base name: "sellerSku")', function() {
        // TODO: update the code to test the property sellerSku
        expect(instance).to.have.property('sellerSku');
        // expect(instance.sellerSku).to.be(expectedValueLiteral);
      });

      it('should have the property marketplaceId (base name: "marketplaceId")', function() {
        // TODO: update the code to test the property marketplaceId
        expect(instance).to.have.property('marketplaceId');
        // expect(instance.marketplaceId).to.be(expectedValueLiteral);
      });

      it('should have the property productName (base name: "productName")', function() {
        // TODO: update the code to test the property productName
        expect(instance).to.have.property('productName');
        // expect(instance.productName).to.be(expectedValueLiteral);
      });

    });
  });

}));
