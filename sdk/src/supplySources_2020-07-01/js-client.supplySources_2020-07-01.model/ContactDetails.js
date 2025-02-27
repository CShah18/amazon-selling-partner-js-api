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
import {ContactDetailsPrimary} from './ContactDetailsPrimary.js';

/**
 * The ContactDetails model module.
 * @module supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/ContactDetails
 * @version 2020-07-01
 */
export class ContactDetails {
  /**
   * Constructs a new <code>ContactDetails</code>.
   * The contact details
   * @alias module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/ContactDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ContactDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/ContactDetails} obj Optional instance to populate.
   * @return {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/ContactDetails} The populated <code>ContactDetails</code> instance.
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
      obj = obj || new ContactDetails();
      if (data.hasOwnProperty('primary'))
        obj.primary = ContactDetailsPrimary.constructFromObject(data['primary']);
    }
    return obj;
  }
}

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/ContactDetailsPrimary} primary
 */
ContactDetails.prototype.primary = undefined;


