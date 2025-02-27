/*
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
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
    define(['expect.js', '../../../src/fulfillmentInbound_2024-03-20/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/fulfillmentInbound_2024-03-20/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TheSellingPartnerApiForFbaInboundOperations);
  }
}(this, function(expect, TheSellingPartnerApiForFbaInboundOperations) {
  'use strict';

  var instance;

  describe('fulfillmentInbound_2024-03-20', function() {
    describe('CreateMarketplaceItemLabelsRequest', function() {
      beforeEach(function() {
        instance = new TheSellingPartnerApiForFbaInboundOperations.CreateMarketplaceItemLabelsRequest();
      });

      it('should create an instance of CreateMarketplaceItemLabelsRequest', function() {
        // TODO: update the code to test CreateMarketplaceItemLabelsRequest
        expect(instance).to.be.a(TheSellingPartnerApiForFbaInboundOperations.CreateMarketplaceItemLabelsRequest);
      });

      it('should have the property height (base name: "height")', function() {
        // TODO: update the code to test the property height
        expect(instance).to.have.property('height');
        // expect(instance.height).to.be(expectedValueLiteral);
      });

      it('should have the property labelType (base name: "labelType")', function() {
        // TODO: update the code to test the property labelType
        expect(instance).to.have.property('labelType');
        // expect(instance.labelType).to.be(expectedValueLiteral);
      });

      it('should have the property localeCode (base name: "localeCode")', function() {
        // TODO: update the code to test the property localeCode
        expect(instance).to.have.property('localeCode');
        // expect(instance.localeCode).to.be(expectedValueLiteral);
      });

      it('should have the property marketplaceId (base name: "marketplaceId")', function() {
        // TODO: update the code to test the property marketplaceId
        expect(instance).to.have.property('marketplaceId');
        // expect(instance.marketplaceId).to.be(expectedValueLiteral);
      });

      it('should have the property mskuQuantities (base name: "mskuQuantities")', function() {
        // TODO: update the code to test the property mskuQuantities
        expect(instance).to.have.property('mskuQuantities');
        // expect(instance.mskuQuantities).to.be(expectedValueLiteral);
      });

      it('should have the property pageType (base name: "pageType")', function() {
        // TODO: update the code to test the property pageType
        expect(instance).to.have.property('pageType');
        // expect(instance.pageType).to.be(expectedValueLiteral);
      });

      it('should have the property width (base name: "width")', function() {
        // TODO: update the code to test the property width
        expect(instance).to.have.property('width');
        // expect(instance.width).to.be(expectedValueLiteral);
      });

    });
  });

}));
