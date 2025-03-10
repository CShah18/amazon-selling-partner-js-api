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
    describe('RemovalShipmentItem', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForFinances.RemovalShipmentItem();
      });

      it('should create an instance of RemovalShipmentItem', function() {
        // TODO: update the code to test RemovalShipmentItem
        expect(instance).to.be.a(SellingPartnerApiForFinances.RemovalShipmentItem);
      });

      it('should have the property removalShipmentItemId (base name: "RemovalShipmentItemId")', function() {
        // TODO: update the code to test the property removalShipmentItemId
        expect(instance).to.have.property('removalShipmentItemId');
        // expect(instance.removalShipmentItemId).to.be(expectedValueLiteral);
      });

      it('should have the property taxCollectionModel (base name: "TaxCollectionModel")', function() {
        // TODO: update the code to test the property taxCollectionModel
        expect(instance).to.have.property('taxCollectionModel');
        // expect(instance.taxCollectionModel).to.be(expectedValueLiteral);
      });

      it('should have the property fulfillmentNetworkSKU (base name: "FulfillmentNetworkSKU")', function() {
        // TODO: update the code to test the property fulfillmentNetworkSKU
        expect(instance).to.have.property('fulfillmentNetworkSKU');
        // expect(instance.fulfillmentNetworkSKU).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "Quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property revenue (base name: "Revenue")', function() {
        // TODO: update the code to test the property revenue
        expect(instance).to.have.property('revenue');
        // expect(instance.revenue).to.be(expectedValueLiteral);
      });

      it('should have the property feeAmount (base name: "FeeAmount")', function() {
        // TODO: update the code to test the property feeAmount
        expect(instance).to.have.property('feeAmount');
        // expect(instance.feeAmount).to.be(expectedValueLiteral);
      });

      it('should have the property taxAmount (base name: "TaxAmount")', function() {
        // TODO: update the code to test the property taxAmount
        expect(instance).to.have.property('taxAmount');
        // expect(instance.taxAmount).to.be(expectedValueLiteral);
      });

      it('should have the property taxWithheld (base name: "TaxWithheld")', function() {
        // TODO: update the code to test the property taxWithheld
        expect(instance).to.have.property('taxWithheld');
        // expect(instance.taxWithheld).to.be(expectedValueLiteral);
      });

    });
  });

}));
