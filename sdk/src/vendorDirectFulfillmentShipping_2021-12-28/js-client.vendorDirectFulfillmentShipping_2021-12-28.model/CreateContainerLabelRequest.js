/*
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
 *
 * OpenAPI spec version: 2021-12-28
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
import {CarrierId} from './CarrierId.js';
import {Packages} from './Packages.js';
import {PartyIdentification} from './PartyIdentification.js';
import {VendorContainerId} from './VendorContainerId.js';

/**
 * The CreateContainerLabelRequest model module.
 * @module vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/CreateContainerLabelRequest
 * @version 2021-12-28
 */
export class CreateContainerLabelRequest {
  /**
   * Constructs a new <code>CreateContainerLabelRequest</code>.
   * The request body schema for the `createContainerLabel` operation.
   * @alias module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/CreateContainerLabelRequest
   * @class
   * @param sellingParty {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/PartyIdentification} The ID of the selling party or vendor.
   * @param shipFromParty {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/PartyIdentification} The warehouse code of the vendor.
   * @param carrierId {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/CarrierId} The container (pallet) label's carrier.
   * @param vendorContainerId {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/VendorContainerId} The vendor's unique identifier for the container.
   * @param packages {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/Packages} An array of package objects that associates shipment packages with a container.
   */
  constructor(sellingParty, shipFromParty, carrierId, vendorContainerId, packages) {
    this.sellingParty = sellingParty;
    this.shipFromParty = shipFromParty;
    this.carrierId = carrierId;
    this.vendorContainerId = vendorContainerId;
    this.packages = packages;
  }

  /**
   * Constructs a <code>CreateContainerLabelRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/CreateContainerLabelRequest} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/CreateContainerLabelRequest} The populated <code>CreateContainerLabelRequest</code> instance.
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
      obj = obj || new CreateContainerLabelRequest();
      if (data.hasOwnProperty('sellingParty'))
        obj.sellingParty = PartyIdentification.constructFromObject(data['sellingParty']);
      if (data.hasOwnProperty('shipFromParty'))
        obj.shipFromParty = PartyIdentification.constructFromObject(data['shipFromParty']);
      if (data.hasOwnProperty('carrierId'))
        obj.carrierId = CarrierId.constructFromObject(data['carrierId']);
      if (data.hasOwnProperty('vendorContainerId'))
        obj.vendorContainerId = VendorContainerId.constructFromObject(data['vendorContainerId']);
      if (data.hasOwnProperty('packages'))
        obj.packages = Packages.constructFromObject(data['packages']);
    }
    return obj;
  }
}

/**
 * The ID of the selling party or vendor.
 * @member {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/PartyIdentification} sellingParty
 */
CreateContainerLabelRequest.prototype.sellingParty = undefined;

/**
 * The warehouse code of the vendor.
 * @member {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/PartyIdentification} shipFromParty
 */
CreateContainerLabelRequest.prototype.shipFromParty = undefined;

/**
 * The container (pallet) label's carrier.
 * @member {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/CarrierId} carrierId
 */
CreateContainerLabelRequest.prototype.carrierId = undefined;

/**
 * The vendor's unique identifier for the container.
 * @member {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/VendorContainerId} vendorContainerId
 */
CreateContainerLabelRequest.prototype.vendorContainerId = undefined;

/**
 * An array of package objects that associates shipment packages with a container.
 * @member {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/Packages} packages
 */
CreateContainerLabelRequest.prototype.packages = undefined;


