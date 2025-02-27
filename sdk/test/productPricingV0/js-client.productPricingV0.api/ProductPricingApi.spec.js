/*
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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
    define(['expect.js', '../../../src/productPricingV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/productPricingV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForPricing);
  }
}(this, function(expect, SellingPartnerApiForPricing) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForPricing.ProductPricingApi();
  });

  describe('productPricingV0', function() {
    describe('ProductPricingApi', function() {
      describe('getCompetitivePricing', function() {
        it('should call getCompetitivePricing successfully', function(done) {
          // TODO: uncomment, update parameter values for getCompetitivePricing call and complete the assertions
          /*
          var marketplaceId = "marketplaceId_example";
          var itemType = "itemType_example";
          var opts = {};
          opts.asins = ["asins_example"];
          opts.skus = ["skus_example"];
          opts.customerType = "customerType_example";

          instance.getCompetitivePricing(marketplaceId, itemType, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForPricing.GetPricingResponse);
            expect(data.payload).to.be.a(SellingPartnerApiForPricing.PriceList);
                expect(data.errors).to.be.a(SellingPartnerApiForPricing.ErrorList);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getItemOffers', function() {
        it('should call getItemOffers successfully', function(done) {
          // TODO: uncomment, update parameter values for getItemOffers call and complete the assertions
          /*
          var marketplaceId = "marketplaceId_example";
          var itemCondition = "itemCondition_example";
          var asin = "asin_example";
          var opts = {};
          opts.customerType = "customerType_example";

          instance.getItemOffers(marketplaceId, itemCondition, asin, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForPricing.GetOffersResponse);
            expect(data.payload).to.be.a(SellingPartnerApiForPricing.GetOffersResult);
                  expect(data.payload.marketplaceID).to.be.a('string');
              // expect(data.payload.marketplaceID).to.be("");
              expect(data.payload.ASIN).to.be.a('string');
              // expect(data.payload.ASIN).to.be("");
              expect(data.payload.SKU).to.be.a('string');
              // expect(data.payload.SKU).to.be("");
              expect(data.payload.itemCondition).to.be.a(SellingPartnerApiForPricing.ConditionType);
                  expect(data.payload.status).to.be.a('string');
              // expect(data.payload.status).to.be("");
              expect(data.payload.identifier).to.be.a(SellingPartnerApiForPricing.ItemIdentifier);
                    expect(data.payload.identifier.marketplaceId).to.be.a('string');
                // expect(data.payload.identifier.marketplaceId).to.be("");
                expect(data.payload.identifier.ASIN).to.be.a('string');
                // expect(data.payload.identifier.ASIN).to.be("");
                expect(data.payload.identifier.sellerSKU).to.be.a('string');
                // expect(data.payload.identifier.sellerSKU).to.be("");
                expect(data.payload.identifier.itemCondition).to.be.a(SellingPartnerApiForPricing.ConditionType);
        
              expect(data.payload.summary).to.be.a(SellingPartnerApiForPricing.Summary);
                    expect(data.payload.summary.totalOfferCount).to.be.a('number');
                // expect(data.payload.summary.totalOfferCount).to.be(0);
                expect(data.payload.summary.numberOfOffers).to.be.a(SellingPartnerApiForPricing.NumberOfOffers);
                    expect(data.payload.summary.lowestPrices).to.be.a(SellingPartnerApiForPricing.LowestPrices);
                    expect(data.payload.summary.buyBoxPrices).to.be.a(SellingPartnerApiForPricing.BuyBoxPrices);
                    expect(data.payload.summary.listPrice).to.be.a(SellingPartnerApiForPricing.MoneyType);
                      expect(data.payload.summary.listPrice.currencyCode).to.be.a('string');
                  // expect(data.payload.summary.listPrice.currencyCode).to.be("");
                  expect(data.payload.summary.listPrice.amount).to.be.a('number');
                  // expect(data.payload.summary.listPrice.amount).to.be();
                expect(data.payload.summary.competitivePriceThreshold).to.be.a(SellingPartnerApiForPricing.MoneyType);
                      expect(data.payload.summary.competitivePriceThreshold.currencyCode).to.be.a('string');
                  // expect(data.payload.summary.competitivePriceThreshold.currencyCode).to.be("");
                  expect(data.payload.summary.competitivePriceThreshold.amount).to.be.a('number');
                  // expect(data.payload.summary.competitivePriceThreshold.amount).to.be();
                expect(data.payload.summary.suggestedLowerPricePlusShipping).to.be.a(SellingPartnerApiForPricing.MoneyType);
                      expect(data.payload.summary.suggestedLowerPricePlusShipping.currencyCode).to.be.a('string');
                  // expect(data.payload.summary.suggestedLowerPricePlusShipping.currencyCode).to.be("");
                  expect(data.payload.summary.suggestedLowerPricePlusShipping.amount).to.be.a('number');
                  // expect(data.payload.summary.suggestedLowerPricePlusShipping.amount).to.be();
                expect(data.payload.summary.salesRankings).to.be.a(SellingPartnerApiForPricing.SalesRankList);
                    expect(data.payload.summary.buyBoxEligibleOffers).to.be.a(SellingPartnerApiForPricing.BuyBoxEligibleOffers);
                    expect(data.payload.summary.offersAvailableTime).to.be.a(Date);
                // expect(data.payload.summary.offersAvailableTime).to.be(new Date());
              expect(data.payload.offers).to.be.a(SellingPartnerApiForPricing.OfferDetailList);
      
            expect(data.errors).to.be.a(SellingPartnerApiForPricing.ErrorList);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getItemOffersBatch', function() {
        it('should call getItemOffersBatch successfully', function(done) {
          // TODO: uncomment, update parameter values for getItemOffersBatch call and complete the assertions
          /*
          var getItemOffersBatchRequestBody = new SellingPartnerApiForPricing.GetItemOffersBatchRequest();
          getItemOffersBatchRequestBody.requests = new SellingPartnerApiForPricing.ItemOffersRequestList();

          instance.getItemOffersBatch(getItemOffersBatchRequestBody).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForPricing.GetItemOffersBatchResponse);
            expect(data.responses).to.be.a(SellingPartnerApiForPricing.ItemOffersResponseList);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getListingOffers', function() {
        it('should call getListingOffers successfully', function(done) {
          // TODO: uncomment, update parameter values for getListingOffers call and complete the assertions
          /*
          var marketplaceId = "marketplaceId_example";
          var itemCondition = "itemCondition_example";
          var sellerSKU = "sellerSKU_example";
          var opts = {};
          opts.customerType = "customerType_example";

          instance.getListingOffers(marketplaceId, itemCondition, sellerSKU, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForPricing.GetOffersResponse);
            expect(data.payload).to.be.a(SellingPartnerApiForPricing.GetOffersResult);
                  expect(data.payload.marketplaceID).to.be.a('string');
              // expect(data.payload.marketplaceID).to.be("");
              expect(data.payload.ASIN).to.be.a('string');
              // expect(data.payload.ASIN).to.be("");
              expect(data.payload.SKU).to.be.a('string');
              // expect(data.payload.SKU).to.be("");
              expect(data.payload.itemCondition).to.be.a(SellingPartnerApiForPricing.ConditionType);
                  expect(data.payload.status).to.be.a('string');
              // expect(data.payload.status).to.be("");
              expect(data.payload.identifier).to.be.a(SellingPartnerApiForPricing.ItemIdentifier);
                    expect(data.payload.identifier.marketplaceId).to.be.a('string');
                // expect(data.payload.identifier.marketplaceId).to.be("");
                expect(data.payload.identifier.ASIN).to.be.a('string');
                // expect(data.payload.identifier.ASIN).to.be("");
                expect(data.payload.identifier.sellerSKU).to.be.a('string');
                // expect(data.payload.identifier.sellerSKU).to.be("");
                expect(data.payload.identifier.itemCondition).to.be.a(SellingPartnerApiForPricing.ConditionType);
        
              expect(data.payload.summary).to.be.a(SellingPartnerApiForPricing.Summary);
                    expect(data.payload.summary.totalOfferCount).to.be.a('number');
                // expect(data.payload.summary.totalOfferCount).to.be(0);
                expect(data.payload.summary.numberOfOffers).to.be.a(SellingPartnerApiForPricing.NumberOfOffers);
                    expect(data.payload.summary.lowestPrices).to.be.a(SellingPartnerApiForPricing.LowestPrices);
                    expect(data.payload.summary.buyBoxPrices).to.be.a(SellingPartnerApiForPricing.BuyBoxPrices);
                    expect(data.payload.summary.listPrice).to.be.a(SellingPartnerApiForPricing.MoneyType);
                      expect(data.payload.summary.listPrice.currencyCode).to.be.a('string');
                  // expect(data.payload.summary.listPrice.currencyCode).to.be("");
                  expect(data.payload.summary.listPrice.amount).to.be.a('number');
                  // expect(data.payload.summary.listPrice.amount).to.be();
                expect(data.payload.summary.competitivePriceThreshold).to.be.a(SellingPartnerApiForPricing.MoneyType);
                      expect(data.payload.summary.competitivePriceThreshold.currencyCode).to.be.a('string');
                  // expect(data.payload.summary.competitivePriceThreshold.currencyCode).to.be("");
                  expect(data.payload.summary.competitivePriceThreshold.amount).to.be.a('number');
                  // expect(data.payload.summary.competitivePriceThreshold.amount).to.be();
                expect(data.payload.summary.suggestedLowerPricePlusShipping).to.be.a(SellingPartnerApiForPricing.MoneyType);
                      expect(data.payload.summary.suggestedLowerPricePlusShipping.currencyCode).to.be.a('string');
                  // expect(data.payload.summary.suggestedLowerPricePlusShipping.currencyCode).to.be("");
                  expect(data.payload.summary.suggestedLowerPricePlusShipping.amount).to.be.a('number');
                  // expect(data.payload.summary.suggestedLowerPricePlusShipping.amount).to.be();
                expect(data.payload.summary.salesRankings).to.be.a(SellingPartnerApiForPricing.SalesRankList);
                    expect(data.payload.summary.buyBoxEligibleOffers).to.be.a(SellingPartnerApiForPricing.BuyBoxEligibleOffers);
                    expect(data.payload.summary.offersAvailableTime).to.be.a(Date);
                // expect(data.payload.summary.offersAvailableTime).to.be(new Date());
              expect(data.payload.offers).to.be.a(SellingPartnerApiForPricing.OfferDetailList);
      
            expect(data.errors).to.be.a(SellingPartnerApiForPricing.ErrorList);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getListingOffersBatch', function() {
        it('should call getListingOffersBatch successfully', function(done) {
          // TODO: uncomment, update parameter values for getListingOffersBatch call and complete the assertions
          /*
          var getListingOffersBatchRequestBody = new SellingPartnerApiForPricing.GetListingOffersBatchRequest();
          getListingOffersBatchRequestBody.requests = new SellingPartnerApiForPricing.ListingOffersRequestList();

          instance.getListingOffersBatch(getListingOffersBatchRequestBody).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForPricing.GetListingOffersBatchResponse);
            expect(data.responses).to.be.a(SellingPartnerApiForPricing.ListingOffersResponseList);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getPricing', function() {
        it('should call getPricing successfully', function(done) {
          // TODO: uncomment, update parameter values for getPricing call and complete the assertions
          /*
          var marketplaceId = "marketplaceId_example";
          var itemType = "itemType_example";
          var opts = {};
          opts.asins = ["asins_example"];
          opts.skus = ["skus_example"];
          opts.itemCondition = "itemCondition_example";
          opts.offerType = "offerType_example";

          instance.getPricing(marketplaceId, itemType, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForPricing.GetPricingResponse);
            expect(data.payload).to.be.a(SellingPartnerApiForPricing.PriceList);
                expect(data.errors).to.be.a(SellingPartnerApiForPricing.ErrorList);
    
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
