/*
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
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
    define(['expect.js', '../../../src/fulfillmentInbound_2024-03-20/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/fulfillmentInbound_2024-03-20/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TheSellingPartnerApiForFbaInboundOperations);
  }
}(this, function(expect, TheSellingPartnerApiForFbaInboundOperations) {
  'use strict';

  var instance;

  describe('fulfillmentInbound_2024-03-20', function() {
    describe('ShippingConfiguration', function() {
      beforeEach(function() {
        instance = new TheSellingPartnerApiForFbaInboundOperations.ShippingConfiguration();
      });

      it('should create an instance of ShippingConfiguration', function() {
        // TODO: update the code to test ShippingConfiguration
        expect(instance).to.be.a(TheSellingPartnerApiForFbaInboundOperations.ShippingConfiguration);
      });

      it('should have the property shippingMode (base name: "shippingMode")', function() {
        // TODO: update the code to test the property shippingMode
        expect(instance).to.have.property('shippingMode');
        // expect(instance.shippingMode).to.be(expectedValueLiteral);
      });

      it('should have the property shippingSolution (base name: "shippingSolution")', function() {
        // TODO: update the code to test the property shippingSolution
        expect(instance).to.have.property('shippingSolution');
        // expect(instance.shippingSolution).to.be(expectedValueLiteral);
      });

    });
  });

}));
