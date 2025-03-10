/*
 * Selling Partner API for A+ Content Management
 * With the A+ Content API, you can build applications that help selling partners add rich marketing content to their Amazon product detail pages. A+ content helps selling partners share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners assemble content by choosing from content modules and adding images and text.
 *
 * OpenAPI spec version: 2020-11-01
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
import {TextComponent} from './TextComponent.js';

/**
 * The StandardTextPairBlock model module.
 * @module aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/StandardTextPairBlock
 * @version 2020-11-01
 */
export class StandardTextPairBlock {
  /**
   * Constructs a new <code>StandardTextPairBlock</code>.
   * The A+ Content standard label and description block, comprised of a pair of text components.
   * @alias module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/StandardTextPairBlock
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>StandardTextPairBlock</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/StandardTextPairBlock} obj Optional instance to populate.
   * @return {module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/StandardTextPairBlock} The populated <code>StandardTextPairBlock</code> instance.
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
      obj = obj || new StandardTextPairBlock();
      if (data.hasOwnProperty('label'))
        obj.label = TextComponent.constructFromObject(data['label']);
      if (data.hasOwnProperty('description'))
        obj.description = TextComponent.constructFromObject(data['description']);
    }
    return obj;
  }
}

/**
 * @member {module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/TextComponent} label
 */
StandardTextPairBlock.prototype.label = undefined;

/**
 * @member {module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/TextComponent} description
 */
StandardTextPairBlock.prototype.description = undefined;


