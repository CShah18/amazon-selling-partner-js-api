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
    describe('GetCollectionFormHistoryRequest', function() {
      beforeEach(function() {
        instance = new AmazonShippingApi.GetCollectionFormHistoryRequest();
      });

      it('should create an instance of GetCollectionFormHistoryRequest', function() {
        // TODO: update the code to test GetCollectionFormHistoryRequest
        expect(instance).to.be.a(AmazonShippingApi.GetCollectionFormHistoryRequest);
      });

      it('should have the property clientReferenceDetails (base name: "clientReferenceDetails")', function() {
        // TODO: update the code to test the property clientReferenceDetails
        expect(instance).to.have.property('clientReferenceDetails');
        // expect(instance.clientReferenceDetails).to.be(expectedValueLiteral);
      });

      it('should have the property maxResults (base name: "maxResults")', function() {
        // TODO: update the code to test the property maxResults
        expect(instance).to.have.property('maxResults');
        // expect(instance.maxResults).to.be(expectedValueLiteral);
      });

      it('should have the property carrierId (base name: "carrierId")', function() {
        // TODO: update the code to test the property carrierId
        expect(instance).to.have.property('carrierId');
        // expect(instance.carrierId).to.be(expectedValueLiteral);
      });

      it('should have the property shipFromAddress (base name: "shipFromAddress")', function() {
        // TODO: update the code to test the property shipFromAddress
        expect(instance).to.have.property('shipFromAddress');
        // expect(instance.shipFromAddress).to.be(expectedValueLiteral);
      });

      it('should have the property dateRange (base name: "dateRange")', function() {
        // TODO: update the code to test the property dateRange
        expect(instance).to.have.property('dateRange');
        // expect(instance.dateRange).to.be(expectedValueLiteral);
      });

    });
  });

}));
