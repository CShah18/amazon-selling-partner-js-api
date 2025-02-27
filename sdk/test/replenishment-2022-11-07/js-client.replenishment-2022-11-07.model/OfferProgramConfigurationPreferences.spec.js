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
    describe('OfferProgramConfigurationPreferences', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForReplenishment.OfferProgramConfigurationPreferences();
      });

      it('should create an instance of OfferProgramConfigurationPreferences', function() {
        // TODO: update the code to test OfferProgramConfigurationPreferences
        expect(instance).to.be.a(SellingPartnerApiForReplenishment.OfferProgramConfigurationPreferences);
      });

      it('should have the property autoEnrollment (base name: "autoEnrollment")', function() {
        // TODO: update the code to test the property autoEnrollment
        expect(instance).to.have.property('autoEnrollment');
        // expect(instance.autoEnrollment).to.be(expectedValueLiteral);
      });

    });
  });

}));
