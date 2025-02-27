/*
 * Feeds v2021-06-30
 * The Selling Partner API for Feeds lets you upload data to Amazon on behalf of a selling partner.
 *
 * OpenAPI spec version: 2021-06-30
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
    define(['expect.js', '../../../src/feeds_2021-06-30/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/feeds_2021-06-30/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FeedsV20210630);
  }
}(this, function(expect, FeedsV20210630) {
  'use strict';

  var instance;

  describe('feeds_2021-06-30', function() {
    describe('CreateFeedResponse', function() {
      beforeEach(function() {
        instance = new FeedsV20210630.CreateFeedResponse();
      });

      it('should create an instance of CreateFeedResponse', function() {
        // TODO: update the code to test CreateFeedResponse
        expect(instance).to.be.a(FeedsV20210630.CreateFeedResponse);
      });

      it('should have the property feedId (base name: "feedId")', function() {
        // TODO: update the code to test the property feedId
        expect(instance).to.have.property('feedId');
        // expect(instance.feedId).to.be(expectedValueLiteral);
      });

    });
  });

}));
