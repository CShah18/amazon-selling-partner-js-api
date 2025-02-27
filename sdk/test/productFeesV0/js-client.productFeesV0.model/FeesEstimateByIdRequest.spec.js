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
    describe('FeesEstimateByIdRequest', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForProductFees.FeesEstimateByIdRequest();
      });

      it('should create an instance of FeesEstimateByIdRequest', function() {
        // TODO: update the code to test FeesEstimateByIdRequest
        expect(instance).to.be.a(SellingPartnerApiForProductFees.FeesEstimateByIdRequest);
      });

      it('should have the property feesEstimateRequest (base name: "FeesEstimateRequest")', function() {
        // TODO: update the code to test the property feesEstimateRequest
        expect(instance).to.have.property('feesEstimateRequest');
        // expect(instance.feesEstimateRequest).to.be(expectedValueLiteral);
      });

      it('should have the property idType (base name: "IdType")', function() {
        // TODO: update the code to test the property idType
        expect(instance).to.have.property('idType');
        // expect(instance.idType).to.be(expectedValueLiteral);
      });

      it('should have the property idValue (base name: "IdValue")', function() {
        // TODO: update the code to test the property idValue
        expect(instance).to.have.property('idValue');
        // expect(instance.idValue).to.be(expectedValueLiteral);
      });

    });
  });

}));
