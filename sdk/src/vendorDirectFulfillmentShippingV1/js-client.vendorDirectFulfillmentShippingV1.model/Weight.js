/*
 * Selling Partner API for Direct Fulfillment Shipping
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor's shipping data.
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
import {Decimal} from './Decimal.js';

/**
 * The Weight model module.
 * @module vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/Weight
 * @version v1
 */
export class Weight {
  /**
   * Constructs a new <code>Weight</code>.
   * The weight.
   * @alias module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/Weight
   * @class
   * @param unitOfMeasure {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/Weight.UnitOfMeasureEnum} The unit of measurement.
   * @param value {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/Decimal} The measurement value.
   */
  constructor(unitOfMeasure, value) {
    this.unitOfMeasure = unitOfMeasure;
    this.value = value;
  }

  /**
   * Constructs a <code>Weight</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/Weight} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/Weight} The populated <code>Weight</code> instance.
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
      obj = obj || new Weight();
      if (data.hasOwnProperty('unitOfMeasure'))
        obj.unitOfMeasure = ApiClient.convertToType(data['unitOfMeasure'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = Decimal.constructFromObject(data['value']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>unitOfMeasure</code> property.
 * @enum {String}
 * @readonly
 */
Weight.UnitOfMeasureEnum = {
  /**
   * value: "KG"
   * @const
   */
  KG: "KG",

  /**
   * value: "LB"
   * @const
   */
  LB: "LB"
};

/**
 * The unit of measurement.
 * @member {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/Weight.UnitOfMeasureEnum} unitOfMeasure
 */
Weight.prototype.unitOfMeasure = undefined;

/**
 * The measurement value.
 * @member {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/Decimal} value
 */
Weight.prototype.value = undefined;


