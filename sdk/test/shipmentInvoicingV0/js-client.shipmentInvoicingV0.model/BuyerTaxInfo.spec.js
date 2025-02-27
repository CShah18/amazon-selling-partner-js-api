/*
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
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
    define(['expect.js', '../../../src/shipmentInvoicingV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/shipmentInvoicingV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForShipmentInvoicing);
  }
}(this, function(expect, SellingPartnerApiForShipmentInvoicing) {
  'use strict';

  var instance;

  describe('shipmentInvoicingV0', function() {
    describe('BuyerTaxInfo', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForShipmentInvoicing.BuyerTaxInfo();
      });

      it('should create an instance of BuyerTaxInfo', function() {
        // TODO: update the code to test BuyerTaxInfo
        expect(instance).to.be.a(SellingPartnerApiForShipmentInvoicing.BuyerTaxInfo);
      });

      it('should have the property companyLegalName (base name: "CompanyLegalName")', function() {
        // TODO: update the code to test the property companyLegalName
        expect(instance).to.have.property('companyLegalName');
        // expect(instance.companyLegalName).to.be(expectedValueLiteral);
      });

      it('should have the property taxingRegion (base name: "TaxingRegion")', function() {
        // TODO: update the code to test the property taxingRegion
        expect(instance).to.have.property('taxingRegion');
        // expect(instance.taxingRegion).to.be(expectedValueLiteral);
      });

      it('should have the property taxClassifications (base name: "TaxClassifications")', function() {
        // TODO: update the code to test the property taxClassifications
        expect(instance).to.have.property('taxClassifications');
        // expect(instance.taxClassifications).to.be(expectedValueLiteral);
      });

    });
  });

}));
