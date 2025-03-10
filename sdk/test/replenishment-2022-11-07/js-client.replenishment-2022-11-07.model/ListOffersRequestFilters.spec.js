/*
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * OpenAPI spec version: 2022-11-07
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
    define(['expect.js', '../../../src/replenishment-2022-11-07/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/replenishment-2022-11-07/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForReplenishment);
  }
}(this, function(expect, SellingPartnerApiForReplenishment) {
  'use strict';

  var instance;

  describe('replenishment-2022-11-07', function() {
    describe('ListOffersRequestFilters', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForReplenishment.ListOffersRequestFilters();
      });

      it('should create an instance of ListOffersRequestFilters', function() {
        // TODO: update the code to test ListOffersRequestFilters
        expect(instance).to.be.a(SellingPartnerApiForReplenishment.ListOffersRequestFilters);
      });

      it('should have the property marketplaceId (base name: "marketplaceId")', function() {
        // TODO: update the code to test the property marketplaceId
        expect(instance).to.have.property('marketplaceId');
        // expect(instance.marketplaceId).to.be(expectedValueLiteral);
      });

      it('should have the property skus (base name: "skus")', function() {
        // TODO: update the code to test the property skus
        expect(instance).to.have.property('skus');
        // expect(instance.skus).to.be(expectedValueLiteral);
      });

      it('should have the property asins (base name: "asins")', function() {
        // TODO: update the code to test the property asins
        expect(instance).to.have.property('asins');
        // expect(instance.asins).to.be(expectedValueLiteral);
      });

      it('should have the property eligibilities (base name: "eligibilities")', function() {
        // TODO: update the code to test the property eligibilities
        expect(instance).to.have.property('eligibilities');
        // expect(instance.eligibilities).to.be(expectedValueLiteral);
      });

      it('should have the property preferences (base name: "preferences")', function() {
        // TODO: update the code to test the property preferences
        expect(instance).to.have.property('preferences');
        // expect(instance.preferences).to.be(expectedValueLiteral);
      });

      it('should have the property promotions (base name: "promotions")', function() {
        // TODO: update the code to test the property promotions
        expect(instance).to.have.property('promotions');
        // expect(instance.promotions).to.be(expectedValueLiteral);
      });

      it('should have the property programTypes (base name: "programTypes")', function() {
        // TODO: update the code to test the property programTypes
        expect(instance).to.have.property('programTypes');
        // expect(instance.programTypes).to.be(expectedValueLiteral);
      });

    });
  });

}));
