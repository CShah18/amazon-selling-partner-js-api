/*
 * Selling Partner API for Easy Ship
 * The Selling Partner API for Easy Ship helps you build applications that help sellers manage and ship Amazon Easy Ship orders.  Your Easy Ship applications can:  * Get available time slots for packages to be scheduled for delivery.  * Schedule, reschedule, and cancel Easy Ship orders.  * Print labels, invoices, and warranties.  See the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) for the differences in Easy Ship operations by marketplace.
 *
 * OpenAPI spec version: 2022-03-23
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
import {HandoverMethod} from './HandoverMethod.js';
import {ModelString} from './ModelString.js';

/**
 * The TimeSlot model module.
 * @module easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/TimeSlot
 * @version 2022-03-23
 */
export class TimeSlot {
  /**
   * Constructs a new <code>TimeSlot</code>.
   * A time window to hand over an Easy Ship package to Amazon Logistics.
   * @alias module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/TimeSlot
   * @class
   * @param slotId {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/ModelString} An Amazon-defined identifier for a time slot.
   */
  constructor(slotId) {
    this.slotId = slotId;
  }

  /**
   * Constructs a <code>TimeSlot</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/TimeSlot} obj Optional instance to populate.
   * @return {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/TimeSlot} The populated <code>TimeSlot</code> instance.
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
      obj = obj || new TimeSlot();
      if (data.hasOwnProperty('slotId'))
        obj.slotId = ModelString.constructFromObject(data['slotId']);
      if (data.hasOwnProperty('startTime'))
        obj.startTime = 'Date'.constructFromObject(data['startTime']);
      if (data.hasOwnProperty('endTime'))
        obj.endTime = 'Date'.constructFromObject(data['endTime']);
      if (data.hasOwnProperty('handoverMethod'))
        obj.handoverMethod = HandoverMethod.constructFromObject(data['handoverMethod']);
    }
    return obj;
  }
}

/**
 * An Amazon-defined identifier for a time slot.
 * @member {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/ModelString} slotId
 */
TimeSlot.prototype.slotId = undefined;

/**
 * The start date and time of the time slot.
 * @member {Date} startTime
 */
TimeSlot.prototype.startTime = undefined;

/**
 * The end date and time of the time slot.
 * @member {Date} endTime
 */
TimeSlot.prototype.endTime = undefined;

/**
 * The method by which a seller will hand a package over to Amazon Logistics.
 * @member {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/HandoverMethod} handoverMethod
 */
TimeSlot.prototype.handoverMethod = undefined;


