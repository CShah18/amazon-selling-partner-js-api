/*
 * Selling Partner API for Product Type Definitions
 * The Selling Partner API for Product Type Definitions provides programmatic access to attribute and data requirements for product types in the Amazon catalog. Use this API to return the JSON Schema for a product type that you can then use with other Selling Partner APIs, such as the Selling Partner API for Listings Items, the Selling Partner API for Catalog Items, and the Selling Partner API for Feeds (for JSON-based listing feeds).  For more information, see the [Product Type Definitions API Use Case Guide](doc:product-type-api-use-case-guide).
 *
 * OpenAPI spec version: 2020-09-01
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
    define(['expect.js', '../../../src/definitionsProductTypes_2020-09-01/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/definitionsProductTypes_2020-09-01/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForProductTypeDefinitions);
  }
}(this, function(expect, SellingPartnerApiForProductTypeDefinitions) {
  'use strict';

  var instance;

  describe('definitionsProductTypes_2020-09-01', function() {
    describe('ProductTypeDefinition', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForProductTypeDefinitions.ProductTypeDefinition();
      });

      it('should create an instance of ProductTypeDefinition', function() {
        // TODO: update the code to test ProductTypeDefinition
        expect(instance).to.be.a(SellingPartnerApiForProductTypeDefinitions.ProductTypeDefinition);
      });

      it('should have the property metaSchema (base name: "metaSchema")', function() {
        // TODO: update the code to test the property metaSchema
        expect(instance).to.have.property('metaSchema');
        // expect(instance.metaSchema).to.be(expectedValueLiteral);
      });

      it('should have the property schema (base name: "schema")', function() {
        // TODO: update the code to test the property schema
        expect(instance).to.have.property('schema');
        // expect(instance.schema).to.be(expectedValueLiteral);
      });

      it('should have the property requirements (base name: "requirements")', function() {
        // TODO: update the code to test the property requirements
        expect(instance).to.have.property('requirements');
        // expect(instance.requirements).to.be(expectedValueLiteral);
      });

      it('should have the property requirementsEnforced (base name: "requirementsEnforced")', function() {
        // TODO: update the code to test the property requirementsEnforced
        expect(instance).to.have.property('requirementsEnforced');
        // expect(instance.requirementsEnforced).to.be(expectedValueLiteral);
      });

      it('should have the property propertyGroups (base name: "propertyGroups")', function() {
        // TODO: update the code to test the property propertyGroups
        expect(instance).to.have.property('propertyGroups');
        // expect(instance.propertyGroups).to.be(expectedValueLiteral);
      });

      it('should have the property locale (base name: "locale")', function() {
        // TODO: update the code to test the property locale
        expect(instance).to.have.property('locale');
        // expect(instance.locale).to.be(expectedValueLiteral);
      });

      it('should have the property marketplaceIds (base name: "marketplaceIds")', function() {
        // TODO: update the code to test the property marketplaceIds
        expect(instance).to.have.property('marketplaceIds');
        // expect(instance.marketplaceIds).to.be(expectedValueLiteral);
      });

      it('should have the property productType (base name: "productType")', function() {
        // TODO: update the code to test the property productType
        expect(instance).to.have.property('productType');
        // expect(instance.productType).to.be(expectedValueLiteral);
      });

      it('should have the property displayName (base name: "displayName")', function() {
        // TODO: update the code to test the property displayName
        expect(instance).to.have.property('displayName');
        // expect(instance.displayName).to.be(expectedValueLiteral);
      });

      it('should have the property productTypeVersion (base name: "productTypeVersion")', function() {
        // TODO: update the code to test the property productTypeVersion
        expect(instance).to.have.property('productTypeVersion');
        // expect(instance.productTypeVersion).to.be(expectedValueLiteral);
      });

    });
  });

}));
