/*
 * Selling Partner API for Listings Restrictions
 * The Selling Partner API for Listings Restrictions provides programmatic access to restrictions on Amazon catalog listings.  For more information, see the [Listings Restrictions API Use Case Guide](doc:listings-restrictions-api-v2021-08-01-use-case-guide).
 *
 * OpenAPI spec version: 2021-08-01
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
    define(['expect.js', '../../../src/listingsRestrictions_2021-08-01/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/listingsRestrictions_2021-08-01/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForListingsRestrictions);
  }
}(this, function(expect, SellingPartnerApiForListingsRestrictions) {
  'use strict';

  var instance;

  describe('listingsRestrictions_2021-08-01', function() {
    describe('Restriction', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForListingsRestrictions.Restriction();
      });

      it('should create an instance of Restriction', function() {
        // TODO: update the code to test Restriction
        expect(instance).to.be.a(SellingPartnerApiForListingsRestrictions.Restriction);
      });

      it('should have the property marketplaceId (base name: "marketplaceId")', function() {
        // TODO: update the code to test the property marketplaceId
        expect(instance).to.have.property('marketplaceId');
        // expect(instance.marketplaceId).to.be(expectedValueLiteral);
      });

      it('should have the property conditionType (base name: "conditionType")', function() {
        // TODO: update the code to test the property conditionType
        expect(instance).to.have.property('conditionType');
        // expect(instance.conditionType).to.be(expectedValueLiteral);
      });

      it('should have the property reasons (base name: "reasons")', function() {
        // TODO: update the code to test the property reasons
        expect(instance).to.have.property('reasons');
        // expect(instance.reasons).to.be(expectedValueLiteral);
      });

    });
  });

}));
