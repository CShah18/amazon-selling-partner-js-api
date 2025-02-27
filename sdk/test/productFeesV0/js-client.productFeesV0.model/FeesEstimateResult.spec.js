/*
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
 *
 * OpenAPI spec version: v0
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
    define(['expect.js', '../../../src/productFeesV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/productFeesV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForProductFees);
  }
}(this, function(expect, SellingPartnerApiForProductFees) {
  'use strict';

  var instance;

  describe('productFeesV0', function() {
    describe('FeesEstimateResult', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForProductFees.FeesEstimateResult();
      });

      it('should create an instance of FeesEstimateResult', function() {
        // TODO: update the code to test FeesEstimateResult
        expect(instance).to.be.a(SellingPartnerApiForProductFees.FeesEstimateResult);
      });

      it('should have the property status (base name: "Status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property feesEstimateIdentifier (base name: "FeesEstimateIdentifier")', function() {
        // TODO: update the code to test the property feesEstimateIdentifier
        expect(instance).to.have.property('feesEstimateIdentifier');
        // expect(instance.feesEstimateIdentifier).to.be(expectedValueLiteral);
      });

      it('should have the property feesEstimate (base name: "FeesEstimate")', function() {
        // TODO: update the code to test the property feesEstimate
        expect(instance).to.have.property('feesEstimate');
        // expect(instance.feesEstimate).to.be(expectedValueLiteral);
      });

      it('should have the property error (base name: "Error")', function() {
        // TODO: update the code to test the property error
        expect(instance).to.have.property('error');
        // expect(instance.error).to.be(expectedValueLiteral);
      });

    });
  });

}));
