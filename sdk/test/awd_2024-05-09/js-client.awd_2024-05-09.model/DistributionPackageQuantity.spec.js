/*
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory. 
 *
 * OpenAPI spec version: 2024-05-09
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
    define(['expect.js', '../../../src/awd_2024-05-09/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/awd_2024-05-09/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TheSellingPartnerApiForAmazonWarehousingAndDistribution);
  }
}(this, function(expect, TheSellingPartnerApiForAmazonWarehousingAndDistribution) {
  'use strict';

  var instance;

  describe('awd_2024-05-09', function() {
    describe('DistributionPackageQuantity', function() {
      beforeEach(function() {
        instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.DistributionPackageQuantity();
      });

      it('should create an instance of DistributionPackageQuantity', function() {
        // TODO: update the code to test DistributionPackageQuantity
        expect(instance).to.be.a(TheSellingPartnerApiForAmazonWarehousingAndDistribution.DistributionPackageQuantity);
      });

      it('should have the property count (base name: "count")', function() {
        // TODO: update the code to test the property count
        expect(instance).to.have.property('count');
        // expect(instance.count).to.be(expectedValueLiteral);
      });

      it('should have the property distributionPackage (base name: "distributionPackage")', function() {
        // TODO: update the code to test the property distributionPackage
        expect(instance).to.have.property('distributionPackage');
        // expect(instance.distributionPackage).to.be(expectedValueLiteral);
      });

    });
  });

}));
