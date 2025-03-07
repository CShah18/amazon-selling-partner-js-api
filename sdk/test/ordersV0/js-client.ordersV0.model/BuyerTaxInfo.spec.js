/*
 * Orders v0
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
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
    define(['expect.js', '../../../src/ordersV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/ordersV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OrdersV0);
  }
}(this, function(expect, OrdersV0) {
  'use strict';

  var instance;

  describe('ordersV0', function() {
    describe('BuyerTaxInfo', function() {
      beforeEach(function() {
        instance = new OrdersV0.BuyerTaxInfo();
      });

      it('should create an instance of BuyerTaxInfo', function() {
        // TODO: update the code to test BuyerTaxInfo
        expect(instance).to.be.a(OrdersV0.BuyerTaxInfo);
      });

      it('should have the property companyLegalName (base name: "CompanyLegalName")', function() {
        // TODO: update the code to test the property companyLegalName
        expect(instance).to.have.property('companyLegalName');
        // expect(instance.companyLegalName).to.be(expectedValueLiteral);
      });

      it('should have the property taxingRegion (base name: "TaxingRegion")', function() {
        // TODO: update the code to test the property taxingRegion
        expect(instance).to.have.property('taxingRegion');
        // expect(instance.taxingRegion).to.be(expectedValueLiteral);
      });

      it('should have the property taxClassifications (base name: "TaxClassifications")', function() {
        // TODO: update the code to test the property taxClassifications
        expect(instance).to.have.property('taxClassifications');
        // expect(instance.taxClassifications).to.be(expectedValueLiteral);
      });

    });
  });

}));
