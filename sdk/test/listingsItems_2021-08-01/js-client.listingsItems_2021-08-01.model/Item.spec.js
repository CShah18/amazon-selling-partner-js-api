/*
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-use-case-guide).
 *
 * OpenAPI spec version: 2021-08-01
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
    define(['expect.js', '../../../src/listingsItems_2021-08-01/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/listingsItems_2021-08-01/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForListingsItems);
  }
}(this, function(expect, SellingPartnerApiForListingsItems) {
  'use strict';

  var instance;

  describe('listingsItems_2021-08-01', function() {
    describe('Item', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForListingsItems.Item();
      });

      it('should create an instance of Item', function() {
        // TODO: update the code to test Item
        expect(instance).to.be.a(SellingPartnerApiForListingsItems.Item);
      });

      it('should have the property sku (base name: "sku")', function() {
        // TODO: update the code to test the property sku
        expect(instance).to.have.property('sku');
        // expect(instance.sku).to.be(expectedValueLiteral);
      });

      it('should have the property summaries (base name: "summaries")', function() {
        // TODO: update the code to test the property summaries
        expect(instance).to.have.property('summaries');
        // expect(instance.summaries).to.be(expectedValueLiteral);
      });

      it('should have the property attributes (base name: "attributes")', function() {
        // TODO: update the code to test the property attributes
        expect(instance).to.have.property('attributes');
        // expect(instance.attributes).to.be(expectedValueLiteral);
      });

      it('should have the property issues (base name: "issues")', function() {
        // TODO: update the code to test the property issues
        expect(instance).to.have.property('issues');
        // expect(instance.issues).to.be(expectedValueLiteral);
      });

      it('should have the property offers (base name: "offers")', function() {
        // TODO: update the code to test the property offers
        expect(instance).to.have.property('offers');
        // expect(instance.offers).to.be(expectedValueLiteral);
      });

      it('should have the property fulfillmentAvailability (base name: "fulfillmentAvailability")', function() {
        // TODO: update the code to test the property fulfillmentAvailability
        expect(instance).to.have.property('fulfillmentAvailability');
        // expect(instance.fulfillmentAvailability).to.be(expectedValueLiteral);
      });

      it('should have the property procurement (base name: "procurement")', function() {
        // TODO: update the code to test the property procurement
        expect(instance).to.have.property('procurement');
        // expect(instance.procurement).to.be(expectedValueLiteral);
      });

      it('should have the property relationships (base name: "relationships")', function() {
        // TODO: update the code to test the property relationships
        expect(instance).to.have.property('relationships');
        // expect(instance.relationships).to.be(expectedValueLiteral);
      });

      it('should have the property productTypes (base name: "productTypes")', function() {
        // TODO: update the code to test the property productTypes
        expect(instance).to.have.property('productTypes');
        // expect(instance.productTypes).to.be(expectedValueLiteral);
      });

    });
  });

}));
