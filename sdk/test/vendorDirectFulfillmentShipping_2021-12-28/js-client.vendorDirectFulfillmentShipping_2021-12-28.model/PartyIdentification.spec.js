/*
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
 *
 * OpenAPI spec version: 2021-12-28
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
    define(['expect.js', '../../../src/vendorDirectFulfillmentShipping_2021-12-28/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/vendorDirectFulfillmentShipping_2021-12-28/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForDirectFulfillmentShipping);
  }
}(this, function(expect, SellingPartnerApiForDirectFulfillmentShipping) {
  'use strict';

  var instance;

  describe('vendorDirectFulfillmentShipping_2021-12-28', function() {
    describe('PartyIdentification', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForDirectFulfillmentShipping.PartyIdentification();
      });

      it('should create an instance of PartyIdentification', function() {
        // TODO: update the code to test PartyIdentification
        expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentShipping.PartyIdentification);
      });

      it('should have the property partyId (base name: "partyId")', function() {
        // TODO: update the code to test the property partyId
        expect(instance).to.have.property('partyId');
        // expect(instance.partyId).to.be(expectedValueLiteral);
      });

      it('should have the property address (base name: "address")', function() {
        // TODO: update the code to test the property address
        expect(instance).to.have.property('address');
        // expect(instance.address).to.be(expectedValueLiteral);
      });

      it('should have the property taxRegistrationDetails (base name: "taxRegistrationDetails")', function() {
        // TODO: update the code to test the property taxRegistrationDetails
        expect(instance).to.have.property('taxRegistrationDetails');
        // expect(instance.taxRegistrationDetails).to.be(expectedValueLiteral);
      });

    });
  });

}));
