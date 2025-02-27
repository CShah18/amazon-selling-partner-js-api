/*
 * Selling Partner API for Supply Sources
 * Manage configurations and capabilities of seller supply sources.
 *
 * OpenAPI spec version: 2020-07-01
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
    define(['expect.js', '../../../src/supplySources_2020-07-01/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/supplySources_2020-07-01/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForSupplySources);
  }
}(this, function(expect, SellingPartnerApiForSupplySources) {
  'use strict';

  var instance;

  describe('supplySources_2020-07-01', function() {
    describe('OperatingHour', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForSupplySources.OperatingHour();
      });

      it('should create an instance of OperatingHour', function() {
        // TODO: update the code to test OperatingHour
        expect(instance).to.be.a(SellingPartnerApiForSupplySources.OperatingHour);
      });

      it('should have the property startTime (base name: "startTime")', function() {
        // TODO: update the code to test the property startTime
        expect(instance).to.have.property('startTime');
        // expect(instance.startTime).to.be(expectedValueLiteral);
      });

      it('should have the property endTime (base name: "endTime")', function() {
        // TODO: update the code to test the property endTime
        expect(instance).to.have.property('endTime');
        // expect(instance.endTime).to.be(expectedValueLiteral);
      });

    });
  });

}));
