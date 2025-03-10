/*
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * OpenAPI spec version: v2
 * Contact: swa-api-core@amazon.com
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
    define(['expect.js', '../../../src/shippingV2/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/shippingV2/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AmazonShippingApi);
  }
}(this, function(expect, AmazonShippingApi) {
  'use strict';

  var instance;

  describe('shippingV2', function() {
    describe('RateItemID', function() {
      beforeEach(function() {
        instance = AmazonShippingApi.RateItemID;
      });

      it('should create an instance of RateItemID', function() {
        // TODO: update the code to test RateItemID
        expect(instance).to.be.a('object');
      });

      it('should have the property BASE_RATE', function() {
        expect(instance).to.have.property('BASE_RATE');
        expect(instance.BASE_RATE).to.be("BASE_RATE");
      });

      it('should have the property TRANSACTION_FEE', function() {
        expect(instance).to.have.property('TRANSACTION_FEE');
        expect(instance.TRANSACTION_FEE).to.be("TRANSACTION_FEE");
      });

      it('should have the property ADULT_SIGNATURE_CONFIRMATION', function() {
        expect(instance).to.have.property('ADULT_SIGNATURE_CONFIRMATION');
        expect(instance.ADULT_SIGNATURE_CONFIRMATION).to.be("ADULT_SIGNATURE_CONFIRMATION");
      });

      it('should have the property SIGNATURE_CONFIRMATION', function() {
        expect(instance).to.have.property('SIGNATURE_CONFIRMATION');
        expect(instance.SIGNATURE_CONFIRMATION).to.be("SIGNATURE_CONFIRMATION");
      });

      it('should have the property NO_CONFIRMATION', function() {
        expect(instance).to.have.property('NO_CONFIRMATION');
        expect(instance.NO_CONFIRMATION).to.be("NO_CONFIRMATION");
      });

      it('should have the property WAIVE_SIGNATURE', function() {
        expect(instance).to.have.property('WAIVE_SIGNATURE');
        expect(instance.WAIVE_SIGNATURE).to.be("WAIVE_SIGNATURE");
      });

      it('should have the property IMPLIED_LIABILITY', function() {
        expect(instance).to.have.property('IMPLIED_LIABILITY');
        expect(instance.IMPLIED_LIABILITY).to.be("IMPLIED_LIABILITY");
      });

      it('should have the property HIDDEN_POSTAGE', function() {
        expect(instance).to.have.property('HIDDEN_POSTAGE');
        expect(instance.HIDDEN_POSTAGE).to.be("HIDDEN_POSTAGE");
      });

      it('should have the property DECLARED_VALUE', function() {
        expect(instance).to.have.property('DECLARED_VALUE');
        expect(instance.DECLARED_VALUE).to.be("DECLARED_VALUE");
      });

      it('should have the property SUNDAY_HOLIDAY_DELIVERY', function() {
        expect(instance).to.have.property('SUNDAY_HOLIDAY_DELIVERY');
        expect(instance.SUNDAY_HOLIDAY_DELIVERY).to.be("SUNDAY_HOLIDAY_DELIVERY");
      });

      it('should have the property DELIVERY_CONFIRMATION', function() {
        expect(instance).to.have.property('DELIVERY_CONFIRMATION');
        expect(instance.DELIVERY_CONFIRMATION).to.be("DELIVERY_CONFIRMATION");
      });

      it('should have the property IMPORT_DUTY_CHARGE', function() {
        expect(instance).to.have.property('IMPORT_DUTY_CHARGE');
        expect(instance.IMPORT_DUTY_CHARGE).to.be("IMPORT_DUTY_CHARGE");
      });

      it('should have the property VAT', function() {
        expect(instance).to.have.property('VAT');
        expect(instance.VAT).to.be("VAT");
      });

      it('should have the property NO_SATURDAY_DELIVERY', function() {
        expect(instance).to.have.property('NO_SATURDAY_DELIVERY');
        expect(instance.NO_SATURDAY_DELIVERY).to.be("NO_SATURDAY_DELIVERY");
      });

      it('should have the property INSURANCE', function() {
        expect(instance).to.have.property('INSURANCE');
        expect(instance.INSURANCE).to.be("INSURANCE");
      });

      it('should have the property COD', function() {
        expect(instance).to.have.property('COD');
        expect(instance.COD).to.be("COD");
      });

      it('should have the property FUEL_SURCHARGE', function() {
        expect(instance).to.have.property('FUEL_SURCHARGE');
        expect(instance.FUEL_SURCHARGE).to.be("FUEL_SURCHARGE");
      });

      it('should have the property INSPECTION_CHARGE', function() {
        expect(instance).to.have.property('INSPECTION_CHARGE');
        expect(instance.INSPECTION_CHARGE).to.be("INSPECTION_CHARGE");
      });

      it('should have the property DELIVERY_AREA_SURCHARGE', function() {
        expect(instance).to.have.property('DELIVERY_AREA_SURCHARGE');
        expect(instance.DELIVERY_AREA_SURCHARGE).to.be("DELIVERY_AREA_SURCHARGE");
      });

      it('should have the property WAYBILL_CHARGE', function() {
        expect(instance).to.have.property('WAYBILL_CHARGE');
        expect(instance.WAYBILL_CHARGE).to.be("WAYBILL_CHARGE");
      });

      it('should have the property AMAZON_SPONSORED_DISCOUNT', function() {
        expect(instance).to.have.property('AMAZON_SPONSORED_DISCOUNT');
        expect(instance.AMAZON_SPONSORED_DISCOUNT).to.be("AMAZON_SPONSORED_DISCOUNT");
      });

      it('should have the property INTEGRATOR_SPONSORED_DISCOUNT', function() {
        expect(instance).to.have.property('INTEGRATOR_SPONSORED_DISCOUNT');
        expect(instance.INTEGRATOR_SPONSORED_DISCOUNT).to.be("INTEGRATOR_SPONSORED_DISCOUNT");
      });

      it('should have the property OVERSIZE_SURCHARGE', function() {
        expect(instance).to.have.property('OVERSIZE_SURCHARGE');
        expect(instance.OVERSIZE_SURCHARGE).to.be("OVERSIZE_SURCHARGE");
      });

      it('should have the property CONGESTION_CHARGE', function() {
        expect(instance).to.have.property('CONGESTION_CHARGE');
        expect(instance.CONGESTION_CHARGE).to.be("CONGESTION_CHARGE");
      });

      it('should have the property RESIDENTIAL_SURCHARGE', function() {
        expect(instance).to.have.property('RESIDENTIAL_SURCHARGE');
        expect(instance.RESIDENTIAL_SURCHARGE).to.be("RESIDENTIAL_SURCHARGE");
      });

      it('should have the property ADDITIONAL_SURCHARGE', function() {
        expect(instance).to.have.property('ADDITIONAL_SURCHARGE');
        expect(instance.ADDITIONAL_SURCHARGE).to.be("ADDITIONAL_SURCHARGE");
      });

      it('should have the property SURCHARGE', function() {
        expect(instance).to.have.property('SURCHARGE');
        expect(instance.SURCHARGE).to.be("SURCHARGE");
      });

      it('should have the property REBATE', function() {
        expect(instance).to.have.property('REBATE');
        expect(instance.REBATE).to.be("REBATE");
      });

    });
  });

}));
