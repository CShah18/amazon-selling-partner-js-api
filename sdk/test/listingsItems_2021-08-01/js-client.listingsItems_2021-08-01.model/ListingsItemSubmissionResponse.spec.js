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
    describe('ListingsItemSubmissionResponse', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForListingsItems.ListingsItemSubmissionResponse();
      });

      it('should create an instance of ListingsItemSubmissionResponse', function() {
        // TODO: update the code to test ListingsItemSubmissionResponse
        expect(instance).to.be.a(SellingPartnerApiForListingsItems.ListingsItemSubmissionResponse);
      });

      it('should have the property sku (base name: "sku")', function() {
        // TODO: update the code to test the property sku
        expect(instance).to.have.property('sku');
        // expect(instance.sku).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property submissionId (base name: "submissionId")', function() {
        // TODO: update the code to test the property submissionId
        expect(instance).to.have.property('submissionId');
        // expect(instance.submissionId).to.be(expectedValueLiteral);
      });

      it('should have the property issues (base name: "issues")', function() {
        // TODO: update the code to test the property issues
        expect(instance).to.have.property('issues');
        // expect(instance.issues).to.be(expectedValueLiteral);
      });

      it('should have the property identifiers (base name: "identifiers")', function() {
        // TODO: update the code to test the property identifiers
        expect(instance).to.have.property('identifiers');
        // expect(instance.identifiers).to.be(expectedValueLiteral);
      });

    });
  });

}));
