/*
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * OpenAPI spec version: v2
 * Contact: swa-api-core@amazon.com
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
    define(['expect.js', '../../../src/shippingV2/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/shippingV2/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AmazonShippingApi);
  }
}(this, function(expect, AmazonShippingApi) {
  'use strict';

  var instance;

  describe('shippingV2', function() {
    describe('DirectPurchaseRequest', function() {
      beforeEach(function() {
        instance = new AmazonShippingApi.DirectPurchaseRequest();
      });

      it('should create an instance of DirectPurchaseRequest', function() {
        // TODO: update the code to test DirectPurchaseRequest
        expect(instance).to.be.a(AmazonShippingApi.DirectPurchaseRequest);
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

      it('should have the property returnTo (base name: "returnTo")', function() {
        // TODO: update the code to test the property returnTo
        expect(instance).to.have.property('returnTo');
        // expect(instance.returnTo).to.be(expectedValueLiteral);
      });

      it('should have the property packages (base name: "packages")', function() {
        // TODO: update the code to test the property packages
        expect(instance).to.have.property('packages');
        // expect(instance.packages).to.be(expectedValueLiteral);
      });

      it('should have the property channelDetails (base name: "channelDetails")', function() {
        // TODO: update the code to test the property channelDetails
        expect(instance).to.have.property('channelDetails');
        // expect(instance.channelDetails).to.be(expectedValueLiteral);
      });

      it('should have the property labelSpecifications (base name: "labelSpecifications")', function() {
        // TODO: update the code to test the property labelSpecifications
        expect(instance).to.have.property('labelSpecifications');
        // expect(instance.labelSpecifications).to.be(expectedValueLiteral);
      });

    });
  });

}));
