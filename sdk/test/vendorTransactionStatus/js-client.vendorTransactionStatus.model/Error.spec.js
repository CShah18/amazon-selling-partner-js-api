/*
 * Selling Partner API for Retail Procurement Transaction Status
 * The Selling Partner API for Retail Procurement Transaction Status provides programmatic access to status information on specific asynchronous POST transactions for vendors.
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
    define(['expect.js', '../../../src/vendorTransactionStatus/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/vendorTransactionStatus/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForRetailProcurementTransactionStatus);
  }
}(this, function(expect, SellingPartnerApiForRetailProcurementTransactionStatus) {
  'use strict';

  var instance;

  describe('vendorTransactionStatus', function() {
    describe('Error', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForRetailProcurementTransactionStatus.Error();
      });

      it('should create an instance of Error', function() {
        // TODO: update the code to test Error
        expect(instance).to.be.a(SellingPartnerApiForRetailProcurementTransactionStatus.Error);
      });

      it('should have the property code (base name: "code")', function() {
        // TODO: update the code to test the property code
        expect(instance).to.have.property('code');
        // expect(instance.code).to.be(expectedValueLiteral);
      });

      it('should have the property message (base name: "message")', function() {
        // TODO: update the code to test the property message
        expect(instance).to.have.property('message');
        // expect(instance.message).to.be(expectedValueLiteral);
      });

      it('should have the property details (base name: "details")', function() {
        // TODO: update the code to test the property details
        expect(instance).to.have.property('details');
        // expect(instance.details).to.be(expectedValueLiteral);
      });

    });
  });

}));
