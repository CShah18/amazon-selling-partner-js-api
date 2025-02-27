/*
 * The Selling Partner API for Sellers
 * The Selling Partner API for Sellers lets you retrieve information on behalf of sellers about their seller account, such as the marketplaces they participate in. Along with listing the marketplaces that a seller can sell in, the API also provides additional information about the marketplace such as the default language and the default currency. The API also provides seller-specific information such as whether the seller has suspended listings in that marketplace.
 *
 * OpenAPI spec version: v1
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
    define(['expect.js', '../../../src/sellers/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/sellers/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TheSellingPartnerApiForSellers);
  }
}(this, function(expect, TheSellingPartnerApiForSellers) {
  'use strict';

  var instance;

  describe('sellers', function() {
    describe('MarketplaceParticipation', function() {
      beforeEach(function() {
        instance = new TheSellingPartnerApiForSellers.MarketplaceParticipation();
      });

      it('should create an instance of MarketplaceParticipation', function() {
        // TODO: update the code to test MarketplaceParticipation
        expect(instance).to.be.a(TheSellingPartnerApiForSellers.MarketplaceParticipation);
      });

      it('should have the property marketplace (base name: "marketplace")', function() {
        // TODO: update the code to test the property marketplace
        expect(instance).to.have.property('marketplace');
        // expect(instance.marketplace).to.be(expectedValueLiteral);
      });

      it('should have the property participation (base name: "participation")', function() {
        // TODO: update the code to test the property participation
        expect(instance).to.have.property('participation');
        // expect(instance.participation).to.be(expectedValueLiteral);
      });

      it('should have the property storeName (base name: "storeName")', function() {
        // TODO: update the code to test the property storeName
        expect(instance).to.have.property('storeName');
        // expect(instance.storeName).to.be(expectedValueLiteral);
      });

    });
  });

}));
