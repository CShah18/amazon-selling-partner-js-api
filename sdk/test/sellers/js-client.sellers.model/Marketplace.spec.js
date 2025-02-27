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
    describe('Marketplace', function() {
      beforeEach(function() {
        instance = new TheSellingPartnerApiForSellers.Marketplace();
      });

      it('should create an instance of Marketplace', function() {
        // TODO: update the code to test Marketplace
        expect(instance).to.be.a(TheSellingPartnerApiForSellers.Marketplace);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property countryCode (base name: "countryCode")', function() {
        // TODO: update the code to test the property countryCode
        expect(instance).to.have.property('countryCode');
        // expect(instance.countryCode).to.be(expectedValueLiteral);
      });

      it('should have the property defaultCurrencyCode (base name: "defaultCurrencyCode")', function() {
        // TODO: update the code to test the property defaultCurrencyCode
        expect(instance).to.have.property('defaultCurrencyCode');
        // expect(instance.defaultCurrencyCode).to.be(expectedValueLiteral);
      });

      it('should have the property defaultLanguageCode (base name: "defaultLanguageCode")', function() {
        // TODO: update the code to test the property defaultLanguageCode
        expect(instance).to.have.property('defaultLanguageCode');
        // expect(instance.defaultLanguageCode).to.be(expectedValueLiteral);
      });

      it('should have the property domainName (base name: "domainName")', function() {
        // TODO: update the code to test the property domainName
        expect(instance).to.have.property('domainName');
        // expect(instance.domainName).to.be(expectedValueLiteral);
      });

    });
  });

}));
