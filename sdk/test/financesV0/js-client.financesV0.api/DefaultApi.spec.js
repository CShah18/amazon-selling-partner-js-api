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

  beforeEach(function() {
    instance = new SellingPartnerApiForFinances.DefaultApi();
  });

  describe('financesV0', function() {
    describe('DefaultApi', function() {
      describe('listFinancialEventGroups', function() {
        it('should call listFinancialEventGroups successfully', function(done) {
          // TODO: uncomment, update parameter values for listFinancialEventGroups call and complete the assertions
          /*
          var opts = {};
          opts.maxResultsPerPage = 10;
          opts.financialEventGroupStartedBefore = new Date("2013-10-20T19:20:30+01:00");
          opts.financialEventGroupStartedAfter = new Date("2013-10-20T19:20:30+01:00");
          opts.nextToken = "nextToken_example";

          instance.listFinancialEventGroups(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForFinances.ListFinancialEventGroupsResponse);
            expect(data.payload).to.be.a(SellingPartnerApiForFinances.ListFinancialEventGroupsPayload);
                  expect(data.payload.nextToken).to.be.a('string');
              // expect(data.payload.nextToken).to.be("");
              expect(data.payload.financialEventGroupList).to.be.a(SellingPartnerApiForFinances.FinancialEventGroupList);
      
            expect(data.errors).to.be.a(SellingPartnerApiForFinances.ErrorList);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listFinancialEvents', function() {
        it('should call listFinancialEvents successfully', function(done) {
          // TODO: uncomment, update parameter values for listFinancialEvents call and complete the assertions
          /*
          var opts = {};
          opts.maxResultsPerPage = 100;
          opts.postedAfter = new Date("2013-10-20T19:20:30+01:00");
          opts.postedBefore = new Date("2013-10-20T19:20:30+01:00");
          opts.nextToken = "nextToken_example";

          instance.listFinancialEvents(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForFinances.ListFinancialEventsResponse);
            expect(data.payload).to.be.a(SellingPartnerApiForFinances.ListFinancialEventsPayload);
                  expect(data.payload.nextToken).to.be.a('string');
              // expect(data.payload.nextToken).to.be("");
              expect(data.payload.financialEvents).to.be.a(SellingPartnerApiForFinances.FinancialEvents);
                    expect(data.payload.financialEvents.shipmentEventList).to.be.a(SellingPartnerApiForFinances.ShipmentEventList);
                    expect(data.payload.financialEvents.shipmentSettleEventList).to.be.a(SellingPartnerApiForFinances.ShipmentSettleEventList);
                    expect(data.payload.financialEvents.refundEventList).to.be.a(SellingPartnerApiForFinances.ShipmentEventList);
                    expect(data.payload.financialEvents.guaranteeClaimEventList).to.be.a(SellingPartnerApiForFinances.ShipmentEventList);
                    expect(data.payload.financialEvents.chargebackEventList).to.be.a(SellingPartnerApiForFinances.ShipmentEventList);
                    expect(data.payload.financialEvents.payWithAmazonEventList).to.be.a(SellingPartnerApiForFinances.PayWithAmazonEventList);
                    expect(data.payload.financialEvents.serviceProviderCreditEventList).to.be.a(SellingPartnerApiForFinances.SolutionProviderCreditEventList);
                    expect(data.payload.financialEvents.retrochargeEventList).to.be.a(SellingPartnerApiForFinances.RetrochargeEventList);
                    expect(data.payload.financialEvents.rentalTransactionEventList).to.be.a(SellingPartnerApiForFinances.RentalTransactionEventList);
                    expect(data.payload.financialEvents.productAdsPaymentEventList).to.be.a(SellingPartnerApiForFinances.ProductAdsPaymentEventList);
                    expect(data.payload.financialEvents.serviceFeeEventList).to.be.a(SellingPartnerApiForFinances.ServiceFeeEventList);
                    expect(data.payload.financialEvents.sellerDealPaymentEventList).to.be.a(SellingPartnerApiForFinances.SellerDealPaymentEventList);
                    expect(data.payload.financialEvents.debtRecoveryEventList).to.be.a(SellingPartnerApiForFinances.DebtRecoveryEventList);
                    expect(data.payload.financialEvents.loanServicingEventList).to.be.a(SellingPartnerApiForFinances.LoanServicingEventList);
                    expect(data.payload.financialEvents.adjustmentEventList).to.be.a(SellingPartnerApiForFinances.AdjustmentEventList);
                    expect(data.payload.financialEvents.sAFETReimbursementEventList).to.be.a(SellingPartnerApiForFinances.SAFETReimbursementEventList);
                    expect(data.payload.financialEvents.sellerReviewEnrollmentPaymentEventList).to.be.a(SellingPartnerApiForFinances.SellerReviewEnrollmentPaymentEventList);
                    expect(data.payload.financialEvents.fBALiquidationEventList).to.be.a(SellingPartnerApiForFinances.FBALiquidationEventList);
                    expect(data.payload.financialEvents.couponPaymentEventList).to.be.a(SellingPartnerApiForFinances.CouponPaymentEventList);
                    expect(data.payload.financialEvents.imagingServicesFeeEventList).to.be.a(SellingPartnerApiForFinances.ImagingServicesFeeEventList);
                    expect(data.payload.financialEvents.networkComminglingTransactionEventList).to.be.a(SellingPartnerApiForFinances.NetworkComminglingTransactionEventList);
                    expect(data.payload.financialEvents.affordabilityExpenseEventList).to.be.a(SellingPartnerApiForFinances.AffordabilityExpenseEventList);
                    expect(data.payload.financialEvents.affordabilityExpenseReversalEventList).to.be.a(SellingPartnerApiForFinances.AffordabilityExpenseEventList);
                    expect(data.payload.financialEvents.removalShipmentEventList).to.be.a(SellingPartnerApiForFinances.RemovalShipmentEventList);
                    expect(data.payload.financialEvents.removalShipmentAdjustmentEventList).to.be.a(SellingPartnerApiForFinances.RemovalShipmentAdjustmentEventList);
                    expect(data.payload.financialEvents.trialShipmentEventList).to.be.a(SellingPartnerApiForFinances.TrialShipmentEventList);
                    expect(data.payload.financialEvents.tDSReimbursementEventList).to.be.a(SellingPartnerApiForFinances.TDSReimbursementEventList);
                    expect(data.payload.financialEvents.adhocDisbursementEventList).to.be.a(SellingPartnerApiForFinances.AdhocDisbursementEventList);
                    expect(data.payload.financialEvents.taxWithholdingEventList).to.be.a(SellingPartnerApiForFinances.TaxWithholdingEventList);
                    expect(data.payload.financialEvents.chargeRefundEventList).to.be.a(SellingPartnerApiForFinances.ChargeRefundEventList);
                    expect(data.payload.financialEvents.failedAdhocDisbursementEventList).to.be.a(SellingPartnerApiForFinances.FailedAdhocDisbursementEventList);
                    expect(data.payload.financialEvents.valueAddedServiceChargeEventList).to.be.a(SellingPartnerApiForFinances.ValueAddedServiceChargeEventList);
                    expect(data.payload.financialEvents.capacityReservationBillingEventList).to.be.a(SellingPartnerApiForFinances.CapacityReservationBillingEventList);
        
            expect(data.errors).to.be.a(SellingPartnerApiForFinances.ErrorList);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listFinancialEventsByGroupId', function() {
        it('should call listFinancialEventsByGroupId successfully', function(done) {
          // TODO: uncomment, update parameter values for listFinancialEventsByGroupId call and complete the assertions
          /*
          var eventGroupId = "eventGroupId_example";
          var opts = {};
          opts.maxResultsPerPage = 100;
          opts.postedAfter = new Date("2013-10-20T19:20:30+01:00");
          opts.postedBefore = new Date("2013-10-20T19:20:30+01:00");
          opts.nextToken = "nextToken_example";

          instance.listFinancialEventsByGroupId(eventGroupId, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForFinances.ListFinancialEventsResponse);
            expect(data.payload).to.be.a(SellingPartnerApiForFinances.ListFinancialEventsPayload);
                  expect(data.payload.nextToken).to.be.a('string');
              // expect(data.payload.nextToken).to.be("");
              expect(data.payload.financialEvents).to.be.a(SellingPartnerApiForFinances.FinancialEvents);
                    expect(data.payload.financialEvents.shipmentEventList).to.be.a(SellingPartnerApiForFinances.ShipmentEventList);
                    expect(data.payload.financialEvents.shipmentSettleEventList).to.be.a(SellingPartnerApiForFinances.ShipmentSettleEventList);
                    expect(data.payload.financialEvents.refundEventList).to.be.a(SellingPartnerApiForFinances.ShipmentEventList);
                    expect(data.payload.financialEvents.guaranteeClaimEventList).to.be.a(SellingPartnerApiForFinances.ShipmentEventList);
                    expect(data.payload.financialEvents.chargebackEventList).to.be.a(SellingPartnerApiForFinances.ShipmentEventList);
                    expect(data.payload.financialEvents.payWithAmazonEventList).to.be.a(SellingPartnerApiForFinances.PayWithAmazonEventList);
                    expect(data.payload.financialEvents.serviceProviderCreditEventList).to.be.a(SellingPartnerApiForFinances.SolutionProviderCreditEventList);
                    expect(data.payload.financialEvents.retrochargeEventList).to.be.a(SellingPartnerApiForFinances.RetrochargeEventList);
                    expect(data.payload.financialEvents.rentalTransactionEventList).to.be.a(SellingPartnerApiForFinances.RentalTransactionEventList);
                    expect(data.payload.financialEvents.productAdsPaymentEventList).to.be.a(SellingPartnerApiForFinances.ProductAdsPaymentEventList);
                    expect(data.payload.financialEvents.serviceFeeEventList).to.be.a(SellingPartnerApiForFinances.ServiceFeeEventList);
                    expect(data.payload.financialEvents.sellerDealPaymentEventList).to.be.a(SellingPartnerApiForFinances.SellerDealPaymentEventList);
                    expect(data.payload.financialEvents.debtRecoveryEventList).to.be.a(SellingPartnerApiForFinances.DebtRecoveryEventList);
                    expect(data.payload.financialEvents.loanServicingEventList).to.be.a(SellingPartnerApiForFinances.LoanServicingEventList);
                    expect(data.payload.financialEvents.adjustmentEventList).to.be.a(SellingPartnerApiForFinances.AdjustmentEventList);
                    expect(data.payload.financialEvents.sAFETReimbursementEventList).to.be.a(SellingPartnerApiForFinances.SAFETReimbursementEventList);
                    expect(data.payload.financialEvents.sellerReviewEnrollmentPaymentEventList).to.be.a(SellingPartnerApiForFinances.SellerReviewEnrollmentPaymentEventList);
                    expect(data.payload.financialEvents.fBALiquidationEventList).to.be.a(SellingPartnerApiForFinances.FBALiquidationEventList);
                    expect(data.payload.financialEvents.couponPaymentEventList).to.be.a(SellingPartnerApiForFinances.CouponPaymentEventList);
                    expect(data.payload.financialEvents.imagingServicesFeeEventList).to.be.a(SellingPartnerApiForFinances.ImagingServicesFeeEventList);
                    expect(data.payload.financialEvents.networkComminglingTransactionEventList).to.be.a(SellingPartnerApiForFinances.NetworkComminglingTransactionEventList);
                    expect(data.payload.financialEvents.affordabilityExpenseEventList).to.be.a(SellingPartnerApiForFinances.AffordabilityExpenseEventList);
                    expect(data.payload.financialEvents.affordabilityExpenseReversalEventList).to.be.a(SellingPartnerApiForFinances.AffordabilityExpenseEventList);
                    expect(data.payload.financialEvents.removalShipmentEventList).to.be.a(SellingPartnerApiForFinances.RemovalShipmentEventList);
                    expect(data.payload.financialEvents.removalShipmentAdjustmentEventList).to.be.a(SellingPartnerApiForFinances.RemovalShipmentAdjustmentEventList);
                    expect(data.payload.financialEvents.trialShipmentEventList).to.be.a(SellingPartnerApiForFinances.TrialShipmentEventList);
                    expect(data.payload.financialEvents.tDSReimbursementEventList).to.be.a(SellingPartnerApiForFinances.TDSReimbursementEventList);
                    expect(data.payload.financialEvents.adhocDisbursementEventList).to.be.a(SellingPartnerApiForFinances.AdhocDisbursementEventList);
                    expect(data.payload.financialEvents.taxWithholdingEventList).to.be.a(SellingPartnerApiForFinances.TaxWithholdingEventList);
                    expect(data.payload.financialEvents.chargeRefundEventList).to.be.a(SellingPartnerApiForFinances.ChargeRefundEventList);
                    expect(data.payload.financialEvents.failedAdhocDisbursementEventList).to.be.a(SellingPartnerApiForFinances.FailedAdhocDisbursementEventList);
                    expect(data.payload.financialEvents.valueAddedServiceChargeEventList).to.be.a(SellingPartnerApiForFinances.ValueAddedServiceChargeEventList);
                    expect(data.payload.financialEvents.capacityReservationBillingEventList).to.be.a(SellingPartnerApiForFinances.CapacityReservationBillingEventList);
        
            expect(data.errors).to.be.a(SellingPartnerApiForFinances.ErrorList);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listFinancialEventsByOrderId', function() {
        it('should call listFinancialEventsByOrderId successfully', function(done) {
          // TODO: uncomment, update parameter values for listFinancialEventsByOrderId call and complete the assertions
          /*
          var orderId = "orderId_example";
          var opts = {};
          opts.maxResultsPerPage = 100;
          opts.nextToken = "nextToken_example";

          instance.listFinancialEventsByOrderId(orderId, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForFinances.ListFinancialEventsResponse);
            expect(data.payload).to.be.a(SellingPartnerApiForFinances.ListFinancialEventsPayload);
                  expect(data.payload.nextToken).to.be.a('string');
              // expect(data.payload.nextToken).to.be("");
              expect(data.payload.financialEvents).to.be.a(SellingPartnerApiForFinances.FinancialEvents);
                    expect(data.payload.financialEvents.shipmentEventList).to.be.a(SellingPartnerApiForFinances.ShipmentEventList);
                    expect(data.payload.financialEvents.shipmentSettleEventList).to.be.a(SellingPartnerApiForFinances.ShipmentSettleEventList);
                    expect(data.payload.financialEvents.refundEventList).to.be.a(SellingPartnerApiForFinances.ShipmentEventList);
                    expect(data.payload.financialEvents.guaranteeClaimEventList).to.be.a(SellingPartnerApiForFinances.ShipmentEventList);
                    expect(data.payload.financialEvents.chargebackEventList).to.be.a(SellingPartnerApiForFinances.ShipmentEventList);
                    expect(data.payload.financialEvents.payWithAmazonEventList).to.be.a(SellingPartnerApiForFinances.PayWithAmazonEventList);
                    expect(data.payload.financialEvents.serviceProviderCreditEventList).to.be.a(SellingPartnerApiForFinances.SolutionProviderCreditEventList);
                    expect(data.payload.financialEvents.retrochargeEventList).to.be.a(SellingPartnerApiForFinances.RetrochargeEventList);
                    expect(data.payload.financialEvents.rentalTransactionEventList).to.be.a(SellingPartnerApiForFinances.RentalTransactionEventList);
                    expect(data.payload.financialEvents.productAdsPaymentEventList).to.be.a(SellingPartnerApiForFinances.ProductAdsPaymentEventList);
                    expect(data.payload.financialEvents.serviceFeeEventList).to.be.a(SellingPartnerApiForFinances.ServiceFeeEventList);
                    expect(data.payload.financialEvents.sellerDealPaymentEventList).to.be.a(SellingPartnerApiForFinances.SellerDealPaymentEventList);
                    expect(data.payload.financialEvents.debtRecoveryEventList).to.be.a(SellingPartnerApiForFinances.DebtRecoveryEventList);
                    expect(data.payload.financialEvents.loanServicingEventList).to.be.a(SellingPartnerApiForFinances.LoanServicingEventList);
                    expect(data.payload.financialEvents.adjustmentEventList).to.be.a(SellingPartnerApiForFinances.AdjustmentEventList);
                    expect(data.payload.financialEvents.sAFETReimbursementEventList).to.be.a(SellingPartnerApiForFinances.SAFETReimbursementEventList);
                    expect(data.payload.financialEvents.sellerReviewEnrollmentPaymentEventList).to.be.a(SellingPartnerApiForFinances.SellerReviewEnrollmentPaymentEventList);
                    expect(data.payload.financialEvents.fBALiquidationEventList).to.be.a(SellingPartnerApiForFinances.FBALiquidationEventList);
                    expect(data.payload.financialEvents.couponPaymentEventList).to.be.a(SellingPartnerApiForFinances.CouponPaymentEventList);
                    expect(data.payload.financialEvents.imagingServicesFeeEventList).to.be.a(SellingPartnerApiForFinances.ImagingServicesFeeEventList);
                    expect(data.payload.financialEvents.networkComminglingTransactionEventList).to.be.a(SellingPartnerApiForFinances.NetworkComminglingTransactionEventList);
                    expect(data.payload.financialEvents.affordabilityExpenseEventList).to.be.a(SellingPartnerApiForFinances.AffordabilityExpenseEventList);
                    expect(data.payload.financialEvents.affordabilityExpenseReversalEventList).to.be.a(SellingPartnerApiForFinances.AffordabilityExpenseEventList);
                    expect(data.payload.financialEvents.removalShipmentEventList).to.be.a(SellingPartnerApiForFinances.RemovalShipmentEventList);
                    expect(data.payload.financialEvents.removalShipmentAdjustmentEventList).to.be.a(SellingPartnerApiForFinances.RemovalShipmentAdjustmentEventList);
                    expect(data.payload.financialEvents.trialShipmentEventList).to.be.a(SellingPartnerApiForFinances.TrialShipmentEventList);
                    expect(data.payload.financialEvents.tDSReimbursementEventList).to.be.a(SellingPartnerApiForFinances.TDSReimbursementEventList);
                    expect(data.payload.financialEvents.adhocDisbursementEventList).to.be.a(SellingPartnerApiForFinances.AdhocDisbursementEventList);
                    expect(data.payload.financialEvents.taxWithholdingEventList).to.be.a(SellingPartnerApiForFinances.TaxWithholdingEventList);
                    expect(data.payload.financialEvents.chargeRefundEventList).to.be.a(SellingPartnerApiForFinances.ChargeRefundEventList);
                    expect(data.payload.financialEvents.failedAdhocDisbursementEventList).to.be.a(SellingPartnerApiForFinances.FailedAdhocDisbursementEventList);
                    expect(data.payload.financialEvents.valueAddedServiceChargeEventList).to.be.a(SellingPartnerApiForFinances.ValueAddedServiceChargeEventList);
                    expect(data.payload.financialEvents.capacityReservationBillingEventList).to.be.a(SellingPartnerApiForFinances.CapacityReservationBillingEventList);
        
            expect(data.errors).to.be.a(SellingPartnerApiForFinances.ErrorList);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
