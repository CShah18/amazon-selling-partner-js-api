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
    describe('ShipmentInvoiceStatus', function() {
      beforeEach(function() {
        instance = SellingPartnerApiForShipmentInvoicing.ShipmentInvoiceStatus;
      });

      it('should create an instance of ShipmentInvoiceStatus', function() {
        // TODO: update the code to test ShipmentInvoiceStatus
        expect(instance).to.be.a('object');
      });

      it('should have the property processing', function() {
        expect(instance).to.have.property('processing');
        expect(instance.processing).to.be("Processing");
      });

      it('should have the property accepted', function() {
        expect(instance).to.have.property('accepted');
        expect(instance.accepted).to.be("Accepted");
      });

      it('should have the property errored', function() {
        expect(instance).to.have.property('errored');
        expect(instance.errored).to.be("Errored");
      });

      it('should have the property notFound', function() {
        expect(instance).to.have.property('notFound');
        expect(instance.notFound).to.be("NotFound");
      });

    });
  });

}));
