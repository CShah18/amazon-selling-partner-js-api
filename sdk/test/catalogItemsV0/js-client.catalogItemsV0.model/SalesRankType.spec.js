/*
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items helps you programmatically retrieve item details for items in the catalog.
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
    define(['expect.js', '../../../src/catalogItemsV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/catalogItemsV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForCatalogItems);
  }
}(this, function(expect, SellingPartnerApiForCatalogItems) {
  'use strict';

  var instance;

  describe('catalogItemsV0', function() {
    describe('SalesRankType', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForCatalogItems.SalesRankType();
      });

      it('should create an instance of SalesRankType', function() {
        // TODO: update the code to test SalesRankType
        expect(instance).to.be.a(SellingPartnerApiForCatalogItems.SalesRankType);
      });

      it('should have the property productCategoryId (base name: "ProductCategoryId")', function() {
        // TODO: update the code to test the property productCategoryId
        expect(instance).to.have.property('productCategoryId');
        // expect(instance.productCategoryId).to.be(expectedValueLiteral);
      });

      it('should have the property rank (base name: "Rank")', function() {
        // TODO: update the code to test the property rank
        expect(instance).to.have.property('rank');
        // expect(instance.rank).to.be(expectedValueLiteral);
      });

    });
  });

}));
