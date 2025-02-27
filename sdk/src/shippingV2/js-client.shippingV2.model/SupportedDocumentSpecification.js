/*
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * OpenAPI spec version: v2
 * Contact: swa-api-core@amazon.com
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
import {DocumentFormat} from './DocumentFormat.js';
import {DocumentSize} from './DocumentSize.js';
import {PrintOptionList} from './PrintOptionList.js';

/**
 * The SupportedDocumentSpecification model module.
 * @module shippingV2/js-client.shippingV2.model/SupportedDocumentSpecification
 * @version v2
 */
export class SupportedDocumentSpecification {
  /**
   * Constructs a new <code>SupportedDocumentSpecification</code>.
   * Document specification that is supported for a service offering.
   * @alias module:shippingV2/js-client.shippingV2.model/SupportedDocumentSpecification
   * @class
   * @param format {module:shippingV2/js-client.shippingV2.model/DocumentFormat} 
   * @param size {module:shippingV2/js-client.shippingV2.model/DocumentSize} 
   * @param printOptions {module:shippingV2/js-client.shippingV2.model/PrintOptionList} 
   */
  constructor(format, size, printOptions) {
    this.format = format;
    this.size = size;
    this.printOptions = printOptions;
  }

  /**
   * Constructs a <code>SupportedDocumentSpecification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shippingV2/js-client.shippingV2.model/SupportedDocumentSpecification} obj Optional instance to populate.
   * @return {module:shippingV2/js-client.shippingV2.model/SupportedDocumentSpecification} The populated <code>SupportedDocumentSpecification</code> instance.
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
      obj = obj || new SupportedDocumentSpecification();
      if (data.hasOwnProperty('format'))
        obj.format = DocumentFormat.constructFromObject(data['format']);
      if (data.hasOwnProperty('size'))
        obj.size = DocumentSize.constructFromObject(data['size']);
      if (data.hasOwnProperty('printOptions'))
        obj.printOptions = PrintOptionList.constructFromObject(data['printOptions']);
    }
    return obj;
  }
}

/**
 * @member {module:shippingV2/js-client.shippingV2.model/DocumentFormat} format
 */
SupportedDocumentSpecification.prototype.format = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/DocumentSize} size
 */
SupportedDocumentSpecification.prototype.size = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/PrintOptionList} printOptions
 */
SupportedDocumentSpecification.prototype.printOptions = undefined;


