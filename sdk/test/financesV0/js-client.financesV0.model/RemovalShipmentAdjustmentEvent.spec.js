/*
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
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
    define(['expect.js', '../../../src/financesV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/financesV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForFinances);
  }
}(this, function(expect, SellingPartnerApiForFinances) {
  'use strict';

  var instance;

  describe('financesV0', function() {
    describe('RemovalShipmentAdjustmentEvent', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForFinances.RemovalShipmentAdjustmentEvent();
      });

      it('should create an instance of RemovalShipmentAdjustmentEvent', function() {
        // TODO: update the code to test RemovalShipmentAdjustmentEvent
        expect(instance).to.be.a(SellingPartnerApiForFinances.RemovalShipmentAdjustmentEvent);
      });

      it('should have the property postedDate (base name: "PostedDate")', function() {
        // TODO: update the code to test the property postedDate
        expect(instance).to.have.property('postedDate');
        // expect(instance.postedDate).to.be(expectedValueLiteral);
      });

      it('should have the property adjustmentEventId (base name: "AdjustmentEventId")', function() {
        // TODO: update the code to test the property adjustmentEventId
        expect(instance).to.have.property('adjustmentEventId');
        // expect(instance.adjustmentEventId).to.be(expectedValueLiteral);
      });

      it('should have the property merchantOrderId (base name: "MerchantOrderId")', function() {
        // TODO: update the code to test the property merchantOrderId
        expect(instance).to.have.property('merchantOrderId');
        // expect(instance.merchantOrderId).to.be(expectedValueLiteral);
      });

      it('should have the property orderId (base name: "OrderId")', function() {
        // TODO: update the code to test the property orderId
        expect(instance).to.have.property('orderId');
        // expect(instance.orderId).to.be(expectedValueLiteral);
      });

      it('should have the property transactionType (base name: "TransactionType")', function() {
        // TODO: update the code to test the property transactionType
        expect(instance).to.have.property('transactionType');
        // expect(instance.transactionType).to.be(expectedValueLiteral);
      });

      it('should have the property removalShipmentItemAdjustmentList (base name: "RemovalShipmentItemAdjustmentList")', function() {
        // TODO: update the code to test the property removalShipmentItemAdjustmentList
        expect(instance).to.have.property('removalShipmentItemAdjustmentList');
        // expect(instance.removalShipmentItemAdjustmentList).to.be(expectedValueLiteral);
      });

    });
  });

}));
