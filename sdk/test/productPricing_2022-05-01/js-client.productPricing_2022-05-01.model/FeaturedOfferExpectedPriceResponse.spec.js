/*
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * OpenAPI spec version: 2022-05-01
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
    define(['expect.js', '../../../src/productPricing_2022-05-01/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/productPricing_2022-05-01/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForPricing);
  }
}(this, function(expect, SellingPartnerApiForPricing) {
  'use strict';

  var instance;

  describe('productPricing_2022-05-01', function() {
    describe('FeaturedOfferExpectedPriceResponse', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForPricing.FeaturedOfferExpectedPriceResponse();
      });

      it('should create an instance of FeaturedOfferExpectedPriceResponse', function() {
        // TODO: update the code to test FeaturedOfferExpectedPriceResponse
        expect(instance).to.be.a(SellingPartnerApiForPricing.FeaturedOfferExpectedPriceResponse);
      });

      it('should have the property request (base name: "request")', function() {
        // TODO: update the code to test the property request
        expect(instance).to.have.property('request');
        // expect(instance.request).to.be(expectedValueLiteral);
      });

      it('should have the property body (base name: "body")', function() {
        // TODO: update the code to test the property body
        expect(instance).to.have.property('body');
        // expect(instance.body).to.be(expectedValueLiteral);
      });

    });
  });

}));
