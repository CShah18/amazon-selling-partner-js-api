/*
 * Selling Partner API for A+ Content Management
 * With the A+ Content API, you can build applications that help selling partners add rich marketing content to their Amazon product detail pages. A+ content helps selling partners share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners assemble content by choosing from content modules and adding images and text.
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
    define(['expect.js', '../../../src/aplusContent_2020-11-01/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/aplusContent_2020-11-01/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForAContentManagement);
  }
}(this, function(expect, SellingPartnerApiForAContentManagement) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForAContentManagement.AplusContentApi();
  });

  describe('aplusContent_2020-11-01', function() {
    describe('AplusContentApi', function() {
      describe('createContentDocument', function() {
        it('should call createContentDocument successfully', function(done) {
          // TODO: uncomment, update parameter values for createContentDocument call and complete the assertions
          /*
          var marketplaceId = "marketplaceId_example";
          var postContentDocumentRequest = new SellingPartnerApiForAContentManagement.PostContentDocumentRequest();
          postContentDocumentRequest.contentDocument = new SellingPartnerApiForAContentManagement.ContentDocument();
          postContentDocumentRequest.contentDocument.name = "";
          postContentDocumentRequest.contentDocument.contentType = new SellingPartnerApiForAContentManagement.ContentType();
          postContentDocumentRequest.contentDocument.contentSubType = new SellingPartnerApiForAContentManagement.ContentSubType();
          postContentDocumentRequest.contentDocument.locale = new SellingPartnerApiForAContentManagement.LanguageTag();
          postContentDocumentRequest.contentDocument.contentModuleList = new SellingPartnerApiForAContentManagement.ContentModuleList();

          instance.createContentDocument(marketplaceId, postContentDocumentRequest).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForAContentManagement.PostContentDocumentResponse);
            expect(data.warnings).to.be.a(SellingPartnerApiForAContentManagement.MessageSet);
                expect(data.contentReferenceKey).to.be.a(SellingPartnerApiForAContentManagement.ContentReferenceKey);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getContentDocument', function() {
        it('should call getContentDocument successfully', function(done) {
          // TODO: uncomment, update parameter values for getContentDocument call and complete the assertions
          /*
          var contentReferenceKey = "contentReferenceKey_example";
          var marketplaceId = "marketplaceId_example";
          var includedDataSet = ["includedDataSet_example"];

          instance.getContentDocument(contentReferenceKey, marketplaceId, includedDataSet).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForAContentManagement.GetContentDocumentResponse);
            expect(data.warnings).to.be.a(SellingPartnerApiForAContentManagement.MessageSet);
                expect(data.contentRecord).to.be.a(SellingPartnerApiForAContentManagement.ContentRecord);
                  expect(data.contentRecord.contentReferenceKey).to.be.a(SellingPartnerApiForAContentManagement.ContentReferenceKey);
                  expect(data.contentRecord.contentMetadata).to.be.a(SellingPartnerApiForAContentManagement.ContentMetadata);
                    expect(data.contentRecord.contentMetadata.name).to.be.a('string');
                // expect(data.contentRecord.contentMetadata.name).to.be("");
                expect(data.contentRecord.contentMetadata.marketplaceId).to.be.a(SellingPartnerApiForAContentManagement.MarketplaceId);
                    expect(data.contentRecord.contentMetadata.status).to.be.a(SellingPartnerApiForAContentManagement.ContentStatus);
                    expect(data.contentRecord.contentMetadata.badgeSet).to.be.a(SellingPartnerApiForAContentManagement.ContentBadgeSet);
                    expect(data.contentRecord.contentMetadata.updateTime).to.be.a(Date);
                // expect(data.contentRecord.contentMetadata.updateTime).to.be(new Date());
              expect(data.contentRecord.contentDocument).to.be.a(SellingPartnerApiForAContentManagement.ContentDocument);
                    expect(data.contentRecord.contentDocument.name).to.be.a('string');
                // expect(data.contentRecord.contentDocument.name).to.be("");
                expect(data.contentRecord.contentDocument.contentType).to.be.a(SellingPartnerApiForAContentManagement.ContentType);
                    expect(data.contentRecord.contentDocument.contentSubType).to.be.a(SellingPartnerApiForAContentManagement.ContentSubType);
                    expect(data.contentRecord.contentDocument.locale).to.be.a(SellingPartnerApiForAContentManagement.LanguageTag);
                    expect(data.contentRecord.contentDocument.contentModuleList).to.be.a(SellingPartnerApiForAContentManagement.ContentModuleList);
        

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listContentDocumentAsinRelations', function() {
        it('should call listContentDocumentAsinRelations successfully', function(done) {
          // TODO: uncomment, update parameter values for listContentDocumentAsinRelations call and complete the assertions
          /*
          var contentReferenceKey = "contentReferenceKey_example";
          var marketplaceId = "marketplaceId_example";
          var opts = {};
          opts.includedDataSet = ["includedDataSet_example"];
          opts.asinSet = ["asinSet_example"];
          opts.pageToken = "pageToken_example";

          instance.listContentDocumentAsinRelations(contentReferenceKey, marketplaceId, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForAContentManagement.ListContentDocumentAsinRelationsResponse);
            expect(data.warnings).to.be.a(SellingPartnerApiForAContentManagement.MessageSet);
                expect(data.nextPageToken).to.be.a(SellingPartnerApiForAContentManagement.PageToken);
                expect(data.asinMetadataSet).to.be.a(SellingPartnerApiForAContentManagement.AsinMetadataSet);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postContentDocumentApprovalSubmission', function() {
        it('should call postContentDocumentApprovalSubmission successfully', function(done) {
          // TODO: uncomment, update parameter values for postContentDocumentApprovalSubmission call and complete the assertions
          /*
          var contentReferenceKey = "contentReferenceKey_example";
          var marketplaceId = "marketplaceId_example";

          instance.postContentDocumentApprovalSubmission(contentReferenceKey, marketplaceId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForAContentManagement.PostContentDocumentApprovalSubmissionResponse);
            expect(data.warnings).to.be.a(SellingPartnerApiForAContentManagement.MessageSet);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postContentDocumentAsinRelations', function() {
        it('should call postContentDocumentAsinRelations successfully', function(done) {
          // TODO: uncomment, update parameter values for postContentDocumentAsinRelations call and complete the assertions
          /*
          var contentReferenceKey = "contentReferenceKey_example";
          var marketplaceId = "marketplaceId_example";
          var postContentDocumentAsinRelationsRequest = new SellingPartnerApiForAContentManagement.PostContentDocumentAsinRelationsRequest();
          postContentDocumentAsinRelationsRequest.asinSet = new SellingPartnerApiForAContentManagement.AsinSet();

          instance.postContentDocumentAsinRelations(contentReferenceKey, marketplaceId, postContentDocumentAsinRelationsRequest).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForAContentManagement.PostContentDocumentAsinRelationsResponse);
            expect(data.warnings).to.be.a(SellingPartnerApiForAContentManagement.MessageSet);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postContentDocumentSuspendSubmission', function() {
        it('should call postContentDocumentSuspendSubmission successfully', function(done) {
          // TODO: uncomment, update parameter values for postContentDocumentSuspendSubmission call and complete the assertions
          /*
          var contentReferenceKey = "contentReferenceKey_example";
          var marketplaceId = "marketplaceId_example";

          instance.postContentDocumentSuspendSubmission(contentReferenceKey, marketplaceId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForAContentManagement.PostContentDocumentSuspendSubmissionResponse);
            expect(data.warnings).to.be.a(SellingPartnerApiForAContentManagement.MessageSet);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('searchContentDocuments', function() {
        it('should call searchContentDocuments successfully', function(done) {
          // TODO: uncomment, update parameter values for searchContentDocuments call and complete the assertions
          /*
          var marketplaceId = "marketplaceId_example";
          var opts = {};
          opts.pageToken = "pageToken_example";

          instance.searchContentDocuments(marketplaceId, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForAContentManagement.SearchContentDocumentsResponse);
            expect(data.warnings).to.be.a(SellingPartnerApiForAContentManagement.MessageSet);
                expect(data.nextPageToken).to.be.a(SellingPartnerApiForAContentManagement.PageToken);
                expect(data.contentMetadataRecords).to.be.a(SellingPartnerApiForAContentManagement.ContentMetadataRecordList);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('searchContentPublishRecords', function() {
        it('should call searchContentPublishRecords successfully', function(done) {
          // TODO: uncomment, update parameter values for searchContentPublishRecords call and complete the assertions
          /*
          var marketplaceId = "marketplaceId_example";
          var asin = "asin_example";
          var opts = {};
          opts.pageToken = "pageToken_example";

          instance.searchContentPublishRecords(marketplaceId, asin, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForAContentManagement.SearchContentPublishRecordsResponse);
            expect(data.warnings).to.be.a(SellingPartnerApiForAContentManagement.MessageSet);
                expect(data.nextPageToken).to.be.a(SellingPartnerApiForAContentManagement.PageToken);
                expect(data.publishRecordList).to.be.a(SellingPartnerApiForAContentManagement.PublishRecordList);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateContentDocument', function() {
        it('should call updateContentDocument successfully', function(done) {
          // TODO: uncomment, update parameter values for updateContentDocument call and complete the assertions
          /*
          var contentReferenceKey = "contentReferenceKey_example";
          var marketplaceId = "marketplaceId_example";
          var postContentDocumentRequest = new SellingPartnerApiForAContentManagement.PostContentDocumentRequest();
          postContentDocumentRequest.contentDocument = new SellingPartnerApiForAContentManagement.ContentDocument();
          postContentDocumentRequest.contentDocument.name = "";
          postContentDocumentRequest.contentDocument.contentType = new SellingPartnerApiForAContentManagement.ContentType();
          postContentDocumentRequest.contentDocument.contentSubType = new SellingPartnerApiForAContentManagement.ContentSubType();
          postContentDocumentRequest.contentDocument.locale = new SellingPartnerApiForAContentManagement.LanguageTag();
          postContentDocumentRequest.contentDocument.contentModuleList = new SellingPartnerApiForAContentManagement.ContentModuleList();

          instance.updateContentDocument(contentReferenceKey, marketplaceId, postContentDocumentRequest).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForAContentManagement.PostContentDocumentResponse);
            expect(data.warnings).to.be.a(SellingPartnerApiForAContentManagement.MessageSet);
                expect(data.contentReferenceKey).to.be.a(SellingPartnerApiForAContentManagement.ContentReferenceKey);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('validateContentDocumentAsinRelations', function() {
        it('should call validateContentDocumentAsinRelations successfully', function(done) {
          // TODO: uncomment, update parameter values for validateContentDocumentAsinRelations call and complete the assertions
          /*
          var marketplaceId = "marketplaceId_example";
          var postContentDocumentRequest = new SellingPartnerApiForAContentManagement.PostContentDocumentRequest();
          postContentDocumentRequest.contentDocument = new SellingPartnerApiForAContentManagement.ContentDocument();
          postContentDocumentRequest.contentDocument.name = "";
          postContentDocumentRequest.contentDocument.contentType = new SellingPartnerApiForAContentManagement.ContentType();
          postContentDocumentRequest.contentDocument.contentSubType = new SellingPartnerApiForAContentManagement.ContentSubType();
          postContentDocumentRequest.contentDocument.locale = new SellingPartnerApiForAContentManagement.LanguageTag();
          postContentDocumentRequest.contentDocument.contentModuleList = new SellingPartnerApiForAContentManagement.ContentModuleList();
          var opts = {};
          opts.asinSet = ["asinSet_example"];

          instance.validateContentDocumentAsinRelations(marketplaceId, postContentDocumentRequest, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForAContentManagement.ValidateContentDocumentAsinRelationsResponse);
            expect(data.warnings).to.be.a(SellingPartnerApiForAContentManagement.MessageSet);
                {
              let dataCtr = data.errors;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SellingPartnerApiForAContentManagement.Error);
                expect(data.code).to.be.a('string');
                // expect(data.code).to.be("");
                expect(data.message).to.be.a('string');
                // expect(data.message).to.be("");
                expect(data.details).to.be.a('string');
                // expect(data.details).to.be("");
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
