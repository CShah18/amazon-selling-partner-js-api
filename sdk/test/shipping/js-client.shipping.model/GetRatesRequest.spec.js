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
    describe('GetRatesRequest', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForShipping.GetRatesRequest();
      });

      it('should create an instance of GetRatesRequest', function() {
        // TODO: update the code to test GetRatesRequest
        expect(instance).to.be.a(SellingPartnerApiForShipping.GetRatesRequest);
      });

      it('should have the property shipTo (base name: "shipTo")', function() {
        // TODO: update the code to test the property shipTo
        expect(instance).to.have.property('shipTo');
        // expect(instance.shipTo).to.be(expectedValueLiteral);
      });

      it('should have the property shipFrom (base name: "shipFrom")', function() {
        // TODO: update the code to test the property shipFrom
        expect(instance).to.have.property('shipFrom');
        // expect(instance.shipFrom).to.be(expectedValueLiteral);
      });

      it('should have the property serviceTypes (base name: "serviceTypes")', function() {
        // TODO: update the code to test the property serviceTypes
        expect(instance).to.have.property('serviceTypes');
        // expect(instance.serviceTypes).to.be(expectedValueLiteral);
      });

      it('should have the property shipDate (base name: "shipDate")', function() {
        // TODO: update the code to test the property shipDate
        expect(instance).to.have.property('shipDate');
        // expect(instance.shipDate).to.be(expectedValueLiteral);
      });

      it('should have the property containerSpecifications (base name: "containerSpecifications")', function() {
        // TODO: update the code to test the property containerSpecifications
        expect(instance).to.have.property('containerSpecifications');
        // expect(instance.containerSpecifications).to.be(expectedValueLiteral);
      });

    });
  });

}));
