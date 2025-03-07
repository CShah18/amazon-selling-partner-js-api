/*
 * Selling Partner API for Reports
 * Effective **June 27, 2024**, the Selling Partner API for Reports v2020-09-04 will no longer be available and all calls to it will fail. Integrations that rely on the Reports API must migrate to [Reports v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference) to avoid service disruption.
 *
 * OpenAPI spec version: 2020-09-04
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
    define(['expect.js', '../../../src/reports_2020-09-04/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/reports_2020-09-04/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForReports);
  }
}(this, function(expect, SellingPartnerApiForReports) {
  'use strict';

  var instance;

  describe('reports_2020-09-04', function() {
    describe('Report', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForReports.Report();
      });

      it('should create an instance of Report', function() {
        // TODO: update the code to test Report
        expect(instance).to.be.a(SellingPartnerApiForReports.Report);
      });

      it('should have the property marketplaceIds (base name: "marketplaceIds")', function() {
        // TODO: update the code to test the property marketplaceIds
        expect(instance).to.have.property('marketplaceIds');
        // expect(instance.marketplaceIds).to.be(expectedValueLiteral);
      });

      it('should have the property reportId (base name: "reportId")', function() {
        // TODO: update the code to test the property reportId
        expect(instance).to.have.property('reportId');
        // expect(instance.reportId).to.be(expectedValueLiteral);
      });

      it('should have the property reportType (base name: "reportType")', function() {
        // TODO: update the code to test the property reportType
        expect(instance).to.have.property('reportType');
        // expect(instance.reportType).to.be(expectedValueLiteral);
      });

      it('should have the property dataStartTime (base name: "dataStartTime")', function() {
        // TODO: update the code to test the property dataStartTime
        expect(instance).to.have.property('dataStartTime');
        // expect(instance.dataStartTime).to.be(expectedValueLiteral);
      });

      it('should have the property dataEndTime (base name: "dataEndTime")', function() {
        // TODO: update the code to test the property dataEndTime
        expect(instance).to.have.property('dataEndTime');
        // expect(instance.dataEndTime).to.be(expectedValueLiteral);
      });

      it('should have the property reportScheduleId (base name: "reportScheduleId")', function() {
        // TODO: update the code to test the property reportScheduleId
        expect(instance).to.have.property('reportScheduleId');
        // expect(instance.reportScheduleId).to.be(expectedValueLiteral);
      });

      it('should have the property createdTime (base name: "createdTime")', function() {
        // TODO: update the code to test the property createdTime
        expect(instance).to.have.property('createdTime');
        // expect(instance.createdTime).to.be(expectedValueLiteral);
      });

      it('should have the property processingStatus (base name: "processingStatus")', function() {
        // TODO: update the code to test the property processingStatus
        expect(instance).to.have.property('processingStatus');
        // expect(instance.processingStatus).to.be(expectedValueLiteral);
      });

      it('should have the property processingStartTime (base name: "processingStartTime")', function() {
        // TODO: update the code to test the property processingStartTime
        expect(instance).to.have.property('processingStartTime');
        // expect(instance.processingStartTime).to.be(expectedValueLiteral);
      });

      it('should have the property processingEndTime (base name: "processingEndTime")', function() {
        // TODO: update the code to test the property processingEndTime
        expect(instance).to.have.property('processingEndTime');
        // expect(instance.processingEndTime).to.be(expectedValueLiteral);
      });

      it('should have the property reportDocumentId (base name: "reportDocumentId")', function() {
        // TODO: update the code to test the property reportDocumentId
        expect(instance).to.have.property('reportDocumentId');
        // expect(instance.reportDocumentId).to.be(expectedValueLiteral);
      });

    });
  });

}));
