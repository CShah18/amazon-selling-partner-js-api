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
    describe('VolumeUnitOfMeasurement', function() {
      beforeEach(function() {
        instance = TheSellingPartnerApiForAmazonWarehousingAndDistribution.VolumeUnitOfMeasurement;
      });

      it('should create an instance of VolumeUnitOfMeasurement', function() {
        // TODO: update the code to test VolumeUnitOfMeasurement
        expect(instance).to.be.a('object');
      });

      it('should have the property CU_IN', function() {
        expect(instance).to.have.property('CU_IN');
        expect(instance.CU_IN).to.be("CU_IN");
      });

      it('should have the property CBM', function() {
        expect(instance).to.have.property('CBM');
        expect(instance.CBM).to.be("CBM");
      });

      it('should have the property CC', function() {
        expect(instance).to.have.property('CC');
        expect(instance.CC).to.be("CC");
      });

    });
  });

}));
