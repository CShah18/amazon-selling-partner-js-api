/*
 * Selling Partner API for Easy Ship
 * The Selling Partner API for Easy Ship helps you build applications that help sellers manage and ship Amazon Easy Ship orders.  Your Easy Ship applications can:  * Get available time slots for packages to be scheduled for delivery.  * Schedule, reschedule, and cancel Easy Ship orders.  * Print labels, invoices, and warranties.  See the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) for the differences in Easy Ship operations by marketplace.
 *
 * OpenAPI spec version: 2022-03-23
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
    define(['expect.js', '../../../src/easyShip_2022-03-23/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/easyShip_2022-03-23/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForEasyShip);
  }
}(this, function(expect, SellingPartnerApiForEasyShip) {
  'use strict';

  var instance;

  describe('easyShip_2022-03-23', function() {
    describe('CreateScheduledPackagesRequest', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForEasyShip.CreateScheduledPackagesRequest();
      });

      it('should create an instance of CreateScheduledPackagesRequest', function() {
        // TODO: update the code to test CreateScheduledPackagesRequest
        expect(instance).to.be.a(SellingPartnerApiForEasyShip.CreateScheduledPackagesRequest);
      });

      it('should have the property marketplaceId (base name: "marketplaceId")', function() {
        // TODO: update the code to test the property marketplaceId
        expect(instance).to.have.property('marketplaceId');
        // expect(instance.marketplaceId).to.be(expectedValueLiteral);
      });

      it('should have the property orderScheduleDetailsList (base name: "orderScheduleDetailsList")', function() {
        // TODO: update the code to test the property orderScheduleDetailsList
        expect(instance).to.have.property('orderScheduleDetailsList');
        // expect(instance.orderScheduleDetailsList).to.be(expectedValueLiteral);
      });

      it('should have the property labelFormat (base name: "labelFormat")', function() {
        // TODO: update the code to test the property labelFormat
        expect(instance).to.have.property('labelFormat');
        // expect(instance.labelFormat).to.be(expectedValueLiteral);
      });

    });
  });

}));
