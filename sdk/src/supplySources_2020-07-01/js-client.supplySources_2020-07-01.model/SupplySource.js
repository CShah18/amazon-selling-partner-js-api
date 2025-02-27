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
import {Address} from './Address.js';
import {SupplySourceAlias} from './SupplySourceAlias.js';
import {SupplySourceCapabilities} from './SupplySourceCapabilities.js';
import {SupplySourceCode} from './SupplySourceCode.js';
import {SupplySourceConfiguration} from './SupplySourceConfiguration.js';
import {SupplySourceId} from './SupplySourceId.js';
import {SupplySourceStatusReadOnly} from './SupplySourceStatusReadOnly.js';

/**
 * The SupplySource model module.
 * @module supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/SupplySource
 * @version 2020-07-01
 */
export class SupplySource {
  /**
   * Constructs a new <code>SupplySource</code>.
   * The supply source details, including configurations and capabilities.
   * @alias module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/SupplySource
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SupplySource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/SupplySource} obj Optional instance to populate.
   * @return {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/SupplySource} The populated <code>SupplySource</code> instance.
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
      obj = obj || new SupplySource();
      if (data.hasOwnProperty('supplySourceId'))
        obj.supplySourceId = SupplySourceId.constructFromObject(data['supplySourceId']);
      if (data.hasOwnProperty('supplySourceCode'))
        obj.supplySourceCode = SupplySourceCode.constructFromObject(data['supplySourceCode']);
      if (data.hasOwnProperty('alias'))
        obj.alias = SupplySourceAlias.constructFromObject(data['alias']);
      if (data.hasOwnProperty('status'))
        obj.status = SupplySourceStatusReadOnly.constructFromObject(data['status']);
      if (data.hasOwnProperty('address'))
        obj.address = Address.constructFromObject(data['address']);
      if (data.hasOwnProperty('configuration'))
        obj.configuration = SupplySourceConfiguration.constructFromObject(data['configuration']);
      if (data.hasOwnProperty('capabilities'))
        obj.capabilities = SupplySourceCapabilities.constructFromObject(data['capabilities']);
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = 'Date'.constructFromObject(data['createdAt']);
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = 'Date'.constructFromObject(data['updatedAt']);
    }
    return obj;
  }
}

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/SupplySourceId} supplySourceId
 */
SupplySource.prototype.supplySourceId = undefined;

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/SupplySourceCode} supplySourceCode
 */
SupplySource.prototype.supplySourceCode = undefined;

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/SupplySourceAlias} alias
 */
SupplySource.prototype.alias = undefined;

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/SupplySourceStatusReadOnly} status
 */
SupplySource.prototype.status = undefined;

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/Address} address
 */
SupplySource.prototype.address = undefined;

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/SupplySourceConfiguration} configuration
 */
SupplySource.prototype.configuration = undefined;

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/SupplySourceCapabilities} capabilities
 */
SupplySource.prototype.capabilities = undefined;

/**
 * @member {Date} createdAt
 */
SupplySource.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
SupplySource.prototype.updatedAt = undefined;


