/*
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
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
    define(['expect.js', '../../../src/fulfillmentInbound_2024-03-20/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/fulfillmentInbound_2024-03-20/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TheSellingPartnerApiForFbaInboundOperations);
  }
}(this, function(expect, TheSellingPartnerApiForFbaInboundOperations) {
  'use strict';

  var instance;

  describe('fulfillmentInbound_2024-03-20', function() {
    describe('SelfShipAppointmentDetails', function() {
      beforeEach(function() {
        instance = new TheSellingPartnerApiForFbaInboundOperations.SelfShipAppointmentDetails();
      });

      it('should create an instance of SelfShipAppointmentDetails', function() {
        // TODO: update the code to test SelfShipAppointmentDetails
        expect(instance).to.be.a(TheSellingPartnerApiForFbaInboundOperations.SelfShipAppointmentDetails);
      });

      it('should have the property appointmentId (base name: "appointmentId")', function() {
        // TODO: update the code to test the property appointmentId
        expect(instance).to.have.property('appointmentId');
        // expect(instance.appointmentId).to.be(expectedValueLiteral);
      });

      it('should have the property appointmentSlotTime (base name: "appointmentSlotTime")', function() {
        // TODO: update the code to test the property appointmentSlotTime
        expect(instance).to.have.property('appointmentSlotTime');
        // expect(instance.appointmentSlotTime).to.be(expectedValueLiteral);
      });

      it('should have the property appointmentStatus (base name: "appointmentStatus")', function() {
        // TODO: update the code to test the property appointmentStatus
        expect(instance).to.have.property('appointmentStatus');
        // expect(instance.appointmentStatus).to.be(expectedValueLiteral);
      });

    });
  });

}));
