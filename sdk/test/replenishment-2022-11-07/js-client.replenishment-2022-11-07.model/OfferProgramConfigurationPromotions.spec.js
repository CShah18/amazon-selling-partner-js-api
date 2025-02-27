/*
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * OpenAPI spec version: 2022-11-07
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
    define(['expect.js', '../../../src/replenishment-2022-11-07/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/replenishment-2022-11-07/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForReplenishment);
  }
}(this, function(expect, SellingPartnerApiForReplenishment) {
  'use strict';

  var instance;

  describe('replenishment-2022-11-07', function() {
    describe('OfferProgramConfigurationPromotions', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForReplenishment.OfferProgramConfigurationPromotions();
      });

      it('should create an instance of OfferProgramConfigurationPromotions', function() {
        // TODO: update the code to test OfferProgramConfigurationPromotions
        expect(instance).to.be.a(SellingPartnerApiForReplenishment.OfferProgramConfigurationPromotions);
      });

      it('should have the property sellingPartnerFundedBaseDiscount (base name: "sellingPartnerFundedBaseDiscount")', function() {
        // TODO: update the code to test the property sellingPartnerFundedBaseDiscount
        expect(instance).to.have.property('sellingPartnerFundedBaseDiscount');
        // expect(instance.sellingPartnerFundedBaseDiscount).to.be(expectedValueLiteral);
      });

      it('should have the property sellingPartnerFundedTieredDiscount (base name: "sellingPartnerFundedTieredDiscount")', function() {
        // TODO: update the code to test the property sellingPartnerFundedTieredDiscount
        expect(instance).to.have.property('sellingPartnerFundedTieredDiscount');
        // expect(instance.sellingPartnerFundedTieredDiscount).to.be(expectedValueLiteral);
      });

      it('should have the property amazonFundedBaseDiscount (base name: "amazonFundedBaseDiscount")', function() {
        // TODO: update the code to test the property amazonFundedBaseDiscount
        expect(instance).to.have.property('amazonFundedBaseDiscount');
        // expect(instance.amazonFundedBaseDiscount).to.be(expectedValueLiteral);
      });

      it('should have the property amazonFundedTieredDiscount (base name: "amazonFundedTieredDiscount")', function() {
        // TODO: update the code to test the property amazonFundedTieredDiscount
        expect(instance).to.have.property('amazonFundedTieredDiscount');
        // expect(instance.amazonFundedTieredDiscount).to.be(expectedValueLiteral);
      });

    });
  });

}));
