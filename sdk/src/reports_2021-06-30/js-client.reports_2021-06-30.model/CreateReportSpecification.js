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

import {ApiClient} from '../ApiClient.js';
import {ReportOptions} from './ReportOptions.js';

/**
 * The CreateReportSpecification model module.
 * @module reports_2021-06-30/js-client.reports_2021-06-30.model/CreateReportSpecification
 * @version 2021-06-30
 */
export class CreateReportSpecification {
  /**
   * Constructs a new <code>CreateReportSpecification</code>.
   * Information required to create the report.
   * @alias module:reports_2021-06-30/js-client.reports_2021-06-30.model/CreateReportSpecification
   * @class
   * @param reportType {String} The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information.
   * @param marketplaceIds {Array.<String>} A list of marketplace identifiers. The report document's contents will contain data for all of the specified marketplaces, unless the report type indicates otherwise.
   */
  constructor(reportType, marketplaceIds) {
    this.reportType = reportType;
    this.marketplaceIds = marketplaceIds;
  }

  /**
   * Constructs a <code>CreateReportSpecification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:reports_2021-06-30/js-client.reports_2021-06-30.model/CreateReportSpecification} obj Optional instance to populate.
   * @return {module:reports_2021-06-30/js-client.reports_2021-06-30.model/CreateReportSpecification} The populated <code>CreateReportSpecification</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      switch(typeof data) {
        case 'string':
          obj = String(data);
          break;
        case 'number':
          obj = Number(data);
          break;
        case 'boolean':
          obj = Boolean(data);
          break;
      }
      obj = obj || new CreateReportSpecification();
      if (data.hasOwnProperty('reportOptions'))
        obj.reportOptions = ReportOptions.constructFromObject(data['reportOptions']);
      if (data.hasOwnProperty('reportType'))
        obj.reportType = ApiClient.convertToType(data['reportType'], 'String');
      if (data.hasOwnProperty('dataStartTime'))
        obj.dataStartTime = ApiClient.convertToType(data['dataStartTime'], 'Date');
      if (data.hasOwnProperty('dataEndTime'))
        obj.dataEndTime = ApiClient.convertToType(data['dataEndTime'], 'Date');
      if (data.hasOwnProperty('marketplaceIds'))
        obj.marketplaceIds = ApiClient.convertToType(data['marketplaceIds'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {module:reports_2021-06-30/js-client.reports_2021-06-30.model/ReportOptions} reportOptions
 */
CreateReportSpecification.prototype.reportOptions = undefined;

/**
 * The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information.
 * @member {String} reportType
 */
CreateReportSpecification.prototype.reportType = undefined;

/**
 * The start of a date and time range, in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date time format, used for selecting the data to report. The default is now. The value must be prior to or equal to the current date and time. Not all report types make use of this.
 * @member {Date} dataStartTime
 */
CreateReportSpecification.prototype.dataStartTime = undefined;

/**
 * The end of a date and time range, in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date time format, used for selecting the data to report. The default is now. The value must be prior to or equal to the current date and time. Not all report types make use of this.
 * @member {Date} dataEndTime
 */
CreateReportSpecification.prototype.dataEndTime = undefined;

/**
 * A list of marketplace identifiers. The report document's contents will contain data for all of the specified marketplaces, unless the report type indicates otherwise.
 * @member {Array.<String>} marketplaceIds
 */
CreateReportSpecification.prototype.marketplaceIds = undefined;


