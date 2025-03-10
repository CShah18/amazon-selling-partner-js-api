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
    describe('Item', function() {
      beforeEach(function() {
        instance = new AmazonShippingApi.Item();
      });

      it('should create an instance of Item', function() {
        // TODO: update the code to test Item
        expect(instance).to.be.a(AmazonShippingApi.Item);
      });

      it('should have the property itemValue (base name: "itemValue")', function() {
        // TODO: update the code to test the property itemValue
        expect(instance).to.have.property('itemValue');
        // expect(instance.itemValue).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property itemIdentifier (base name: "itemIdentifier")', function() {
        // TODO: update the code to test the property itemIdentifier
        expect(instance).to.have.property('itemIdentifier');
        // expect(instance.itemIdentifier).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property weight (base name: "weight")', function() {
        // TODO: update the code to test the property weight
        expect(instance).to.have.property('weight');
        // expect(instance.weight).to.be(expectedValueLiteral);
      });

      it('should have the property liquidVolume (base name: "liquidVolume")', function() {
        // TODO: update the code to test the property liquidVolume
        expect(instance).to.have.property('liquidVolume');
        // expect(instance.liquidVolume).to.be(expectedValueLiteral);
      });

      it('should have the property isHazmat (base name: "isHazmat")', function() {
        // TODO: update the code to test the property isHazmat
        expect(instance).to.have.property('isHazmat');
        // expect(instance.isHazmat).to.be(expectedValueLiteral);
      });

      it('should have the property dangerousGoodsDetails (base name: "dangerousGoodsDetails")', function() {
        // TODO: update the code to test the property dangerousGoodsDetails
        expect(instance).to.have.property('dangerousGoodsDetails');
        // expect(instance.dangerousGoodsDetails).to.be(expectedValueLiteral);
      });

      it('should have the property productType (base name: "productType")', function() {
        // TODO: update the code to test the property productType
        expect(instance).to.have.property('productType');
        // expect(instance.productType).to.be(expectedValueLiteral);
      });

      it('should have the property invoiceDetails (base name: "invoiceDetails")', function() {
        // TODO: update the code to test the property invoiceDetails
        expect(instance).to.have.property('invoiceDetails');
        // expect(instance.invoiceDetails).to.be(expectedValueLiteral);
      });

      it('should have the property serialNumbers (base name: "serialNumbers")', function() {
        // TODO: update the code to test the property serialNumbers
        expect(instance).to.have.property('serialNumbers');
        // expect(instance.serialNumbers).to.be(expectedValueLiteral);
      });

      it('should have the property directFulfillmentItemIdentifiers (base name: "directFulfillmentItemIdentifiers")', function() {
        // TODO: update the code to test the property directFulfillmentItemIdentifiers
        expect(instance).to.have.property('directFulfillmentItemIdentifiers');
        // expect(instance.directFulfillmentItemIdentifiers).to.be(expectedValueLiteral);
      });

    });
  });

}));
