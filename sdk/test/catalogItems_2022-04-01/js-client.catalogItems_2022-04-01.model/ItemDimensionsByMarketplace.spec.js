/*
 * Catalog Items v2022-04-01
 * The Selling Partner API for Catalog Items provides programmatic access to information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](doc:catalog-items-api-v2022-04-01-use-case-guide).
 *
 * OpenAPI spec version: 2022-04-01
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
    define(['expect.js', '../../../src/catalogItems_2022-04-01/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/catalogItems_2022-04-01/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CatalogItemsV20220401);
  }
}(this, function(expect, CatalogItemsV20220401) {
  'use strict';

  var instance;

  describe('catalogItems_2022-04-01', function() {
    describe('ItemDimensionsByMarketplace', function() {
      beforeEach(function() {
        instance = new CatalogItemsV20220401.ItemDimensionsByMarketplace();
      });

      it('should create an instance of ItemDimensionsByMarketplace', function() {
        // TODO: update the code to test ItemDimensionsByMarketplace
        expect(instance).to.be.a(CatalogItemsV20220401.ItemDimensionsByMarketplace);
      });

      it('should have the property marketplaceId (base name: "marketplaceId")', function() {
        // TODO: update the code to test the property marketplaceId
        expect(instance).to.have.property('marketplaceId');
        // expect(instance.marketplaceId).to.be(expectedValueLiteral);
      });

      it('should have the property item (base name: "item")', function() {
        // TODO: update the code to test the property item
        expect(instance).to.have.property('item');
        // expect(instance.item).to.be(expectedValueLiteral);
      });

      it('should have the property _package (base name: "package")', function() {
        // TODO: update the code to test the property _package
        expect(instance).to.have.property('_package');
        // expect(instance._package).to.be(expectedValueLiteral);
      });

    });
  });

}));
