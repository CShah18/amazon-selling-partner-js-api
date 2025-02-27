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

/**
 * The FeedDocumentEncryptionDetails model module.
 * @module feeds_2020-09-04/js-client.feeds_2020-09-04.model/FeedDocumentEncryptionDetails
 * @version 2020-09-04
 */
export class FeedDocumentEncryptionDetails {
  /**
   * Constructs a new <code>FeedDocumentEncryptionDetails</code>.
   * Encryption details for required client-side encryption and decryption of document contents.
   * @alias module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/FeedDocumentEncryptionDetails
   * @class
   * @param standard {module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/FeedDocumentEncryptionDetails.StandardEnum} The encryption standard required to encrypt or decrypt the document contents.
   * @param initializationVector {String} The vector to encrypt or decrypt the document contents using Cipher Block Chaining (CBC).
   * @param key {String} The encryption key used to encrypt or decrypt the document contents.
   */
  constructor(standard, initializationVector, key) {
    this.standard = standard;
    this.initializationVector = initializationVector;
    this.key = key;
  }

  /**
   * Constructs a <code>FeedDocumentEncryptionDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/FeedDocumentEncryptionDetails} obj Optional instance to populate.
   * @return {module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/FeedDocumentEncryptionDetails} The populated <code>FeedDocumentEncryptionDetails</code> instance.
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
      obj = obj || new FeedDocumentEncryptionDetails();
      if (data.hasOwnProperty('standard'))
        obj.standard = ApiClient.convertToType(data['standard'], 'String');
      if (data.hasOwnProperty('initializationVector'))
        obj.initializationVector = ApiClient.convertToType(data['initializationVector'], 'String');
      if (data.hasOwnProperty('key'))
        obj.key = ApiClient.convertToType(data['key'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>standard</code> property.
 * @enum {String}
 * @readonly
 */
FeedDocumentEncryptionDetails.StandardEnum = {
  /**
   * value: "AES"
   * @const
   */
  AES: "AES"
};

/**
 * The encryption standard required to encrypt or decrypt the document contents.
 * @member {module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/FeedDocumentEncryptionDetails.StandardEnum} standard
 */
FeedDocumentEncryptionDetails.prototype.standard = undefined;

/**
 * The vector to encrypt or decrypt the document contents using Cipher Block Chaining (CBC).
 * @member {String} initializationVector
 */
FeedDocumentEncryptionDetails.prototype.initializationVector = undefined;

/**
 * The encryption key used to encrypt or decrypt the document contents.
 * @member {String} key
 */
FeedDocumentEncryptionDetails.prototype.key = undefined;


