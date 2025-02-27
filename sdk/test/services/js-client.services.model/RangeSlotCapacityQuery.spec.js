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
    describe('RangeSlotCapacityQuery', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForServices.RangeSlotCapacityQuery();
      });

      it('should create an instance of RangeSlotCapacityQuery', function() {
        // TODO: update the code to test RangeSlotCapacityQuery
        expect(instance).to.be.a(SellingPartnerApiForServices.RangeSlotCapacityQuery);
      });

      it('should have the property capacityTypes (base name: "capacityTypes")', function() {
        // TODO: update the code to test the property capacityTypes
        expect(instance).to.have.property('capacityTypes');
        // expect(instance.capacityTypes).to.be(expectedValueLiteral);
      });

      it('should have the property startDateTime (base name: "startDateTime")', function() {
        // TODO: update the code to test the property startDateTime
        expect(instance).to.have.property('startDateTime');
        // expect(instance.startDateTime).to.be(expectedValueLiteral);
      });

      it('should have the property endDateTime (base name: "endDateTime")', function() {
        // TODO: update the code to test the property endDateTime
        expect(instance).to.have.property('endDateTime');
        // expect(instance.endDateTime).to.be(expectedValueLiteral);
      });

    });
  });

}));
