/*
 * Selling Partner API for Uploads
 * The Uploads API lets you upload files that you can programmatically access using other Selling Partner APIs, such as the A+ Content API and the Messaging API.
 *
 * OpenAPI spec version: 2020-11-01
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
    define(['expect.js', '../../../src/uploads_2020-11-01/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/uploads_2020-11-01/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForUploads);
  }
}(this, function(expect, SellingPartnerApiForUploads) {
  'use strict';

  var instance;

  describe('uploads_2020-11-01', function() {
    describe('CreateUploadDestinationResponse', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForUploads.CreateUploadDestinationResponse();
      });

      it('should create an instance of CreateUploadDestinationResponse', function() {
        // TODO: update the code to test CreateUploadDestinationResponse
        expect(instance).to.be.a(SellingPartnerApiForUploads.CreateUploadDestinationResponse);
      });

      it('should have the property payload (base name: "payload")', function() {
        // TODO: update the code to test the property payload
        expect(instance).to.have.property('payload');
        // expect(instance.payload).to.be(expectedValueLiteral);
      });

      it('should have the property errors (base name: "errors")', function() {
        // TODO: update the code to test the property errors
        expect(instance).to.have.property('errors');
        // expect(instance.errors).to.be(expectedValueLiteral);
      });

    });
  });

}));
