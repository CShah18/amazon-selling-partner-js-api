/*
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
    define(['expect.js', '../../../src/fulfillmentInboundV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/fulfillmentInboundV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForFulfillmentInbound);
  }
}(this, function(expect, SellingPartnerApiForFulfillmentInbound) {
  'use strict';

  var instance;

  describe('fulfillmentInboundV0', function() {
    describe('LabelPrepType', function() {
      beforeEach(function() {
        instance = SellingPartnerApiForFulfillmentInbound.LabelPrepType;
      });

      it('should create an instance of LabelPrepType', function() {
        // TODO: update the code to test LabelPrepType
        expect(instance).to.be.a('object');
      });

      it('should have the property NO_LABEL', function() {
        expect(instance).to.have.property('NO_LABEL');
        expect(instance.NO_LABEL).to.be("NO_LABEL");
      });

      it('should have the property SELLER_LABEL', function() {
        expect(instance).to.have.property('SELLER_LABEL');
        expect(instance.SELLER_LABEL).to.be("SELLER_LABEL");
      });

      it('should have the property AMAZON_LABEL', function() {
        expect(instance).to.have.property('AMAZON_LABEL');
        expect(instance.AMAZON_LABEL).to.be("AMAZON_LABEL");
      });

    });
  });

}));
