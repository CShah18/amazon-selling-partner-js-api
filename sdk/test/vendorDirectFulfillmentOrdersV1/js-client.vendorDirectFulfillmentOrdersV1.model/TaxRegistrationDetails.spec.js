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
    describe('TaxRegistrationDetails', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForDirectFulfillmentOrders.TaxRegistrationDetails();
      });

      it('should create an instance of TaxRegistrationDetails', function() {
        // TODO: update the code to test TaxRegistrationDetails
        expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentOrders.TaxRegistrationDetails);
      });

      it('should have the property taxRegistrationType (base name: "taxRegistrationType")', function() {
        // TODO: update the code to test the property taxRegistrationType
        expect(instance).to.have.property('taxRegistrationType');
        // expect(instance.taxRegistrationType).to.be(expectedValueLiteral);
      });

      it('should have the property taxRegistrationNumber (base name: "taxRegistrationNumber")', function() {
        // TODO: update the code to test the property taxRegistrationNumber
        expect(instance).to.have.property('taxRegistrationNumber');
        // expect(instance.taxRegistrationNumber).to.be(expectedValueLiteral);
      });

      it('should have the property taxRegistrationAddress (base name: "taxRegistrationAddress")', function() {
        // TODO: update the code to test the property taxRegistrationAddress
        expect(instance).to.have.property('taxRegistrationAddress');
        // expect(instance.taxRegistrationAddress).to.be(expectedValueLiteral);
      });

      it('should have the property taxRegistrationMessages (base name: "taxRegistrationMessages")', function() {
        // TODO: update the code to test the property taxRegistrationMessages
        expect(instance).to.have.property('taxRegistrationMessages');
        // expect(instance.taxRegistrationMessages).to.be(expectedValueLiteral);
      });

    });
  });

}));
