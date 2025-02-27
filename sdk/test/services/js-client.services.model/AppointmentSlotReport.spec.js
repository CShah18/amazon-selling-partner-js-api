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
    describe('AppointmentSlotReport', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForServices.AppointmentSlotReport();
      });

      it('should create an instance of AppointmentSlotReport', function() {
        // TODO: update the code to test AppointmentSlotReport
        expect(instance).to.be.a(SellingPartnerApiForServices.AppointmentSlotReport);
      });

      it('should have the property schedulingType (base name: "schedulingType")', function() {
        // TODO: update the code to test the property schedulingType
        expect(instance).to.have.property('schedulingType');
        // expect(instance.schedulingType).to.be(expectedValueLiteral);
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

      it('should have the property appointmentSlots (base name: "appointmentSlots")', function() {
        // TODO: update the code to test the property appointmentSlots
        expect(instance).to.have.property('appointmentSlots');
        // expect(instance.appointmentSlots).to.be(expectedValueLiteral);
      });

    });
  });

}));
