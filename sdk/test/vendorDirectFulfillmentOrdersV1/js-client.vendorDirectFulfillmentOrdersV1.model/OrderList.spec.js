/*
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
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
    define(['expect.js', '../../../src/vendorDirectFulfillmentOrdersV1/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/vendorDirectFulfillmentOrdersV1/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForDirectFulfillmentOrders);
  }
}(this, function(expect, SellingPartnerApiForDirectFulfillmentOrders) {
  'use strict';

  var instance;

  describe('vendorDirectFulfillmentOrdersV1', function() {
    describe('OrderList', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderList();
      });

      it('should create an instance of OrderList', function() {
        // TODO: update the code to test OrderList
        expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentOrders.OrderList);
      });

      it('should have the property pagination (base name: "pagination")', function() {
        // TODO: update the code to test the property pagination
        expect(instance).to.have.property('pagination');
        // expect(instance.pagination).to.be(expectedValueLiteral);
      });

      it('should have the property orders (base name: "orders")', function() {
        // TODO: update the code to test the property orders
        expect(instance).to.have.property('orders');
        // expect(instance.orders).to.be(expectedValueLiteral);
      });

    });
  });

}));
