/*
 * Selling Partner API for Listings Restrictions
 * The Selling Partner API for Listings Restrictions provides programmatic access to restrictions on Amazon catalog listings.  For more information, see the [Listings Restrictions API Use Case Guide](doc:listings-restrictions-api-v2021-08-01-use-case-guide).
 *
 * OpenAPI spec version: 2021-08-01
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
    define(['expect.js', '../../../src/listingsRestrictions_2021-08-01/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/listingsRestrictions_2021-08-01/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForListingsRestrictions);
  }
}(this, function(expect, SellingPartnerApiForListingsRestrictions) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForListingsRestrictions.ListingsApi();
  });

  describe('listingsRestrictions_2021-08-01', function() {
    describe('ListingsApi', function() {
      describe('getListingsRestrictions', function() {
        it('should call getListingsRestrictions successfully', function(done) {
          // TODO: uncomment, update parameter values for getListingsRestrictions call and complete the assertions
          /*
          var asin = "B0000ASIN1";
          var sellerId = "sellerId_example";
          var marketplaceIds = ["ATVPDKIKX0DER"];
          var opts = {};
          opts.conditionType = "used_very_good";
          opts.reasonLocale = "en_US";

          instance.getListingsRestrictions(asin, sellerId, marketplaceIds, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForListingsRestrictions.RestrictionList);
            {
              let dataCtr = data.restrictions;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SellingPartnerApiForListingsRestrictions.Restriction);
                expect(data.marketplaceId).to.be.a('string');
                // expect(data.marketplaceId).to.be("");
                expect(data.conditionType).to.be.a('string');
                // expect(data.conditionType).to.be("new_new");
                {
                  let dataCtr = data.reasons;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(SellingPartnerApiForListingsRestrictions.Reason);
                    expect(data.message).to.be.a('string');
                    // expect(data.message).to.be("");
                    expect(data.reasonCode).to.be.a('string');
                    // expect(data.reasonCode).to.be("APPROVAL_REQUIRED");
                    {
                      let dataCtr = data.links;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(SellingPartnerApiForListingsRestrictions.Link);
                        expect(data.resource).to.be.a('string');
                        // expect(data.resource).to.be("");
                        expect(data.verb).to.be.a('string');
                        // expect(data.verb).to.be("GET");
                        expect(data.title).to.be.a('string');
                        // expect(data.title).to.be("");
                        expect(data.type).to.be.a('string');
                        // expect(data.type).to.be("");
                      }
                    }
                  }
                }
              }
            }

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
