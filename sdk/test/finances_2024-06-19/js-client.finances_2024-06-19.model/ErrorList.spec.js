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
    describe('ErrorList', function() {
      beforeEach(function() {
        instance = new TheSellingPartnerApiForFinances.ErrorList();
      });

      it('should create an instance of ErrorList', function() {
        // TODO: update the code to test ErrorList
        expect(instance).to.be.a(TheSellingPartnerApiForFinances.ErrorList);
      });

      it('should have the property errors (base name: "errors")', function() {
        // TODO: update the code to test the property errors
        expect(instance).to.have.property('errors');
        // expect(instance.errors).to.be(expectedValueLiteral);
      });

    });
  });

}));
