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
    describe('DistributionPackage', function() {
      beforeEach(function() {
        instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.DistributionPackage();
      });

      it('should create an instance of DistributionPackage', function() {
        // TODO: update the code to test DistributionPackage
        expect(instance).to.be.a(TheSellingPartnerApiForAmazonWarehousingAndDistribution.DistributionPackage);
      });

      it('should have the property contents (base name: "contents")', function() {
        // TODO: update the code to test the property contents
        expect(instance).to.have.property('contents');
        // expect(instance.contents).to.be(expectedValueLiteral);
      });

      it('should have the property measurements (base name: "measurements")', function() {
        // TODO: update the code to test the property measurements
        expect(instance).to.have.property('measurements');
        // expect(instance.measurements).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

    });
  });

}));
