/*
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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
    define(['expect.js', '../../../src/productPricingV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/productPricingV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForPricing);
  }
}(this, function(expect, SellingPartnerApiForPricing) {
  'use strict';

  var instance;

  describe('productPricingV0', function() {
    describe('Product', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForPricing.Product();
      });

      it('should create an instance of Product', function() {
        // TODO: update the code to test Product
        expect(instance).to.be.a(SellingPartnerApiForPricing.Product);
      });

      it('should have the property identifiers (base name: "Identifiers")', function() {
        // TODO: update the code to test the property identifiers
        expect(instance).to.have.property('identifiers');
        // expect(instance.identifiers).to.be(expectedValueLiteral);
      });

      it('should have the property attributeSets (base name: "AttributeSets")', function() {
        // TODO: update the code to test the property attributeSets
        expect(instance).to.have.property('attributeSets');
        // expect(instance.attributeSets).to.be(expectedValueLiteral);
      });

      it('should have the property relationships (base name: "Relationships")', function() {
        // TODO: update the code to test the property relationships
        expect(instance).to.have.property('relationships');
        // expect(instance.relationships).to.be(expectedValueLiteral);
      });

      it('should have the property competitivePricing (base name: "CompetitivePricing")', function() {
        // TODO: update the code to test the property competitivePricing
        expect(instance).to.have.property('competitivePricing');
        // expect(instance.competitivePricing).to.be(expectedValueLiteral);
      });

      it('should have the property salesRankings (base name: "SalesRankings")', function() {
        // TODO: update the code to test the property salesRankings
        expect(instance).to.have.property('salesRankings');
        // expect(instance.salesRankings).to.be(expectedValueLiteral);
      });

      it('should have the property offers (base name: "Offers")', function() {
        // TODO: update the code to test the property offers
        expect(instance).to.have.property('offers');
        // expect(instance.offers).to.be(expectedValueLiteral);
      });

    });
  });

}));
