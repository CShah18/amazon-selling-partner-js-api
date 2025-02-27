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
import {AccessPointId} from './AccessPointId.js';
import {AccessPointType} from './AccessPointType.js';
import {AccessibilityAttributes} from './AccessibilityAttributes.js';
import {Address} from './Address.js';
import {DayOfWeekTimeMap} from './DayOfWeekTimeMap.js';
import {ExceptionOperatingHours} from './ExceptionOperatingHours.js';

/**
 * The AccessPoint model module.
 * @module shippingV2/js-client.shippingV2.model/AccessPoint
 * @version v2
 */
export class AccessPoint {
  /**
   * Constructs a new <code>AccessPoint</code>.
   * Access point details
   * @alias module:shippingV2/js-client.shippingV2.model/AccessPoint
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AccessPoint</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shippingV2/js-client.shippingV2.model/AccessPoint} obj Optional instance to populate.
   * @return {module:shippingV2/js-client.shippingV2.model/AccessPoint} The populated <code>AccessPoint</code> instance.
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
      obj = obj || new AccessPoint();
      if (data.hasOwnProperty('accessPointId'))
        obj.accessPointId = AccessPointId.constructFromObject(data['accessPointId']);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('timezone'))
        obj.timezone = ApiClient.convertToType(data['timezone'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = AccessPointType.constructFromObject(data['type']);
      if (data.hasOwnProperty('accessibilityAttributes'))
        obj.accessibilityAttributes = AccessibilityAttributes.constructFromObject(data['accessibilityAttributes']);
      if (data.hasOwnProperty('address'))
        obj.address = Address.constructFromObject(data['address']);
      if (data.hasOwnProperty('exceptionOperatingHours'))
        obj.exceptionOperatingHours = ApiClient.convertToType(data['exceptionOperatingHours'], [ExceptionOperatingHours]);
      if (data.hasOwnProperty('assistanceType'))
        obj.assistanceType = ApiClient.convertToType(data['assistanceType'], 'String');
      if (data.hasOwnProperty('score'))
        obj.score = ApiClient.convertToType(data['score'], 'String');
      if (data.hasOwnProperty('standardOperatingHours'))
        obj.standardOperatingHours = DayOfWeekTimeMap.constructFromObject(data['standardOperatingHours']);
    }
    return obj;
  }
}

/**
 * @member {module:shippingV2/js-client.shippingV2.model/AccessPointId} accessPointId
 */
AccessPoint.prototype.accessPointId = undefined;

/**
 * Name of entity (store/hub etc) where this access point is located
 * @member {String} name
 */
AccessPoint.prototype.name = undefined;

/**
 * Timezone of access point
 * @member {String} timezone
 */
AccessPoint.prototype.timezone = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/AccessPointType} type
 */
AccessPoint.prototype.type = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/AccessibilityAttributes} accessibilityAttributes
 */
AccessPoint.prototype.accessibilityAttributes = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/Address} address
 */
AccessPoint.prototype.address = undefined;

/**
 * @member {Array.<module:shippingV2/js-client.shippingV2.model/ExceptionOperatingHours>} exceptionOperatingHours
 */
AccessPoint.prototype.exceptionOperatingHours = undefined;

/**
 * Allowed values for the <code>assistanceType</code> property.
 * @enum {String}
 * @readonly
 */
AccessPoint.AssistanceTypeEnum = {
  /**
   * value: "STAFF_ASSISTED"
   * @const
   */
  STAFF_ASSISTED: "STAFF_ASSISTED",

  /**
   * value: "SELF_ASSISTED"
   * @const
   */
  SELF_ASSISTED: "SELF_ASSISTED"
};

/**
 * @member {module:shippingV2/js-client.shippingV2.model/AccessPoint.AssistanceTypeEnum} assistanceType
 */
AccessPoint.prototype.assistanceType = undefined;

/**
 * The score of access point, based on proximity to postal code and sorting preference. This can be used to sort access point results on shipper's end.
 * @member {String} score
 */
AccessPoint.prototype.score = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/DayOfWeekTimeMap} standardOperatingHours
 */
AccessPoint.prototype.standardOperatingHours = undefined;


