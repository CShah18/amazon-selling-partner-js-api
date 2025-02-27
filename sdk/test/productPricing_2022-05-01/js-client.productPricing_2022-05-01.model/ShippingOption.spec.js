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
    describe('ShippingOption', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForPricing.ShippingOption();
      });

      it('should create an instance of ShippingOption', function() {
        // TODO: update the code to test ShippingOption
        expect(instance).to.be.a(SellingPartnerApiForPricing.ShippingOption);
      });

      it('should have the property shippingOptionType (base name: "shippingOptionType")', function() {
        // TODO: update the code to test the property shippingOptionType
        expect(instance).to.have.property('shippingOptionType');
        // expect(instance.shippingOptionType).to.be(expectedValueLiteral);
      });

      it('should have the property price (base name: "price")', function() {
        // TODO: update the code to test the property price
        expect(instance).to.have.property('price');
        // expect(instance.price).to.be(expectedValueLiteral);
      });

    });
  });

}));
