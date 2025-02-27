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

import {ApiClient} from '../ApiClient.js';
import {FeedList} from './FeedList.js';

/**
 * The GetFeedsResponse model module.
 * @module feeds_2021-06-30/js-client.feeds_2021-06-30.model/GetFeedsResponse
 * @version 2021-06-30
 */
export class GetFeedsResponse {
  /**
   * Constructs a new <code>GetFeedsResponse</code>.
   * Response schema.
   * @alias module:feeds_2021-06-30/js-client.feeds_2021-06-30.model/GetFeedsResponse
   * @class
   * @param feeds {module:feeds_2021-06-30/js-client.feeds_2021-06-30.model/FeedList} The feeds.
   */
  constructor(feeds) {
    this.feeds = feeds;
  }

  /**
   * Constructs a <code>GetFeedsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:feeds_2021-06-30/js-client.feeds_2021-06-30.model/GetFeedsResponse} obj Optional instance to populate.
   * @return {module:feeds_2021-06-30/js-client.feeds_2021-06-30.model/GetFeedsResponse} The populated <code>GetFeedsResponse</code> instance.
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
      obj = obj || new GetFeedsResponse();
      if (data.hasOwnProperty('feeds'))
        obj.feeds = FeedList.constructFromObject(data['feeds']);
      if (data.hasOwnProperty('nextToken'))
        obj.nextToken = ApiClient.convertToType(data['nextToken'], 'String');
    }
    return obj;
  }
}

/**
 * The feeds.
 * @member {module:feeds_2021-06-30/js-client.feeds_2021-06-30.model/FeedList} feeds
 */
GetFeedsResponse.prototype.feeds = undefined;

/**
 * Returned when the number of results exceeds pageSize. To get the next page of results, call the getFeeds operation with this token as the only parameter.
 * @member {String} nextToken
 */
GetFeedsResponse.prototype.nextToken = undefined;


