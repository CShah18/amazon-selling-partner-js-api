/*
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * OpenAPI spec version: 2022-11-07
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
    define(['expect.js', '../../../src/replenishment-2022-11-07/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/replenishment-2022-11-07/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForReplenishment);
  }
}(this, function(expect, SellingPartnerApiForReplenishment) {
  'use strict';

  var instance;

  describe('replenishment-2022-11-07', function() {
    describe('Metric', function() {
      beforeEach(function() {
        instance = SellingPartnerApiForReplenishment.Metric;
      });

      it('should create an instance of Metric', function() {
        // TODO: update the code to test Metric
        expect(instance).to.be.a('object');
      });

      it('should have the property SHIPPED_SUBSCRIPTION_UNITS', function() {
        expect(instance).to.have.property('SHIPPED_SUBSCRIPTION_UNITS');
        expect(instance.SHIPPED_SUBSCRIPTION_UNITS).to.be("SHIPPED_SUBSCRIPTION_UNITS");
      });

      it('should have the property TOTAL_SUBSCRIPTIONS_REVENUE', function() {
        expect(instance).to.have.property('TOTAL_SUBSCRIPTIONS_REVENUE');
        expect(instance.TOTAL_SUBSCRIPTIONS_REVENUE).to.be("TOTAL_SUBSCRIPTIONS_REVENUE");
      });

      it('should have the property ACTIVE_SUBSCRIPTIONS', function() {
        expect(instance).to.have.property('ACTIVE_SUBSCRIPTIONS');
        expect(instance.ACTIVE_SUBSCRIPTIONS).to.be("ACTIVE_SUBSCRIPTIONS");
      });

      it('should have the property NOT_DELIVERED_DUE_TO_OOS', function() {
        expect(instance).to.have.property('NOT_DELIVERED_DUE_TO_OOS');
        expect(instance.NOT_DELIVERED_DUE_TO_OOS).to.be("NOT_DELIVERED_DUE_TO_OOS");
      });

      it('should have the property SUBSCRIBER_NON_SUBSCRIBER_AVERAGE_REVENUE', function() {
        expect(instance).to.have.property('SUBSCRIBER_NON_SUBSCRIBER_AVERAGE_REVENUE');
        expect(instance.SUBSCRIBER_NON_SUBSCRIBER_AVERAGE_REVENUE).to.be("SUBSCRIBER_NON_SUBSCRIBER_AVERAGE_REVENUE");
      });

      it('should have the property LOST_REVENUE_DUE_TO_OOS', function() {
        expect(instance).to.have.property('LOST_REVENUE_DUE_TO_OOS');
        expect(instance.LOST_REVENUE_DUE_TO_OOS).to.be("LOST_REVENUE_DUE_TO_OOS");
      });

      it('should have the property SUBSCRIBER_NON_SUBSCRIBER_AVERAGE_REORDERS', function() {
        expect(instance).to.have.property('SUBSCRIBER_NON_SUBSCRIBER_AVERAGE_REORDERS');
        expect(instance.SUBSCRIBER_NON_SUBSCRIBER_AVERAGE_REORDERS).to.be("SUBSCRIBER_NON_SUBSCRIBER_AVERAGE_REORDERS");
      });

      it('should have the property COUPONS_REVENUE_PENETRATION', function() {
        expect(instance).to.have.property('COUPONS_REVENUE_PENETRATION');
        expect(instance.COUPONS_REVENUE_PENETRATION).to.be("COUPONS_REVENUE_PENETRATION");
      });

      it('should have the property REVENUE_BY_DELIVERIES', function() {
        expect(instance).to.have.property('REVENUE_BY_DELIVERIES');
        expect(instance.REVENUE_BY_DELIVERIES).to.be("REVENUE_BY_DELIVERIES");
      });

      it('should have the property SUBSCRIBER_RETENTION', function() {
        expect(instance).to.have.property('SUBSCRIBER_RETENTION');
        expect(instance.SUBSCRIBER_RETENTION).to.be("SUBSCRIBER_RETENTION");
      });

      it('should have the property REVENUE_PENETRATION_BY_SELLER_FUNDING', function() {
        expect(instance).to.have.property('REVENUE_PENETRATION_BY_SELLER_FUNDING');
        expect(instance.REVENUE_PENETRATION_BY_SELLER_FUNDING).to.be("REVENUE_PENETRATION_BY_SELLER_FUNDING");
      });

      it('should have the property SHARE_OF_COUPON_SUBSCRIPTIONS', function() {
        expect(instance).to.have.property('SHARE_OF_COUPON_SUBSCRIPTIONS');
        expect(instance.SHARE_OF_COUPON_SUBSCRIPTIONS).to.be("SHARE_OF_COUPON_SUBSCRIPTIONS");
      });

    });
  });

}));
