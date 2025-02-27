/*
 * Vendor Invoices v1
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
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
    define(['expect.js', '../../../src/vendorInvoices/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/vendorInvoices/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.VendorInvoicesV1);
  }
}(this, function(expect, VendorInvoicesV1) {
  'use strict';

  var instance;

  describe('vendorInvoices', function() {
    describe('SubmitInvoicesRequest', function() {
      beforeEach(function() {
        instance = new VendorInvoicesV1.SubmitInvoicesRequest();
      });

      it('should create an instance of SubmitInvoicesRequest', function() {
        // TODO: update the code to test SubmitInvoicesRequest
        expect(instance).to.be.a(VendorInvoicesV1.SubmitInvoicesRequest);
      });

      it('should have the property invoices (base name: "invoices")', function() {
        // TODO: update the code to test the property invoices
        expect(instance).to.have.property('invoices');
        // expect(instance.invoices).to.be(expectedValueLiteral);
      });

    });
  });

}));
