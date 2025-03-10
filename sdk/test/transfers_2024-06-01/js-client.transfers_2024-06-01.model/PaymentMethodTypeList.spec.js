/*
 * The Selling Partner API for Transfers.
 * The Selling Partner API for Transfers enables selling partners to retrieve payment methods and initiate payouts for their seller accounts. This API supports the following marketplaces: DE, FR, IT, ES, SE, NL, PL, and BE.
 *
 * OpenAPI spec version: 2024-06-01
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
    define(['expect.js', '../../../src/transfers_2024-06-01/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/transfers_2024-06-01/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TheSellingPartnerApiForTransfers);
  }
}(this, function(expect, TheSellingPartnerApiForTransfers) {
  'use strict';

  var instance;

  describe('transfers_2024-06-01', function() {
    describe('PaymentMethodTypeList', function() {
      beforeEach(function() {
        instance = new TheSellingPartnerApiForTransfers.PaymentMethodTypeList();
      });

      it('should create an instance of PaymentMethodTypeList', function() {
        // TODO: update the code to test PaymentMethodTypeList
        expect(instance).to.be.a(TheSellingPartnerApiForTransfers.PaymentMethodTypeList);
      });

    });
  });

}));
