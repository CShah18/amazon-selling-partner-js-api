/*
 * Report v2021-06-30
 * The Selling Partner API for Reports lets you retrieve and manage a variety of reports that can help selling partners manage their businesses.
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
    define(['expect.js', '../../../src/reports_2021-06-30/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/reports_2021-06-30/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ReportV20210630);
  }
}(this, function(expect, ReportV20210630) {
  'use strict';

  var instance;

  describe('reports_2021-06-30', function() {
    describe('ErrorList', function() {
      beforeEach(function() {
        instance = new ReportV20210630.ErrorList();
      });

      it('should create an instance of ErrorList', function() {
        // TODO: update the code to test ErrorList
        expect(instance).to.be.a(ReportV20210630.ErrorList);
      });

      it('should have the property errors (base name: "errors")', function() {
        // TODO: update the code to test the property errors
        expect(instance).to.have.property('errors');
        // expect(instance.errors).to.be(expectedValueLiteral);
      });

    });
  });

}));
