/*
 * Orders v0
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
 *
 * OpenAPI spec version: v0
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
    define(['expect.js', '../../../src/ordersV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/ordersV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OrdersV0);
  }
}(this, function(expect, OrdersV0) {
  'use strict';

  var instance;

  describe('ordersV0', function() {
    describe('RegulatedOrderVerificationStatus', function() {
      beforeEach(function() {
        instance = new OrdersV0.RegulatedOrderVerificationStatus();
      });

      it('should create an instance of RegulatedOrderVerificationStatus', function() {
        // TODO: update the code to test RegulatedOrderVerificationStatus
        expect(instance).to.be.a(OrdersV0.RegulatedOrderVerificationStatus);
      });

      it('should have the property status (base name: "Status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property requiresMerchantAction (base name: "RequiresMerchantAction")', function() {
        // TODO: update the code to test the property requiresMerchantAction
        expect(instance).to.have.property('requiresMerchantAction');
        // expect(instance.requiresMerchantAction).to.be(expectedValueLiteral);
      });

      it('should have the property validRejectionReasons (base name: "ValidRejectionReasons")', function() {
        // TODO: update the code to test the property validRejectionReasons
        expect(instance).to.have.property('validRejectionReasons');
        // expect(instance.validRejectionReasons).to.be(expectedValueLiteral);
      });

      it('should have the property rejectionReason (base name: "RejectionReason")', function() {
        // TODO: update the code to test the property rejectionReason
        expect(instance).to.have.property('rejectionReason');
        // expect(instance.rejectionReason).to.be(expectedValueLiteral);
      });

      it('should have the property reviewDate (base name: "ReviewDate")', function() {
        // TODO: update the code to test the property reviewDate
        expect(instance).to.have.property('reviewDate');
        // expect(instance.reviewDate).to.be(expectedValueLiteral);
      });

      it('should have the property externalReviewerId (base name: "ExternalReviewerId")', function() {
        // TODO: update the code to test the property externalReviewerId
        expect(instance).to.have.property('externalReviewerId');
        // expect(instance.externalReviewerId).to.be(expectedValueLiteral);
      });

      it('should have the property validVerificationDetails (base name: "ValidVerificationDetails")', function() {
        // TODO: update the code to test the property validVerificationDetails
        expect(instance).to.have.property('validVerificationDetails');
        // expect(instance.validVerificationDetails).to.be(expectedValueLiteral);
      });

    });
  });

}));
