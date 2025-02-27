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
    describe('CreateReservationRequest', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForServices.CreateReservationRequest();
      });

      it('should create an instance of CreateReservationRequest', function() {
        // TODO: update the code to test CreateReservationRequest
        expect(instance).to.be.a(SellingPartnerApiForServices.CreateReservationRequest);
      });

      it('should have the property resourceId (base name: "resourceId")', function() {
        // TODO: update the code to test the property resourceId
        expect(instance).to.have.property('resourceId');
        // expect(instance.resourceId).to.be(expectedValueLiteral);
      });

      it('should have the property reservation (base name: "reservation")', function() {
        // TODO: update the code to test the property reservation
        expect(instance).to.have.property('reservation');
        // expect(instance.reservation).to.be(expectedValueLiteral);
      });

    });
  });

}));
