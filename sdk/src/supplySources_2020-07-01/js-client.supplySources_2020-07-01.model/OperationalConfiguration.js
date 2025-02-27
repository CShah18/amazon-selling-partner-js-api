/*
 * Selling Partner API for Supply Sources
 * Manage configurations and capabilities of seller supply sources.
 *
 * OpenAPI spec version: 2020-07-01
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
import {ContactDetails} from './ContactDetails.js';
import {Duration} from './Duration.js';
import {OperatingHoursByDay} from './OperatingHoursByDay.js';
import {ThroughputConfig} from './ThroughputConfig.js';

/**
 * The OperationalConfiguration model module.
 * @module supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/OperationalConfiguration
 * @version 2020-07-01
 */
export class OperationalConfiguration {
  /**
   * Constructs a new <code>OperationalConfiguration</code>.
   * The operational configuration of `supplySources`.
   * @alias module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/OperationalConfiguration
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OperationalConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/OperationalConfiguration} obj Optional instance to populate.
   * @return {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/OperationalConfiguration} The populated <code>OperationalConfiguration</code> instance.
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
      obj = obj || new OperationalConfiguration();
      if (data.hasOwnProperty('contactDetails'))
        obj.contactDetails = ContactDetails.constructFromObject(data['contactDetails']);
      if (data.hasOwnProperty('throughputConfig'))
        obj.throughputConfig = ThroughputConfig.constructFromObject(data['throughputConfig']);
      if (data.hasOwnProperty('operatingHoursByDay'))
        obj.operatingHoursByDay = OperatingHoursByDay.constructFromObject(data['operatingHoursByDay']);
      if (data.hasOwnProperty('handlingTime'))
        obj.handlingTime = Duration.constructFromObject(data['handlingTime']);
    }
    return obj;
  }
}

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/ContactDetails} contactDetails
 */
OperationalConfiguration.prototype.contactDetails = undefined;

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/ThroughputConfig} throughputConfig
 */
OperationalConfiguration.prototype.throughputConfig = undefined;

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/OperatingHoursByDay} operatingHoursByDay
 */
OperationalConfiguration.prototype.operatingHoursByDay = undefined;

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/Duration} handlingTime
 */
OperationalConfiguration.prototype.handlingTime = undefined;


