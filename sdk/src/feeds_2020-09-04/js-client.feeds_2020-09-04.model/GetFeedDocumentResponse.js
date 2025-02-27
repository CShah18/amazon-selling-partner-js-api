/*
 * Selling Partner API for Feeds
 * Effective **June 27, 2024**, the Selling Partner API for Feeds v2020-09-04 will no longer be available and all calls to it will fail. Integrations that rely on the Feeds API must migrate to [Feeds v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference) to avoid service disruption.
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
import {ErrorList} from './ErrorList.js';
import {FeedDocument} from './FeedDocument.js';

/**
 * The GetFeedDocumentResponse model module.
 * @module feeds_2020-09-04/js-client.feeds_2020-09-04.model/GetFeedDocumentResponse
 * @version 2020-09-04
 */
export class GetFeedDocumentResponse {
  /**
   * Constructs a new <code>GetFeedDocumentResponse</code>.
   * Response schema.
   * @alias module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/GetFeedDocumentResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetFeedDocumentResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/GetFeedDocumentResponse} obj Optional instance to populate.
   * @return {module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/GetFeedDocumentResponse} The populated <code>GetFeedDocumentResponse</code> instance.
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
      obj = obj || new GetFeedDocumentResponse();
      if (data.hasOwnProperty('payload'))
        obj.payload = FeedDocument.constructFromObject(data['payload']);
      if (data.hasOwnProperty('errors'))
        obj.errors = ErrorList.constructFromObject(data['errors']);
    }
    return obj;
  }
}

/**
 * @member {module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/FeedDocument} payload
 */
GetFeedDocumentResponse.prototype.payload = undefined;

/**
 * @member {module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/ErrorList} errors
 */
GetFeedDocumentResponse.prototype.errors = undefined;


