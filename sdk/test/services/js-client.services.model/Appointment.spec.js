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
    describe('Appointment', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForServices.Appointment();
      });

      it('should create an instance of Appointment', function() {
        // TODO: update the code to test Appointment
        expect(instance).to.be.a(SellingPartnerApiForServices.Appointment);
      });

      it('should have the property appointmentId (base name: "appointmentId")', function() {
        // TODO: update the code to test the property appointmentId
        expect(instance).to.have.property('appointmentId');
        // expect(instance.appointmentId).to.be(expectedValueLiteral);
      });

      it('should have the property appointmentStatus (base name: "appointmentStatus")', function() {
        // TODO: update the code to test the property appointmentStatus
        expect(instance).to.have.property('appointmentStatus');
        // expect(instance.appointmentStatus).to.be(expectedValueLiteral);
      });

      it('should have the property appointmentTime (base name: "appointmentTime")', function() {
        // TODO: update the code to test the property appointmentTime
        expect(instance).to.have.property('appointmentTime');
        // expect(instance.appointmentTime).to.be(expectedValueLiteral);
      });

      it('should have the property assignedTechnicians (base name: "assignedTechnicians")', function() {
        // TODO: update the code to test the property assignedTechnicians
        expect(instance).to.have.property('assignedTechnicians');
        // expect(instance.assignedTechnicians).to.be(expectedValueLiteral);
      });

      it('should have the property rescheduledAppointmentId (base name: "rescheduledAppointmentId")', function() {
        // TODO: update the code to test the property rescheduledAppointmentId
        expect(instance).to.have.property('rescheduledAppointmentId');
        // expect(instance.rescheduledAppointmentId).to.be(expectedValueLiteral);
      });

      it('should have the property poa (base name: "poa")', function() {
        // TODO: update the code to test the property poa
        expect(instance).to.have.property('poa');
        // expect(instance.poa).to.be(expectedValueLiteral);
      });

    });
  });

}));
