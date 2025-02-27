/*
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
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
 * The FixedSlot model module.
 * @module services/js-client.services.model/FixedSlot
 * @version v1
 */
export class FixedSlot {
  /**
   * Constructs a new <code>FixedSlot</code>.
   * In this slot format each slot only has the requested capacity types. This slot size is as specified by slot duration.
   * @alias module:services/js-client.services.model/FixedSlot
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FixedSlot</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:services/js-client.services.model/FixedSlot} obj Optional instance to populate.
   * @return {module:services/js-client.services.model/FixedSlot} The populated <code>FixedSlot</code> instance.
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
      obj = obj || new FixedSlot();
      if (data.hasOwnProperty('startDateTime'))
        obj.startDateTime = ApiClient.convertToType(data['startDateTime'], 'Date');
      if (data.hasOwnProperty('scheduledCapacity'))
        obj.scheduledCapacity = ApiClient.convertToType(data['scheduledCapacity'], 'Number');
      if (data.hasOwnProperty('availableCapacity'))
        obj.availableCapacity = ApiClient.convertToType(data['availableCapacity'], 'Number');
      if (data.hasOwnProperty('encumberedCapacity'))
        obj.encumberedCapacity = ApiClient.convertToType(data['encumberedCapacity'], 'Number');
      if (data.hasOwnProperty('reservedCapacity'))
        obj.reservedCapacity = ApiClient.convertToType(data['reservedCapacity'], 'Number');
    }
    return obj;
  }
}

/**
 * Start date time of slot in ISO 8601 format with precision of seconds.
 * @member {Date} startDateTime
 */
FixedSlot.prototype.startDateTime = undefined;

/**
 * Scheduled capacity corresponding to the slot. This capacity represents the originally allocated capacity as per resource schedule.
 * @member {Number} scheduledCapacity
 */
FixedSlot.prototype.scheduledCapacity = undefined;

/**
 * Available capacity corresponding to the slot. This capacity represents the capacity available for allocation to reservations.
 * @member {Number} availableCapacity
 */
FixedSlot.prototype.availableCapacity = undefined;

/**
 * Encumbered capacity corresponding to the slot. This capacity represents the capacity allocated for Amazon Jobs/Appointments/Orders.
 * @member {Number} encumberedCapacity
 */
FixedSlot.prototype.encumberedCapacity = undefined;

/**
 * Reserved capacity corresponding to the slot. This capacity represents the capacity made unavailable due to events like Breaks/Leaves/Lunch.
 * @member {Number} reservedCapacity
 */
FixedSlot.prototype.reservedCapacity = undefined;


