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
    describe('FinancialEvents', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForFinances.FinancialEvents();
      });

      it('should create an instance of FinancialEvents', function() {
        // TODO: update the code to test FinancialEvents
        expect(instance).to.be.a(SellingPartnerApiForFinances.FinancialEvents);
      });

      it('should have the property shipmentEventList (base name: "ShipmentEventList")', function() {
        // TODO: update the code to test the property shipmentEventList
        expect(instance).to.have.property('shipmentEventList');
        // expect(instance.shipmentEventList).to.be(expectedValueLiteral);
      });

      it('should have the property shipmentSettleEventList (base name: "ShipmentSettleEventList")', function() {
        // TODO: update the code to test the property shipmentSettleEventList
        expect(instance).to.have.property('shipmentSettleEventList');
        // expect(instance.shipmentSettleEventList).to.be(expectedValueLiteral);
      });

      it('should have the property refundEventList (base name: "RefundEventList")', function() {
        // TODO: update the code to test the property refundEventList
        expect(instance).to.have.property('refundEventList');
        // expect(instance.refundEventList).to.be(expectedValueLiteral);
      });

      it('should have the property guaranteeClaimEventList (base name: "GuaranteeClaimEventList")', function() {
        // TODO: update the code to test the property guaranteeClaimEventList
        expect(instance).to.have.property('guaranteeClaimEventList');
        // expect(instance.guaranteeClaimEventList).to.be(expectedValueLiteral);
      });

      it('should have the property chargebackEventList (base name: "ChargebackEventList")', function() {
        // TODO: update the code to test the property chargebackEventList
        expect(instance).to.have.property('chargebackEventList');
        // expect(instance.chargebackEventList).to.be(expectedValueLiteral);
      });

      it('should have the property payWithAmazonEventList (base name: "PayWithAmazonEventList")', function() {
        // TODO: update the code to test the property payWithAmazonEventList
        expect(instance).to.have.property('payWithAmazonEventList');
        // expect(instance.payWithAmazonEventList).to.be(expectedValueLiteral);
      });

      it('should have the property serviceProviderCreditEventList (base name: "ServiceProviderCreditEventList")', function() {
        // TODO: update the code to test the property serviceProviderCreditEventList
        expect(instance).to.have.property('serviceProviderCreditEventList');
        // expect(instance.serviceProviderCreditEventList).to.be(expectedValueLiteral);
      });

      it('should have the property retrochargeEventList (base name: "RetrochargeEventList")', function() {
        // TODO: update the code to test the property retrochargeEventList
        expect(instance).to.have.property('retrochargeEventList');
        // expect(instance.retrochargeEventList).to.be(expectedValueLiteral);
      });

      it('should have the property rentalTransactionEventList (base name: "RentalTransactionEventList")', function() {
        // TODO: update the code to test the property rentalTransactionEventList
        expect(instance).to.have.property('rentalTransactionEventList');
        // expect(instance.rentalTransactionEventList).to.be(expectedValueLiteral);
      });

      it('should have the property productAdsPaymentEventList (base name: "ProductAdsPaymentEventList")', function() {
        // TODO: update the code to test the property productAdsPaymentEventList
        expect(instance).to.have.property('productAdsPaymentEventList');
        // expect(instance.productAdsPaymentEventList).to.be(expectedValueLiteral);
      });

      it('should have the property serviceFeeEventList (base name: "ServiceFeeEventList")', function() {
        // TODO: update the code to test the property serviceFeeEventList
        expect(instance).to.have.property('serviceFeeEventList');
        // expect(instance.serviceFeeEventList).to.be(expectedValueLiteral);
      });

      it('should have the property sellerDealPaymentEventList (base name: "SellerDealPaymentEventList")', function() {
        // TODO: update the code to test the property sellerDealPaymentEventList
        expect(instance).to.have.property('sellerDealPaymentEventList');
        // expect(instance.sellerDealPaymentEventList).to.be(expectedValueLiteral);
      });

      it('should have the property debtRecoveryEventList (base name: "DebtRecoveryEventList")', function() {
        // TODO: update the code to test the property debtRecoveryEventList
        expect(instance).to.have.property('debtRecoveryEventList');
        // expect(instance.debtRecoveryEventList).to.be(expectedValueLiteral);
      });

      it('should have the property loanServicingEventList (base name: "LoanServicingEventList")', function() {
        // TODO: update the code to test the property loanServicingEventList
        expect(instance).to.have.property('loanServicingEventList');
        // expect(instance.loanServicingEventList).to.be(expectedValueLiteral);
      });

      it('should have the property adjustmentEventList (base name: "AdjustmentEventList")', function() {
        // TODO: update the code to test the property adjustmentEventList
        expect(instance).to.have.property('adjustmentEventList');
        // expect(instance.adjustmentEventList).to.be(expectedValueLiteral);
      });

      it('should have the property sAFETReimbursementEventList (base name: "SAFETReimbursementEventList")', function() {
        // TODO: update the code to test the property sAFETReimbursementEventList
        expect(instance).to.have.property('sAFETReimbursementEventList');
        // expect(instance.sAFETReimbursementEventList).to.be(expectedValueLiteral);
      });

      it('should have the property sellerReviewEnrollmentPaymentEventList (base name: "SellerReviewEnrollmentPaymentEventList")', function() {
        // TODO: update the code to test the property sellerReviewEnrollmentPaymentEventList
        expect(instance).to.have.property('sellerReviewEnrollmentPaymentEventList');
        // expect(instance.sellerReviewEnrollmentPaymentEventList).to.be(expectedValueLiteral);
      });

      it('should have the property fBALiquidationEventList (base name: "FBALiquidationEventList")', function() {
        // TODO: update the code to test the property fBALiquidationEventList
        expect(instance).to.have.property('fBALiquidationEventList');
        // expect(instance.fBALiquidationEventList).to.be(expectedValueLiteral);
      });

      it('should have the property couponPaymentEventList (base name: "CouponPaymentEventList")', function() {
        // TODO: update the code to test the property couponPaymentEventList
        expect(instance).to.have.property('couponPaymentEventList');
        // expect(instance.couponPaymentEventList).to.be(expectedValueLiteral);
      });

      it('should have the property imagingServicesFeeEventList (base name: "ImagingServicesFeeEventList")', function() {
        // TODO: update the code to test the property imagingServicesFeeEventList
        expect(instance).to.have.property('imagingServicesFeeEventList');
        // expect(instance.imagingServicesFeeEventList).to.be(expectedValueLiteral);
      });

      it('should have the property networkComminglingTransactionEventList (base name: "NetworkComminglingTransactionEventList")', function() {
        // TODO: update the code to test the property networkComminglingTransactionEventList
        expect(instance).to.have.property('networkComminglingTransactionEventList');
        // expect(instance.networkComminglingTransactionEventList).to.be(expectedValueLiteral);
      });

      it('should have the property affordabilityExpenseEventList (base name: "AffordabilityExpenseEventList")', function() {
        // TODO: update the code to test the property affordabilityExpenseEventList
        expect(instance).to.have.property('affordabilityExpenseEventList');
        // expect(instance.affordabilityExpenseEventList).to.be(expectedValueLiteral);
      });

      it('should have the property affordabilityExpenseReversalEventList (base name: "AffordabilityExpenseReversalEventList")', function() {
        // TODO: update the code to test the property affordabilityExpenseReversalEventList
        expect(instance).to.have.property('affordabilityExpenseReversalEventList');
        // expect(instance.affordabilityExpenseReversalEventList).to.be(expectedValueLiteral);
      });

      it('should have the property removalShipmentEventList (base name: "RemovalShipmentEventList")', function() {
        // TODO: update the code to test the property removalShipmentEventList
        expect(instance).to.have.property('removalShipmentEventList');
        // expect(instance.removalShipmentEventList).to.be(expectedValueLiteral);
      });

      it('should have the property removalShipmentAdjustmentEventList (base name: "RemovalShipmentAdjustmentEventList")', function() {
        // TODO: update the code to test the property removalShipmentAdjustmentEventList
        expect(instance).to.have.property('removalShipmentAdjustmentEventList');
        // expect(instance.removalShipmentAdjustmentEventList).to.be(expectedValueLiteral);
      });

      it('should have the property trialShipmentEventList (base name: "TrialShipmentEventList")', function() {
        // TODO: update the code to test the property trialShipmentEventList
        expect(instance).to.have.property('trialShipmentEventList');
        // expect(instance.trialShipmentEventList).to.be(expectedValueLiteral);
      });

      it('should have the property tDSReimbursementEventList (base name: "TDSReimbursementEventList")', function() {
        // TODO: update the code to test the property tDSReimbursementEventList
        expect(instance).to.have.property('tDSReimbursementEventList');
        // expect(instance.tDSReimbursementEventList).to.be(expectedValueLiteral);
      });

      it('should have the property adhocDisbursementEventList (base name: "AdhocDisbursementEventList")', function() {
        // TODO: update the code to test the property adhocDisbursementEventList
        expect(instance).to.have.property('adhocDisbursementEventList');
        // expect(instance.adhocDisbursementEventList).to.be(expectedValueLiteral);
      });

      it('should have the property taxWithholdingEventList (base name: "TaxWithholdingEventList")', function() {
        // TODO: update the code to test the property taxWithholdingEventList
        expect(instance).to.have.property('taxWithholdingEventList');
        // expect(instance.taxWithholdingEventList).to.be(expectedValueLiteral);
      });

      it('should have the property chargeRefundEventList (base name: "ChargeRefundEventList")', function() {
        // TODO: update the code to test the property chargeRefundEventList
        expect(instance).to.have.property('chargeRefundEventList');
        // expect(instance.chargeRefundEventList).to.be(expectedValueLiteral);
      });

      it('should have the property failedAdhocDisbursementEventList (base name: "FailedAdhocDisbursementEventList")', function() {
        // TODO: update the code to test the property failedAdhocDisbursementEventList
        expect(instance).to.have.property('failedAdhocDisbursementEventList');
        // expect(instance.failedAdhocDisbursementEventList).to.be(expectedValueLiteral);
      });

      it('should have the property valueAddedServiceChargeEventList (base name: "ValueAddedServiceChargeEventList")', function() {
        // TODO: update the code to test the property valueAddedServiceChargeEventList
        expect(instance).to.have.property('valueAddedServiceChargeEventList');
        // expect(instance.valueAddedServiceChargeEventList).to.be(expectedValueLiteral);
      });

      it('should have the property capacityReservationBillingEventList (base name: "CapacityReservationBillingEventList")', function() {
        // TODO: update the code to test the property capacityReservationBillingEventList
        expect(instance).to.have.property('capacityReservationBillingEventList');
        // expect(instance.capacityReservationBillingEventList).to.be(expectedValueLiteral);
      });

    });
  });

}));
