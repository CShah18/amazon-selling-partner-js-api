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
    describe('Business', function() {
      beforeEach(function() {
        instance = new TheSellingPartnerApiForSellers.Business();
      });

      it('should create an instance of Business', function() {
        // TODO: update the code to test Business
        expect(instance).to.be.a(TheSellingPartnerApiForSellers.Business);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property registeredBusinessAddress (base name: "registeredBusinessAddress")', function() {
        // TODO: update the code to test the property registeredBusinessAddress
        expect(instance).to.have.property('registeredBusinessAddress');
        // expect(instance.registeredBusinessAddress).to.be(expectedValueLiteral);
      });

      it('should have the property companyRegistrationNumber (base name: "companyRegistrationNumber")', function() {
        // TODO: update the code to test the property companyRegistrationNumber
        expect(instance).to.have.property('companyRegistrationNumber');
        // expect(instance.companyRegistrationNumber).to.be(expectedValueLiteral);
      });

      it('should have the property companyTaxIdentificationNumber (base name: "companyTaxIdentificationNumber")', function() {
        // TODO: update the code to test the property companyTaxIdentificationNumber
        expect(instance).to.have.property('companyTaxIdentificationNumber');
        // expect(instance.companyTaxIdentificationNumber).to.be(expectedValueLiteral);
      });

      it('should have the property nonLatinName (base name: "nonLatinName")', function() {
        // TODO: update the code to test the property nonLatinName
        expect(instance).to.have.property('nonLatinName');
        // expect(instance.nonLatinName).to.be(expectedValueLiteral);
      });

    });
  });

}));
