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
    describe('ItemContributorRole', function() {
      beforeEach(function() {
        instance = new CatalogItemsV20220401.ItemContributorRole();
      });

      it('should create an instance of ItemContributorRole', function() {
        // TODO: update the code to test ItemContributorRole
        expect(instance).to.be.a(CatalogItemsV20220401.ItemContributorRole);
      });

      it('should have the property displayName (base name: "displayName")', function() {
        // TODO: update the code to test the property displayName
        expect(instance).to.have.property('displayName');
        // expect(instance.displayName).to.be(expectedValueLiteral);
      });

      it('should have the property value (base name: "value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

    });
  });

}));
