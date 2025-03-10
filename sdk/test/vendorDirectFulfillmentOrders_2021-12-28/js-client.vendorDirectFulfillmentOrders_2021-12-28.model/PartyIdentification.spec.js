/*
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
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
    define(['expect.js', '../../../src/vendorDirectFulfillmentOrders_2021-12-28/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/vendorDirectFulfillmentOrders_2021-12-28/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForDirectFulfillmentOrders);
  }
}(this, function(expect, SellingPartnerApiForDirectFulfillmentOrders) {
  'use strict';

  var instance;

  describe('vendorDirectFulfillmentOrders_2021-12-28', function() {
    describe('PartyIdentification', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForDirectFulfillmentOrders.PartyIdentification();
      });

      it('should create an instance of PartyIdentification', function() {
        // TODO: update the code to test PartyIdentification
        expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentOrders.PartyIdentification);
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

      it('should have the property taxInfo (base name: "taxInfo")', function() {
        // TODO: update the code to test the property taxInfo
        expect(instance).to.have.property('taxInfo');
        // expect(instance.taxInfo).to.be(expectedValueLiteral);
      });

    });
  });

}));
