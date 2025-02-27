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
    describe('RentalTransactionEvent', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForFinances.RentalTransactionEvent();
      });

      it('should create an instance of RentalTransactionEvent', function() {
        // TODO: update the code to test RentalTransactionEvent
        expect(instance).to.be.a(SellingPartnerApiForFinances.RentalTransactionEvent);
      });

      it('should have the property amazonOrderId (base name: "AmazonOrderId")', function() {
        // TODO: update the code to test the property amazonOrderId
        expect(instance).to.have.property('amazonOrderId');
        // expect(instance.amazonOrderId).to.be(expectedValueLiteral);
      });

      it('should have the property rentalEventType (base name: "RentalEventType")', function() {
        // TODO: update the code to test the property rentalEventType
        expect(instance).to.have.property('rentalEventType');
        // expect(instance.rentalEventType).to.be(expectedValueLiteral);
      });

      it('should have the property extensionLength (base name: "ExtensionLength")', function() {
        // TODO: update the code to test the property extensionLength
        expect(instance).to.have.property('extensionLength');
        // expect(instance.extensionLength).to.be(expectedValueLiteral);
      });

      it('should have the property postedDate (base name: "PostedDate")', function() {
        // TODO: update the code to test the property postedDate
        expect(instance).to.have.property('postedDate');
        // expect(instance.postedDate).to.be(expectedValueLiteral);
      });

      it('should have the property rentalChargeList (base name: "RentalChargeList")', function() {
        // TODO: update the code to test the property rentalChargeList
        expect(instance).to.have.property('rentalChargeList');
        // expect(instance.rentalChargeList).to.be(expectedValueLiteral);
      });

      it('should have the property rentalFeeList (base name: "RentalFeeList")', function() {
        // TODO: update the code to test the property rentalFeeList
        expect(instance).to.have.property('rentalFeeList');
        // expect(instance.rentalFeeList).to.be(expectedValueLiteral);
      });

      it('should have the property marketplaceName (base name: "MarketplaceName")', function() {
        // TODO: update the code to test the property marketplaceName
        expect(instance).to.have.property('marketplaceName');
        // expect(instance.marketplaceName).to.be(expectedValueLiteral);
      });

      it('should have the property rentalInitialValue (base name: "RentalInitialValue")', function() {
        // TODO: update the code to test the property rentalInitialValue
        expect(instance).to.have.property('rentalInitialValue');
        // expect(instance.rentalInitialValue).to.be(expectedValueLiteral);
      });

      it('should have the property rentalReimbursement (base name: "RentalReimbursement")', function() {
        // TODO: update the code to test the property rentalReimbursement
        expect(instance).to.have.property('rentalReimbursement');
        // expect(instance.rentalReimbursement).to.be(expectedValueLiteral);
      });

      it('should have the property rentalTaxWithheldList (base name: "RentalTaxWithheldList")', function() {
        // TODO: update the code to test the property rentalTaxWithheldList
        expect(instance).to.have.property('rentalTaxWithheldList');
        // expect(instance.rentalTaxWithheldList).to.be(expectedValueLiteral);
      });

    });
  });

}));
