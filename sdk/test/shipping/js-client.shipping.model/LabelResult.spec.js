/*
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.   **Note:** If you are new to the Amazon Shipping API, refer to the latest version of <a href=\"https://developer-docs.amazon.com/amazon-shipping/docs/shipping-api-v2-reference\">Amazon Shipping API (v2)</a> on the <a href=\"https://developer-docs.amazon.com/amazon-shipping/\">Amazon Shipping Developer Documentation</a> site.
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
    define(['expect.js', '../../../src/shipping/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/shipping/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForShipping);
  }
}(this, function(expect, SellingPartnerApiForShipping) {
  'use strict';

  var instance;

  describe('shipping', function() {
    describe('LabelResult', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForShipping.LabelResult();
      });

      it('should create an instance of LabelResult', function() {
        // TODO: update the code to test LabelResult
        expect(instance).to.be.a(SellingPartnerApiForShipping.LabelResult);
      });

      it('should have the property containerReferenceId (base name: "containerReferenceId")', function() {
        // TODO: update the code to test the property containerReferenceId
        expect(instance).to.have.property('containerReferenceId');
        // expect(instance.containerReferenceId).to.be(expectedValueLiteral);
      });

      it('should have the property trackingId (base name: "trackingId")', function() {
        // TODO: update the code to test the property trackingId
        expect(instance).to.have.property('trackingId');
        // expect(instance.trackingId).to.be(expectedValueLiteral);
      });

      it('should have the property label (base name: "label")', function() {
        // TODO: update the code to test the property label
        expect(instance).to.have.property('label');
        // expect(instance.label).to.be(expectedValueLiteral);
      });

    });
  });

}));
