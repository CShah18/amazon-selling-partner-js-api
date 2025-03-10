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
 * The ServiceJobProvider model module.
 * @module services/js-client.services.model/ServiceJobProvider
 * @version v1
 */
export class ServiceJobProvider {
  /**
   * Constructs a new <code>ServiceJobProvider</code>.
   * Information about the service job provider.
   * @alias module:services/js-client.services.model/ServiceJobProvider
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ServiceJobProvider</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:services/js-client.services.model/ServiceJobProvider} obj Optional instance to populate.
   * @return {module:services/js-client.services.model/ServiceJobProvider} The populated <code>ServiceJobProvider</code> instance.
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
      obj = obj || new ServiceJobProvider();
      if (data.hasOwnProperty('serviceJobProviderId'))
        obj.serviceJobProviderId = ApiClient.convertToType(data['serviceJobProviderId'], 'String');
    }
    return obj;
  }
}

/**
 * The identifier of the service job provider.
 * @member {String} serviceJobProviderId
 */
ServiceJobProvider.prototype.serviceJobProviderId = undefined;


