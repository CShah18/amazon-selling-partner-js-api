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

import {ApiClient} from '../ApiClient.js';
import {ReportSchedule} from './ReportSchedule.js';

/**
 * The ReportScheduleList model module.
 * @module reports_2020-09-04/js-client.reports_2020-09-04.model/ReportScheduleList
 * @version 2020-09-04
 */
export class ReportScheduleList extends Array {
  /**
   * Constructs a new <code>ReportScheduleList</code>.
   * @alias module:reports_2020-09-04/js-client.reports_2020-09-04.model/ReportScheduleList
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>ReportScheduleList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:reports_2020-09-04/js-client.reports_2020-09-04.model/ReportScheduleList} obj Optional instance to populate.
   * @return {module:reports_2020-09-04/js-client.reports_2020-09-04.model/ReportScheduleList} The populated <code>ReportScheduleList</code> instance.
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
      obj = obj || new ReportScheduleList();
      ApiClient.constructFromObject(data, obj, 'ReportSchedule');
    }
    return obj;
  }
}

