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
    describe('ListingsItemPutRequest', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForListingsItems.ListingsItemPutRequest();
      });

      it('should create an instance of ListingsItemPutRequest', function() {
        // TODO: update the code to test ListingsItemPutRequest
        expect(instance).to.be.a(SellingPartnerApiForListingsItems.ListingsItemPutRequest);
      });

      it('should have the property productType (base name: "productType")', function() {
        // TODO: update the code to test the property productType
        expect(instance).to.have.property('productType');
        // expect(instance.productType).to.be(expectedValueLiteral);
      });

      it('should have the property requirements (base name: "requirements")', function() {
        // TODO: update the code to test the property requirements
        expect(instance).to.have.property('requirements');
        // expect(instance.requirements).to.be(expectedValueLiteral);
      });

      it('should have the property attributes (base name: "attributes")', function() {
        // TODO: update the code to test the property attributes
        expect(instance).to.have.property('attributes');
        // expect(instance.attributes).to.be(expectedValueLiteral);
      });

    });
  });

}));
