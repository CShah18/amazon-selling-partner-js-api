/*
 * The Selling Partner API for Finances
 * The Selling Partner API for Finances provides financial information relevant to a seller's business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
 *
 * OpenAPI spec version: 2024-06-19
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
    define(['expect.js', '../../../src/finances_2024-06-19/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/finances_2024-06-19/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TheSellingPartnerApiForFinances);
  }
}(this, function(expect, TheSellingPartnerApiForFinances) {
  'use strict';

  var instance;

  describe('finances_2024-06-19', function() {
    describe('ItemRelatedIdentifier', function() {
      beforeEach(function() {
        instance = new TheSellingPartnerApiForFinances.ItemRelatedIdentifier();
      });

      it('should create an instance of ItemRelatedIdentifier', function() {
        // TODO: update the code to test ItemRelatedIdentifier
        expect(instance).to.be.a(TheSellingPartnerApiForFinances.ItemRelatedIdentifier);
      });

      it('should have the property itemRelatedIdentifierName (base name: "itemRelatedIdentifierName")', function() {
        // TODO: update the code to test the property itemRelatedIdentifierName
        expect(instance).to.have.property('itemRelatedIdentifierName');
        // expect(instance.itemRelatedIdentifierName).to.be(expectedValueLiteral);
      });

      it('should have the property itemRelatedIdentifierValue (base name: "itemRelatedIdentifierValue")', function() {
        // TODO: update the code to test the property itemRelatedIdentifierValue
        expect(instance).to.have.property('itemRelatedIdentifierValue');
        // expect(instance.itemRelatedIdentifierValue).to.be(expectedValueLiteral);
      });

    });
  });

}));
