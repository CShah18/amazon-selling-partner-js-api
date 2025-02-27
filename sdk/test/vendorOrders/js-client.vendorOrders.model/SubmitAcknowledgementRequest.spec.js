/*
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
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
    define(['expect.js', '../../../src/vendorOrders/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/vendorOrders/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForRetailProcurementOrders);
  }
}(this, function(expect, SellingPartnerApiForRetailProcurementOrders) {
  'use strict';

  var instance;

  describe('vendorOrders', function() {
    describe('SubmitAcknowledgementRequest', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForRetailProcurementOrders.SubmitAcknowledgementRequest();
      });

      it('should create an instance of SubmitAcknowledgementRequest', function() {
        // TODO: update the code to test SubmitAcknowledgementRequest
        expect(instance).to.be.a(SellingPartnerApiForRetailProcurementOrders.SubmitAcknowledgementRequest);
      });

      it('should have the property acknowledgements (base name: "acknowledgements")', function() {
        // TODO: update the code to test the property acknowledgements
        expect(instance).to.have.property('acknowledgements');
        // expect(instance.acknowledgements).to.be(expectedValueLiteral);
      });

    });
  });

}));
