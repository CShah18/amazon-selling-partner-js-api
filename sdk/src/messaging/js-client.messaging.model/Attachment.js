/*
 * Selling Partner API for Messaging
 * With the Messaging API you can build applications that send messages to buyers. You can get a list of message types that are available for an order that you specify, then call an operation that sends a message to the buyer for that order. The Messaging API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
 *
 * OpenAPI spec version: v1
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

/**
 * The Attachment model module.
 * @module messaging/js-client.messaging.model/Attachment
 * @version v1
 */
export class Attachment {
  /**
   * Constructs a new <code>Attachment</code>.
   * Represents a file that was uploaded to a destination that was created by the Uploads API [`createUploadDestinationForResource`](https://developer-docs.amazon.com/sp-api/docs/uploads-api-reference#post-uploads2020-11-01uploaddestinationsresource) operation.
   * @alias module:messaging/js-client.messaging.model/Attachment
   * @class
   * @param uploadDestinationId {String} The identifier for the upload destination. To retrieve this value, call the Uploads API [`createUploadDestinationForResource`](https://developer-docs.amazon.com/sp-api/docs/uploads-api-reference#post-uploads2020-11-01uploaddestinationsresource) operation.
   * @param fileName {String} The name of the file, including the extension. This is the file name that will appear in the message. This does not need to match the file name of the file that you uploaded.
   */
  constructor(uploadDestinationId, fileName) {
    this.uploadDestinationId = uploadDestinationId;
    this.fileName = fileName;
  }

  /**
   * Constructs a <code>Attachment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:messaging/js-client.messaging.model/Attachment} obj Optional instance to populate.
   * @return {module:messaging/js-client.messaging.model/Attachment} The populated <code>Attachment</code> instance.
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
      obj = obj || new Attachment();
      if (data.hasOwnProperty('uploadDestinationId'))
        obj.uploadDestinationId = ApiClient.convertToType(data['uploadDestinationId'], 'String');
      if (data.hasOwnProperty('fileName'))
        obj.fileName = ApiClient.convertToType(data['fileName'], 'String');
    }
    return obj;
  }
}

/**
 * The identifier for the upload destination. To retrieve this value, call the Uploads API [`createUploadDestinationForResource`](https://developer-docs.amazon.com/sp-api/docs/uploads-api-reference#post-uploads2020-11-01uploaddestinationsresource) operation.
 * @member {String} uploadDestinationId
 */
Attachment.prototype.uploadDestinationId = undefined;

/**
 * The name of the file, including the extension. This is the file name that will appear in the message. This does not need to match the file name of the file that you uploaded.
 * @member {String} fileName
 */
Attachment.prototype.fileName = undefined;


