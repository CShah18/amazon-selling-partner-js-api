/*
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
 *
 * OpenAPI spec version: v1
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
    define(['expect.js', '../../../src/services/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/services/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForServices);
  }
}(this, function(expect, SellingPartnerApiForServices) {
  'use strict';

  var instance;

  describe('services', function() {
    describe('AvailabilityRecord', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForServices.AvailabilityRecord();
      });

      it('should create an instance of AvailabilityRecord', function() {
        // TODO: update the code to test AvailabilityRecord
        expect(instance).to.be.a(SellingPartnerApiForServices.AvailabilityRecord);
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

      it('should have the property recurrence (base name: "recurrence")', function() {
        // TODO: update the code to test the property recurrence
        expect(instance).to.have.property('recurrence');
        // expect(instance.recurrence).to.be(expectedValueLiteral);
      });

      it('should have the property capacity (base name: "capacity")', function() {
        // TODO: update the code to test the property capacity
        expect(instance).to.have.property('capacity');
        // expect(instance.capacity).to.be(expectedValueLiteral);
      });

    });
  });

}));
