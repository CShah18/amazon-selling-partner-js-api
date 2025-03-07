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
    describe('DirectFulfillmentItemIdentifiers', function() {
      beforeEach(function() {
        instance = new AmazonShippingApi.DirectFulfillmentItemIdentifiers();
      });

      it('should create an instance of DirectFulfillmentItemIdentifiers', function() {
        // TODO: update the code to test DirectFulfillmentItemIdentifiers
        expect(instance).to.be.a(AmazonShippingApi.DirectFulfillmentItemIdentifiers);
      });

      it('should have the property lineItemID (base name: "lineItemID")', function() {
        // TODO: update the code to test the property lineItemID
        expect(instance).to.have.property('lineItemID');
        // expect(instance.lineItemID).to.be(expectedValueLiteral);
      });

      it('should have the property pieceNumber (base name: "pieceNumber")', function() {
        // TODO: update the code to test the property pieceNumber
        expect(instance).to.have.property('pieceNumber');
        // expect(instance.pieceNumber).to.be(expectedValueLiteral);
      });

    });
  });

}));
