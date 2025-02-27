/*
 * Selling Partner API for Direct Fulfillment Transaction Status
 * The Selling Partner API for Direct Fulfillment Transaction Status provides programmatic access to a direct fulfillment vendor's transaction status.
 *
 * OpenAPI spec version: 2021-12-28
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
    define(['expect.js', '../../../src/vendorDirectFulfillmentTransactions_2021-12-28/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/vendorDirectFulfillmentTransactions_2021-12-28/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForDirectFulfillmentTransactionStatus);
  }
}(this, function(expect, SellingPartnerApiForDirectFulfillmentTransactionStatus) {
  'use strict';

  var instance;

  describe('vendorDirectFulfillmentTransactions_2021-12-28', function() {
    describe('TransactionStatus', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForDirectFulfillmentTransactionStatus.TransactionStatus();
      });

      it('should create an instance of TransactionStatus', function() {
        // TODO: update the code to test TransactionStatus
        expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentTransactionStatus.TransactionStatus);
      });

      it('should have the property transactionStatus (base name: "transactionStatus")', function() {
        // TODO: update the code to test the property transactionStatus
        expect(instance).to.have.property('transactionStatus');
        // expect(instance.transactionStatus).to.be(expectedValueLiteral);
      });

    });
  });

}));
