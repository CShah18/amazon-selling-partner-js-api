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
    describe('BoxContentsSource', function() {
      beforeEach(function() {
        instance = SellingPartnerApiForFulfillmentInbound.BoxContentsSource;
      });

      it('should create an instance of BoxContentsSource', function() {
        // TODO: update the code to test BoxContentsSource
        expect(instance).to.be.a('object');
      });

      it('should have the property NONE', function() {
        expect(instance).to.have.property('NONE');
        expect(instance.NONE).to.be("NONE");
      });

      it('should have the property FEED', function() {
        expect(instance).to.have.property('FEED');
        expect(instance.FEED).to.be("FEED");
      });

      it('should have the property _2DBARCODE', function() {
        expect(instance).to.have.property('_2DBARCODE');
        expect(instance._2DBARCODE).to.be("2D_BARCODE");
      });

      it('should have the property INTERACTIVE', function() {
        expect(instance).to.have.property('INTERACTIVE');
        expect(instance.INTERACTIVE).to.be("INTERACTIVE");
      });

    });
  });

}));
