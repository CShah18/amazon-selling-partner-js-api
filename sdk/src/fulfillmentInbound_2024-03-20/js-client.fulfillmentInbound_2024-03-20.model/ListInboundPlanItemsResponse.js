/*
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
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
import {Item} from './Item.js';
import {Pagination} from './Pagination.js';

/**
 * The ListInboundPlanItemsResponse model module.
 * @module fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/ListInboundPlanItemsResponse
 * @version 2024-03-20
 */
export class ListInboundPlanItemsResponse {
  /**
   * Constructs a new <code>ListInboundPlanItemsResponse</code>.
   * The `listInboundPlanItems` response.
   * @alias module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/ListInboundPlanItemsResponse
   * @class
   * @param items {Array.<module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/Item>} The items in an inbound plan.
   */
  constructor(items) {
    this.items = items;
  }

  /**
   * Constructs a <code>ListInboundPlanItemsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/ListInboundPlanItemsResponse} obj Optional instance to populate.
   * @return {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/ListInboundPlanItemsResponse} The populated <code>ListInboundPlanItemsResponse</code> instance.
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
      obj = obj || new ListInboundPlanItemsResponse();
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [Item]);
      if (data.hasOwnProperty('pagination'))
        obj.pagination = Pagination.constructFromObject(data['pagination']);
    }
    return obj;
  }
}

/**
 * The items in an inbound plan.
 * @member {Array.<module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/Item>} items
 */
ListInboundPlanItemsResponse.prototype.items = undefined;

/**
 * @member {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/Pagination} pagination
 */
ListInboundPlanItemsResponse.prototype.pagination = undefined;


